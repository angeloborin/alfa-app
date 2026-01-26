import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "REMOVED",
    authDomain: "REMOVED",
    projectId: "REMOVED",
    storageBucket: "REMOVED.firebasestorage.app",
    messagingSenderId: "REMOVED",
    appId: "1:REMOVED:web:16308247c9ef93f1d242a0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Função auxiliar para criar/modificar usuário
export const createOrUpdateUser = async (userId, userData) => {
    const { setDoc, doc } = await import('firebase/firestore');
    await setDoc(doc(db, "users", userId), {
        ...userData,
        updatedAt: new Date().toISOString()
    }, { merge: true });
};

// Função para buscar usuário
export const getUserData = async (userId) => {
    const { getDoc, doc } = await import('firebase/firestore');
    const userDoc = await getDoc(doc(db, "users", userId));
    return userDoc.exists() ? userDoc.data() : null;
};