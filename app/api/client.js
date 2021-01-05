import {create} from 'apisauce';
const subscriptionKey = '5118f9db05eb4e10baac9e56359f03a2';
const apiClient = create({
  baseURL: 'https://recomodeface.cognitiveservices.azure.com',
  headers: {
    'Ocp-Apim-Subscription-Key': subscriptionKey,
    'Content-Type': 'application/octet-stream',
  },
});

export default apiClient;
