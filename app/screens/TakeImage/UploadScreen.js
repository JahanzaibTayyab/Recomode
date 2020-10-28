import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import LottieView from 'lottie-react-native';

function UploadScreen({ onDone, progress = 0, visible = false, error = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <LottieView
            autoPlay
            loop={true}
            source={require('../../assets/animations/lf20_QYKV0O.json')}
          />
        ) : error ? (
          console.log('Error Yha aya')
        ) : (
              <LottieView
                autoPlay
                loop={false}
                onAnimationFinish={onDone}
                source={require('../../assets/animations/lf30_editor_3zhccxej.json')}
              />
            )}
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
