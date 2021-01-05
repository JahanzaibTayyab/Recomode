import React from 'react';
import {View, StyleSheet, Modal} from 'react-native';
import LottieView from 'lottie-react-native';

function UploadScreen({onDone, visible = false}) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <LottieView
          autoPlay
          loop={false}
          onAnimationFinish={onDone}
          source={require('../../assets/animations/lf30_editor_qm6t1035.json')}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 150,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default UploadScreen;
