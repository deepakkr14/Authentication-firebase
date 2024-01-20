// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAddUzy56S_Fd9ynLhR2NrwXQPUB1M2i8",
  authDomain: "react-api-backend-dc22b.firebaseapp.com",
  databaseURL: "https://react-api-backend-dc22b-default-rtdb.firebaseio.com",
  projectId: "react-api-backend-dc22b",
  storageBucket: "react-api-backend-dc22b.appspot.com",
  messagingSenderId: "309522531802",
  appId: "1:309522531802:web:34e2bdb7686dbe6bc62ce3",
  measurementId: "G-FRHE547FSL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)
