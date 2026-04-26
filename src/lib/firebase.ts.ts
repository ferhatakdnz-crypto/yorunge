import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyWOoU5Pcg8br12XxdsxW8zDXXVDOWt9o",
  authDomain: "yorunge-ac10d.firebaseapp.com",
  projectId: "yorunge-ac10d",
  storageBucket: "yorunge-ac10d.firebasestorage.app",
  messagingSenderId: "558639396224",
  appId: "1:558639396224:web:71b93bc160c03cae1cfd65",
  measurementId: "G-2LV1YEM5QP"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);
// Veritabanını (Firestore) dışa aktar
export const db = getFirestore(app);