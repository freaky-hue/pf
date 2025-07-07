import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1yxAsNoioIOMB8AHO-gW_hM2QTnH0jFg",
  authDomain: "musicfy-bc8a5.firebaseapp.com",
  projectId: "musicfy-bc8a5",
  storageBucket: "musicfy-bc8a5.firebasestorage.app",
  messagingSenderId: "313476291708",
  appId: "1:313476291708:web:64de039777bc76e624bdf9",
  measurementId: "G-LPVB6CZXB5"
};

initializeApp(firebaseConfig);