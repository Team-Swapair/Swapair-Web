import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js';
import {
  getAuth, // authentication 설정
  signInWithPopup, //google 로그인을 팝업창에 띄우기 위해
  GoogleAuthProvider, //google login 기능
} from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyDv8ATYNSdH0OY2UCwbhQyk9ubL40LuaoE',
  authDomain: 'swapair-server-b3133.firebaseapp.com',
  projectId: 'swapair-server-b3133',
  storageBucket: 'swapair-server-b3133.appspot.com',
  messagingSenderId: '557895256208',
  appId: '1:557895256208:web:9bf3ca92d358c6cbfc3015',
  measurementId: 'G-PG4H4B9ET4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth 설정 필수!!
const auth = getAuth();

//Google 로그인
const provider = new GoogleAuthProvider();
export const loginGoogle = () => {
  return signInWithPopup(auth, provider);
};
