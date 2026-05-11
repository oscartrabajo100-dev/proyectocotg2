import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // <- Esta es la línea clave

const firebaseConfig = {
  apiKey: "AIzaSyBvboyF5qvpJtZnySKURynRAOWLzphZ6lc",
  authDomain: "proyectosg2-5a8f0.firebaseapp.com",
  projectId: "proyectosg2-5a8f0",
  storageBucket: "proyectosg2-5a8f0.firebasestorage.app",
  messagingSenderId: "251956288061",
  appId: "1:251956288061:web:a00115ba749cf372152854",
  measurementId: "G-6JYWF97JSM"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa y exporta la base de datos para que App.jsx la pueda encontrar
export const db = getFirestore(app);