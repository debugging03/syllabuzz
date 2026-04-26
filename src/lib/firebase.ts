import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInAnonymously, signOut, onAuthStateChanged, User } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Log warning if config is missing (helps debug GitHub Secrets)
if (!import.meta.env.VITE_FIREBASE_API_KEY) {
  console.warn("Syllabuzz: Firebase API Key is missing. Anonymous and Google Auth will not work on this domain unless you add VITE_ secrets to your GitHub build env.");
}

// Initialize Firebase
let app;
try {
  if (getApps().length > 0) {
    app = getApp();
  } else if (import.meta.env.VITE_FIREBASE_API_KEY) {
    app = initializeApp(firebaseConfig);
  }
} catch (error) {
  console.error("Firebase initialization failed:", error);
}

export const auth = app ? getAuth(app) : null;
export const db = app ? getFirestore(app) : null;
export const analytics = (app && typeof window !== 'undefined') ? isSupported().then(yes => yes ? getAnalytics(app) : null) : Promise.resolve(null);

// Auth logic
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  if (!auth) {
    alert("Firebase is not configured on this domain. Please check your GitHub Secrets and ensure they are prefixed with VITE_ and passed to the build step.");
    return null;
  }
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error: any) {
    console.error("Error signing in with Google:", error);
    if (error.code === 'auth/unauthorized-domain') {
      alert("This domain is not authorized in your Firebase Console. Add 'debugging03.github.io' to the Authorized Domains in Firebase Auth settings.");
    } else {
      alert("Sign-in failed: " + error.message);
    }
  }
};

export const logout = async () => {
  if (!auth) return;
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
};

export const signInAnonymous = async () => {
  if (!auth) return null;
  try {
    const result = await signInAnonymously(auth);
    return result.user;
  } catch (error) {
    console.error("Error signing in anonymously:", error);
    throw error;
  }
};

export { onAuthStateChanged };
export type { User };
export default app;
