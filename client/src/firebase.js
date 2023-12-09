// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8m7kAc68Wpi94sim_XcQC2jmqaI79BGg",
  authDomain: "pain-and-gain-ee0c1.firebaseapp.com",
  projectId: "pain-and-gain-ee0c1",
  storageBucket: "pain-and-gain-ee0c1.appspot.com",
  messagingSenderId: "115644534103",
  appId: "1:115644534103:web:80252e7e9f699b1f4b0212",
  measurementId: "G-PD4CZBE97V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app