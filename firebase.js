// Importações oficiais do Firebase (Versão 10.11.1)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// Configuração do seu projeto Firebase (mantenha os seus dados atuais)
const firebaseConfig = {
  apiKey: "AIzaSy...", // Insira aqui a sua apiKey completa
  authDomain: "meu-turno-f4893.firebaseapp.com",
  projectId: "meu-turno-f4893",
  storageBucket: "meu-turno-f4893.appspot.com",
  messagingSenderId: "1053703358055",
  appId: "1:1053703358055:web:80c850220bc04ff8f39fc7"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa os serviços de Autenticação e Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
