import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDfqzj2K3GsuIAL1X17RGzs6DcHKmyBUMA",
  authDomain: "aliva-guias-de-encaminhamento.firebaseapp.com",
  projectId: "aliva-guias-de-encaminhamento",
  storageBucket: "aliva-guias-de-encaminhamento.firebasestorage.app",
  messagingSenderId: "325204238014",
  appId: "1:325204238014:web:b0bebdad162c059e2ac8ef"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
