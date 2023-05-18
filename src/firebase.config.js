// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoci5IYJSzOa1qPZrG-DIEvQ-iEfMUvZY",
  authDomain: "toy-trove-project.firebaseapp.com",
  projectId: "toy-trove-project",
  storageBucket: "toy-trove-project.appspot.com",
  messagingSenderId: "1003089206894",
  appId: "1:1003089206894:web:e4d9a6cfbf05ec97f7d07f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
