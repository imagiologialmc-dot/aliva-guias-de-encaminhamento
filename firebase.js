// Importações oficiais do Firebase (Versão 10.11.1)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// Configuração do seu projeto Firebase (Aliva Guias de Encaminhamento)
const firebaseConfig = {
  apiKey:"AIzaSyDFqzj2K3GsulAL1X17RGzs6DcHKmyBUMA",
  authDomain: "aliva-guias-de-encaminhamento.firebaseapp.com",
  projectId: "aliva-guias-de-encaminhamento",
  storageBucket: "aliva-guias-de-encaminhamento.firebasestorage.app",
  messagingSenderId: "325204238014",
  appId: "1:325204238014:web:b0bebdad162c059e2ac8ef"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa os serviços de Autenticação e Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
