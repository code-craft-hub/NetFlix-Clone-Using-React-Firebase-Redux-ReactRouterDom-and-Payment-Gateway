import React, { Fragment, useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./ProfileScreen";

export default function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
        userAuth
          ? dispatch(
              login({
                uid: userAuth.uid,
                email: userAuth.email,
              })
            )
          : dispatch(logout());
      
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <Router>
    {!user ? (
        <LoginScreen />
      ) : (
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="profile" element={<ProfileScreen />} />
        </Routes>
      )}
    </Router> 
  );
}
