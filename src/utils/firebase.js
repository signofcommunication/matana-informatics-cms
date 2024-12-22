import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDk1MESo_XMqK-zlneQd7Npuy0Sgezc3NE",
  authDomain: "informatika-cms.firebaseapp.com",
  projectId: "informatika-cms",
  storageBucket: "informatika-cms.firebasestorage.app",
  messagingSenderId: "659142349448",
  appId: "1:659142349448:web:59687978911d7ccca2053d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
