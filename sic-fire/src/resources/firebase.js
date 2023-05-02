// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoWdJCZtMEotuGXKY0QORlFucYXUHf8WM",
  authDomain: "sic-ecommerce-2023.firebaseapp.com",
  projectId: "sic-ecommerce-2023",
  storageBucket: "sic-ecommerce-2023.appspot.com",
  messagingSenderId: "100316843296",
  appId: "1:100316843296:web:f3bffaa12812c758a51b45",
  measurementId: "G-8ECPHZ5FT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);