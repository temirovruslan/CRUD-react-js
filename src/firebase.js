// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_YOUR_API_KEY,
	authDomain: process.env.REACT_APP_YOUR_AUTHDOMAIN,
	projectId: process.env.REACT_APP_YOUR_PROJECTID,
	storageBucket: process.env.REACT_APP_YOUR_STORAGEBUCKET,
	messagingSenderId: process.env.REACT_APP_YOUR_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_YOUR_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


