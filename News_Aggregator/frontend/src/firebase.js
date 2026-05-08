import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "dummy",
  authDomain: "dummy.firebaseapp.com",
  projectId: "dummy",
  storageBucket: "dummy.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:dummy"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
