import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCfoxtQy_MCf5_fqKFq4OsXYvvyhkmwEYo",
    authDomain: "alfa-app-b4052.firebaseapp.com",
    projectId: "alfa-app-b4052",
    storageBucket: "alfa-app-b4052.firebasestorage.app",
    messagingSenderId: "644138783201",
    appId: "1:644138783201:web:16308247c9ef93f1d242a0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

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