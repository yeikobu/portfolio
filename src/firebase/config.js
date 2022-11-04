// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD6lMvpwb_PPH9V-osWgZuK3qQJSrzuzM",
  authDomain: "portfolio-c3ddb.firebaseapp.com",
  projectId: "portfolio-c3ddb",
  storageBucket: "portfolio-c3ddb.appspot.com",
  messagingSenderId: "1059496530763",
  appId: "1:1059496530763:web:70c8b94a739ea3115d4ece",
  measurementId: "G-T5HDYV4L2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// getAnalytics(app);
