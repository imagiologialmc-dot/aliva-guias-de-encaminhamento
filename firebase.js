// 1. Importar as ferramentas do Firebase diretamente da web (CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";

// 2. A sua configuração oficial da Aliva Saúde
const firebaseConfig = {
  apiKey: "AIzaSyDFqzj2K3GsulAL1X17RGzs6DcHKmyBUMA",
  authDomain: "aliva-guias-de-encaminhamento.firebaseapp.com",
  projectId: "aliva-guias-de-encaminhamento",
  storageBucket: "aliva-guias-de-encaminhamento.firebasestorage.app",
  messagingSenderId: "325204238014",
  appId: "1:325204238014:web:b0bebdad162c059e2ac8ef",
  measurementId: "G-T080VBZ2E3"
};

// 3. Inicializar o Firebase com os seus dados
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 4. Exportar as ferramentas para usarmos no nosso HTML
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
