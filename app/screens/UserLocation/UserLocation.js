import React from 'react'
import { View, Text } from 'react-native'
import { FONT_BOLD, FONT_LIGHT, FONT_Regular, FONT_SEMIBOLD, SCREEN_WIDTH } from "../../config/Constant"
import GetLocation from 'react-native-get-location'
import colors from "../../config/colors"
import MapView, { Marker, ProviderPropType } from 'react-native-maps';
import useAuth from "../../auth/useAuth";
export default function UserLocation({ navigation }) {
    const { user, logOut } = useAuth();
    const [region, setRegion] = React.useState({
        latitude: 23.8859,
        longitude: 45.0792,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009
    });
    const markerPostion = (val) => {
        setRegion({
            ...region,
            latitude: val.nativeEvent.coordinate.latitude,
            longitude: val.nativeEvent.coordinate.longitude,
        });
    };
    const getLocation = () => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
            .then(location => {
                setRegion({
                    ...region,
                    latitude: location.latitude,
                    longitude: location.longitude
                })
            })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            })
    }
    React.useEffect(() => {
        fetch('https://ipapi.co/json/')
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
            })
            .catch((error) => console.error(error))
            .finally(() => {
                getLocation();
                setIsLoading(false)
            });
    }, [])
    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <MapView
                style={{ width: '100%', height: "100%" }}
                region={region}
                onRegionChangeComplete={(region) => setRegion(region)}>
                <Marker
                    stopPropagation={false}
                    draggable={true}
                    title={user.fullName}
                    coordinate={{
                        latitude: region.latitude,
                        longitude: region.longitude,
                    }}
                    onDragEnd={(val) => markerPostion(val)}
                />
            </MapView>
        </View>
    )
}
