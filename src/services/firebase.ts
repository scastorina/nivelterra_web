import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDXZQNDwSy9NDbEjPTeOntsZkYf1S5G9I",
  authDomain: "nivelterra-13842.firebaseapp.com",
  projectId: "nivelterra-13842",
  storageBucket: "nivelterra-13842.firebasestorage.app",
  messagingSenderId: "968522823433",
  appId: "1:968522823433:web:c6ae0f2db5c35879e9c5d8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
