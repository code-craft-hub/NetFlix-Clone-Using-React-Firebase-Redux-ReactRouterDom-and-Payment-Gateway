import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD6oGMt_w4XiMEbrb3xCAzs80vt8Xdi5EM",
    authDomain: "netflix-fa200.firebaseapp.com",
    projectId: "netflix-fa200",
    storageBucket: "netflix-fa200.appspot.com",
    messagingSenderId: "45187764267",
    appId: "1:45187764267:web:dbd021258f1429e3f49a6e"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export { auth }
  export default db;