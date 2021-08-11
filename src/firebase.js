import firebase from '@firebase/app';
require('firebase/auth');
require("firebase/firestore");


const firebaseConfig = {
  apiKey: "AIzaSyCxcnj6-5-yDth8x14NToyCig4rHPvfmIc",
  authDomain: "weatherapp-dbb74.firebaseapp.com",
  projectId: "weatherapp-dbb74",
  storageBucket: "weatherapp-dbb74.appspot.com",
  messagingSenderId: "118043395343",
  appId: "1:118043395343:web:b08637dffd131134d06a7a"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export {db};
export const auth = app.auth();
export default app;