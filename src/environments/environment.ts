// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyClcTP6HKHA6geLI2lAtaS5x8y4-E53m6A",
  authDomain: "generadorideas-8c057.firebaseapp.com",
  projectId: "generadorideas-8c057",
  storageBucket: "generadorideas-8c057.firebasestorage.app",
  messagingSenderId: "539945130941",
  appId: "1:539945130941:web:dc5499f2df744aa052d0d4",
  measurementId: "G-02NDLLWP2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);