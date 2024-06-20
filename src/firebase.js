// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'gastronomy-blog.firebaseapp.com',
  projectId: 'gastronomy-blog',
  storageBucket: 'gastronomy-blog.appspot.com',
  messagingSenderId: '889405646391',
  appId: '1:889405646391:web:41a4d0ccd87602acf041b2',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
