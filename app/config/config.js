import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDWEIAU7qkeLq5LbfA7yVHLwl1ZlCGGXRg",
  authDomain: "recomode-5a12b.firebaseapp.com",
  databaseURL: "https://recomode-5a12b.firebaseio.com",
  projectId: "recomode-5a12b",
  storageBucket: "recomode-5a12b.appspot.com",
  messagingSenderId: "938951481573",
  appId: "1:938951481573:web:ebc45d050510fd80a6dc0c",
  measurementId: "G-2MM7ZRPCZC",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
