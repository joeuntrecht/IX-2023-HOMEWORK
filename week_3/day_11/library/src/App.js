import "./App.css";

import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import BookPage from "./components/books/BookPage";
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";
import Navbar from "./components/common/NavBar";
import RequireAuth from "./components/common/RequireAuth";
import Spinner from "./components/common/Spinner";

function App() {
  const [user, setUser] = useState(null);
  const [isUserUpdated, setIsUserUpdated] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsUserUpdated(true);
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar user={user} />
      {isUserUpdated ? (
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth user={user}>
                <BookPage user={user} />
              </RequireAuth>
            }
          ></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
        </Routes>
      ) : (
        <div className="mt-5 text-center">
          <Spinner />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
