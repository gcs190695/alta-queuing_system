// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "alta-queuing-system-e7882.firebaseapp.com",
  projectId: "alta-queuing-system-e7882",
  storageBucket: "alta-queuing-system-e7882.appspot.com",
  messagingSenderId: "948754477194",
  appId: "1:948754477194:web:b56ed7bab1e9e442553d73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);