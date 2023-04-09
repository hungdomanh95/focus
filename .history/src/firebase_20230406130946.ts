// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9iT5974w7m3ubc1v9G-2DKVcbOq76iW4",
  authDomain: "pushnotification-538f2.firebaseapp.com",
  projectId: "pushnotification-538f2",
  storageBucket: "pushnotification-538f2.appspot.com",
  messagingSenderId: "775747682544",
  appId: "1:775747682544:web:af5def26963d75ebb4c235",
  measurementId: "G-YBGPFH4PQG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);