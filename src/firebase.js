import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBe48H3-exnNARmOM0zzjv7orAdf_E0AcQ",
  authDomain: "auth-development-1dda9.firebaseapp.com",
  projectId: "auth-development-1dda9",
  storageBucket: "auth-development-1dda9.appspot.com",
  messagingSenderId: "1071291016249",
  appId: "1:1071291016249:web:9aaa9fe3305a65fb9ad9e8",
  measurementId: "G-BLZ4NWCKVJ"
});

const firestore = app.firestore()
export const database = {
  folders: firestore.collection('folders'),
  files: firestore.collection('files'),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth();
export default app;
