// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu4KLSRVqptS67_fE0_yLzwovcpUArwsM",
  authDomain: "topicos-e0c14.firebaseapp.com",
  projectId: "topicos-e0c14",
  storageBucket: "topicos-e0c14.appspot.com",
  messagingSenderId: "107809661525",
  appId: "1:107809661525:web:77a042a65262ed8928aadc"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
export {db}