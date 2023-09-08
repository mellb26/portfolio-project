import { auth } from "../config/firebase-config";
import "../App.css";
import {
  createUserWithEmailAndPassword,

} from "firebase/auth";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

export const SignUpScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    
    const validatePassword = () => {
      let isValid = true;
      if (password !== "" && confirmPassword !== "") {
        if (password !== confirmPassword) {
          isValid = false;
          setError("Passwords does not match");
        }
      }
      return isValid;
    };
    const register = (e) => {
      e.preventDefault();
      setError("");
      if (validatePassword()) {
        // Create a new user with email and password using firebase
        createUserWithEmailAndPassword(auth, email, password)
          .then((res) => {
            console.log(res.user);
          })
          .catch((err) => setError(err.message));
      }
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    };

  return (
    <div>
        <input
          placeholder="Email..."></input>
      <button className="button button-1" onClick={register}>
        Sign up
      </button>
    </div>
  );
};
