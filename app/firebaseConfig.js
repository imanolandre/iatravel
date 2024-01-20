import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCervZcduYBp4Z-NagFz7_aLMUbc_10Sy4",
  authDomain: "iatravel.firebaseapp.com",
  projectId: "iatravel",
  storageBucket: "iatravel.appspot.com",
  messagingSenderId: "457985312225",
  appId: "1:457985312225:web:5d79e45ff0910c4b7b7ea0",
  measurementId: "G-PC9H8JSD3Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };