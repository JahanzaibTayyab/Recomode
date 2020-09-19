import React, {useState} from 'react';
import {View, Modal} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import base64ToArrayBuffer from 'base64-arraybuffer';
import LottieView from 'lottie-react-native';

import Button from '../../components/Button';
import ImageApi from '../../api/ImageAttributes';
import styles from './styles';
import UploadScreen from './UploadScreen';

export default function ImageView() {
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(false);
  const [title, setTitle] = useState('Take Image');
  const [errorJSON, setErrorJSON] = useState(
    require('../../assets/animations/3227-error-404-facebook-style.json'),
  );

  //api call
  const handleSubmit = async (Image) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await ImageApi.postImage(Image, (progress) =>
      setProgress(progress),
    );
    if (!result.ok) {
      console.log('Network ');
      console.log(result.problem);
      setUploadVisible(false);
      setTitle('Try Again');
      setError(true);
      setErrorJSON(require('../../assets/animations/3097-network-error.json'));
    } else {
      if (result.data.length === 0) {
        setError(true);
        setErrorJSON(
          require('../../assets/animations/14651-error-animation.json'),
        );
        setTitle('Try Again');
      }
      console.log(result.data.length);
      result.data.forEach((face) => {
        console.log('Face ID: ' + face.faceId);
        console.log('Gender: ' + face.faceAttributes.gender);
        console.log('Age: ' + face.faceAttributes.age);
        console.log('Glasses: ' + face.faceAttributes.glasses);
        console.log('Hair: ' + JSON.stringify(face.faceAttributes.hair));
        console.log();
      });
    }
  };
  // Select the Image From mobile
  const chooseImage = () => {
    let options = {
      title: 'Select Avatar',
      cameraType: 'front',
      mediaType: 'photo',
      base64: true,
      quality: 0.75,
      storageOptions: {
        skipBackup: true,
        path: 'Recomode',
      },
    };
    ImagePicker.launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const data = base64ToArrayBuffer.decode(response.data);
        handleSubmit(data);
      }
    });
  };

  return (
    <View style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      {!error ? (
        <LottieView
          autoPlay
          loop={true}
          source={require('../../assets/animations/selfi.json')}
          style={{width: '100%', top: -20}}
        />
      ) : (
        <LottieView
          autoPlay
          loop={true}
          source={errorJSON}
          style={{width: '90%', top: -20, padding: 20, margin: 10}}
        />
      )}
      <View style={styles.button}>
        <Button
          title={title}
          titlecolor="white"
          width="60%"
          onPress={chooseImage}
        />
      </View>
    </View>
  );
}
