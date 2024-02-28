// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA2orSA9jQzT5UfwdefrJVfWQUQGBILjVc',
  authDomain: 'shoppingapp-c869d.firebaseapp.com',
  projectId: 'shoppingapp-c869d',
  storageBucket: 'shoppingapp-c869d.appspot.com',
  messagingSenderId: '645043371139',
  appId: '1:645043371139:web:291fd193272d3a59e0afb6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
