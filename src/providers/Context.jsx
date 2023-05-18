/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../firebase.config";

const auth = getAuth(app);
export const myContext = createContext();
const Context = ({ children }) => {
    const [user,setUser]=useState(null)
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loggedInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
      return () => {
          return unsuscribe();
      }
  }, []);
  const authInfo = { createUser, loggedInUser, logOutUser,user };
  return <myContext.Provider value={authInfo}>{children}</myContext.Provider>;
};

export default Context;
