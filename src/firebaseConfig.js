// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBd1LiFmRF8DN7iUnAwZsUFZLUT3PJ-C3k",
	authDomain: "blogpage-crushcode.firebaseapp.com",
	projectId: "blogpage-crushcode",
	storageBucket: "blogpage-crushcode.appspot.com",
	messagingSenderId: "1090932914227",
	appId: "1:1090932914227:web:fea95f93803241692f8b46",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);