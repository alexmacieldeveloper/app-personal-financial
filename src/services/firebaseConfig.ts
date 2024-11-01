import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD8HopLV_-pGpx3vS2X8-SkZAiBsXUR1R0",
    authDomain: "app-personal-financial.firebaseapp.com",
    projectId: "app-personal-financial",
    storageBucket: "app-personal-financial.firebasestorage.app",
    messagingSenderId: "751676620359",
    appId: "1:751676620359:web:39eeb55f226cb0ef507b62",
    measurementId: "G-KLBC6CZJC1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
