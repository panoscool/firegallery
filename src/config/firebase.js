import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD77RTxdxCyF6oDIt8rczSo1yP5dOfU_9c",
  authDomain: "web-experiences.firebaseapp.com",
  databaseURL: "https://web-experiences.firebaseio.com",
  projectId: "web-experiences",
  storageBucket: "web-experiences.appspot.com",
  messagingSenderId: "197225287110",
  appId: "1:197225287110:web:818e484e81a82ddbf1f6c7"
};

firebase.initializeApp(firebaseConfig);

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export const auth = firebase.auth();
export const storage = firebase.storage();
export const firestore = firebase.firestore();