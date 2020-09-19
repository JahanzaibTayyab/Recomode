import React, {useState} from 'react';
import {View, Text} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import base64ToArrayBuffer from 'base64-arraybuffer';

import Button from '../../components/Button';
import ImageApi from '../../api/ImageAttributes';
import styles from './styles';

export default function ImageView() {
  const [fileUri, SetFileuri] = useState();
  const [responsedata, Setresponsedata] = useState([]);
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  //api call
  const handleSubmit = async (Image) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await ImageApi.postImage(Image, (progress) =>
      setProgress(progress),
    );
    if (!result.ok) {
      console.log(result.problem);
    } else {
      Setresponsedata(result.data);
      console.log(result.data);
      result.data.forEach((face) => {
        console.log('Face ID: ' + face.faceId);
        console.log('Gender: ' + face.faceAttributes.gender);
        setGender(face.faceAttributes.gender);
        // console.log(gender);
        console.log('Age: ' + face.faceAttributes.age);
        //console.log(age);
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
        SetFileuri(response.uri);
        const data = base64ToArrayBuffer.decode(response.data);
        handleSubmit(data);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title="Take Image"
          titlecolor="white"
          width="60%"
          onPress={chooseImage}
        />
      </View>
    </View>
  );
}
