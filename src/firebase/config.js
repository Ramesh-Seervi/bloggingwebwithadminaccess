import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBrXsfocLl9lwZBn5Pp1WBCgNwavGMBKeQ",
  authDomain: "blogpagedatabase.firebaseapp.com",
  projectId: "blogpagedatabase",
  storageBucket: "blogpagedatabase.appspot.com",
  messagingSenderId: "1028710772654",
  appId: "1:1028710772654:web:1e8e3cc4fabc61aca8623f",
  measurementId: "G-K0DGJGLCBD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);