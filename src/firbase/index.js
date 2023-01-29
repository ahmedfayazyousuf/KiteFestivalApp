// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app"
import {getStorage} from "firebase/storage"
import "firebase/compat/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvPwmaLSK68ZNrD6qx_mh05_99UZ9iziY",
  authDomain: "kitebooking-2f6e4.firebaseapp.com",
  projectId: "kitebooking-2f6e4",
  storageBucket: "kitebooking-2f6e4.appspot.com",
  messagingSenderId: "787105546753",
  appId: "1:787105546753:web:3852bb42fe900d2dc2b600"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase; 
export const storage = getStorage(app);

