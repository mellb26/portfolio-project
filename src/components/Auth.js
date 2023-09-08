import { auth, db} from "../config/firebase-config";
import "../App.css";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  getAuth
} from "firebase/auth";
import { useState } from "react";
import {
  doc,
  setDoc,
  
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = () => {
    getAuth();
    createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
        const { user } = userCredential;
        const { uid, email } = user;
        // Add user details to Firestore
        const userDocRef = doc(db, 'users', uid);
           setDoc(userDocRef, {
             email,
             password,
        })
          .then(() => {
            console.log('User added to Firestore');
            return db.collection('users').doc(uid).get();
          })
          .catch((error) => {
            console.log('Something went wrong with adding user to Firestore or retrieving data:', error);
          });
      })
  }
  const signIn = () => {
    getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      return(user)
      })
      .catch((error) => {
        return(error)
      });
  }
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };
  
    const navToHome = () => {
      navigate("/Home");
  
    };
  return (
    <div>
      <div className="auth">
        <input
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password..."
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="container">
        <button className="button buttons" onClick={signUp}>
          Sign Up
        </button>
        <button className="button buttons" onClick={logOut}>
          {" "}
          Log Out
        </button>
        <button className="button buttons" onClick={signIn}>
          Sign In
        </button>
    
          <button className="button buttons" onClick={navToHome}>
           Skip Login{" "}
          </button>
      </div>
    </div>
  );
};
