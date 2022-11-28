// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB38Z8vJ0mCSd1EuXnD1RqGYZIiwLmwzCc",
  authDomain: "tracking-trade.firebaseapp.com",
  projectId: "tracking-trade",
  storageBucket: "tracking-trade.appspot.com",
  messagingSenderId: "279508591994",
  appId: "1:279508591994:web:506b60900a518772b562c3",
  measurementId: "G-BNJYK2YKLE"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()