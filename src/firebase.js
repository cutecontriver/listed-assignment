import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOAZmytlD1z75vzU112AzQgtmKewXqt0s",
  authDomain: "listedassignment-e8046.firebaseapp.com",
  projectId: "listedassignment-e8046",
  storageBucket: "listedassignment-e8046.appspot.com",
  messagingSenderId: "998880452838",
  appId: "1:998880452838:web:57bdce37ca53e9d1f2db27",
  measurementId: "G-M901WF1RSW",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
