import firebase from "firebase";
import admin, { ServiceAccount } from "firebase-admin";
import serviceAccount from "../firebase-admin-sdk.json";

const firebaseConfig = {
  apiKey: "AIzaSyBwmeubyYV1KDcp07og8nM_ATRHEjbGE-M",
  authDomain: "proj-lore-cards.firebaseapp.com",
  projectId: "proj-lore-cards",
  storageBucket: "proj-lore-cards.appspot.com",
  messagingSenderId: "981276407958",
  appId: "1:981276407958:web:9d25f0b1438efb5283aab7",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize FireStore
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount),
});

export const db = admin.firestore();
