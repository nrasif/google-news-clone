import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC34OEbSOeK_K3VvBJIoAVqvn5xkacE1bc",
  authDomain: "news-clone-77e4b.firebaseapp.com",
  projectId: "news-clone-77e4b",
  storageBucket: "news-clone-77e4b.appspot.com",
  messagingSenderId: "668124812913",
  appId: "1:668124812913:web:c0753c9d286fa0f79fedd0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();