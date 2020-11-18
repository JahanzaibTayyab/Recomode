import React from 'react';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import { f, databse, auth } from '../config/config';
import { BlurView, VibrancyView } from "@react-native-community/blur";
import Modal from 'react-native-modal';

import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';
export default function checkScreen() {
  const [showAddToBagModal, setShowAddToBagModal] = React.useState(false)
  const [isDetailedView, setIsDetailedView] = React.useState(false)
  const toggleRecurringView = () => {
    setIsDetailedView(!isDetailedView)
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LoginButton
        onLoginFinished={
          (error, result) => {
            if (error) {
              console.log("login has error: " + result.error);
            } else if (result.isCancelled) {
              console.log("login is cancelled.");
            } else {
              AccessToken.getCurrentAccessToken().then(
                (data) => {
                  console.log(data.accessToken.toString())
                }
              )
            }
          }
        }
        onLogoutFinished={() => console.log("logout.")} />
      {isDetailedView ?
        <Modal coverScreen={true}
          isVisible={isDetailedView}
          hasBackdrop={true}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "white"
          }}
          backdropColor={"#eae9ee"}
          backdropOpacity={0.9}
          onBackdropPress={() => toggleRecurringView()}>
          <TouchableOpacity activeOpacity={1}
            style={[styles.container, {
              position: "absolute",
              width: constants.SCREEN_WIDTH,
              height: constants.SCREEN_HEIGHT
            }]} onPress={toggleRecurringView}>
            <BlurView style={styles.blurViewStyles}
              reducedTransparencyFallbackColor="black"
              blurType="light"
              blurAmount={5}
            />

            <View style={{
              width: "80%", position: 'absolute', backgroundColor: constants.COLOR_WHITE, top: 120, alignSelf: 'center', borderRadius: 10, shadowColor: constants.COLOR_SHADOW,
              shadowOpacity: 0.1,
              elevation: 1,
              shadowRadius: 10,
              shadowOffset: { width: 0, height: 1 }, height: 389
            }}>
              <Text style={{ fontFamily: constants.FONT_FAMILY_SEMIBOLD, fontSize: 22, marginTop: 20, marginLeft: 10 }}> Custom Recurring</Text>

              <Text style={{ fontSize: 10, fontFamily: constants.FONT_FAMILY_REGULAR, color: 'gray', marginTop: 20, marginLeft: 10 }}> Repeat every </Text>
              <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 20 }}>
                <TextInput

                  placeholder={'    1'}
                  style={{ width: 44, borderBottomWidth: 0.3, borderBottomColor: constants.COLOR_FILLED, justifyContent: 'center', alignItems: 'center' }}
                />
                <Text style={{ marginLeft: 10 }}> Days </Text>
              </View>




              <Text style={{ fontSize: 10, fontFamily: constants.FONT_FAMILY_REGULAR, color: 'gray', marginTop: 20, marginLeft: 10 }}> Repeat On </Text>
              <WeekView callback={daySelected} />
            </View>

          </TouchableOpacity>
        </Modal>

        : null}
    </View>
  );
}
