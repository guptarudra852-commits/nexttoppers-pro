import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB10bjjTfKcJPdSpNNXm0Qmsz2UKjkM3zc",
  authDomain: "nexttoppers-pro.firebaseapp.com",
  databaseURL: "https://nexttoppers-pro-default-rtdb.firebaseio.com",
  projectId: "nexttoppers-pro",
  storageBucket: "nexttoppers-pro.appspot.com",
  messagingSenderId: "515147458590",
  appId: "1:515147458590:web:91df42397801df433be60f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
