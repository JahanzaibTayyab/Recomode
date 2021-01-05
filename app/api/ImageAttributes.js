import client from './client';

const endpoint = '/face/v1.0/detect';
// api calling with microsoft azure cloud
const postImage = (data, onUploadProgress) => {
  console.log('Yha aya Api my ');
  return client.post(endpoint, data, {
    params: {
      returnFaceId: true,
      returnFaceLandmarks: false,
      returnFaceAttributes: 'age,gender,glasses,hair,smile,accessories,facialHair',
    },
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};
export default {
  postImage,
};
