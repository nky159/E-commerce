// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBQJ0dp2sSKRtZG0qe29pJgRDGVJQzIaw",
  authDomain: "my-ecom-d512c.firebaseapp.com",
  projectId: "my-ecom-d512c",
  storageBucket: "my-ecom-d512c.firebasestorage.app",
  messagingSenderId: "266424666236",
  appId: "1:266424666236:web:f22ae4f3f6923541f861f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }