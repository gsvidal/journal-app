// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD_DeT7Ww52pza6uQMeO0P4byT7Gl-GTIQ',
  authDomain: 'journal-app-b1067.firebaseapp.com',
  projectId: 'journal-app-b1067',
  storageBucket: 'journal-app-b1067.appspot.com',
  messagingSenderId: '1023308443698',
  appId: '1:1023308443698:web:9e8c2e1553ec8096538c2b',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
