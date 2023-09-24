import React, { useState, useEffect } from "react";
import { hamburger } from "../../assets/icons";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database"; // Import Firebase database modules

const Top = () => {
  const [userName, setUserName] = useState(null);

  const auth = getAuth();
  const db = getDatabase(); // Initialize Firebase Realtime Database

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const usersRef = ref(db, "users"); // Reference to the "users" node in the database
        get(usersRef.child(user.uid)).then((snapshot) => {
          const userData = snapshot.val();
          if (userData && userData.name) {
            setUserName(userData.name);
          }
        });
      } else {
        // No user is signed in
        setUserName(null);
      }
    });
    return () => unsubscribe();
  }, [auth, db]);

  return (
    <header className="px-4 py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container mx-auto">
        <Link to="/" className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden">
          <img src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/maintenance.png" alt="Logo" className="w-12 h-12" />
          <span className="text-3xl font-bold">Fix It</span>
        </Link>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden">
          {userName ? (
            <>
              <span>Welcome, {userName}!</span>
              <span>/</span>
              <Link to="/Logout">Log Out</Link>
            </>
          ) : (
            <>
              <Link to="/Signup">Sign in</Link>
              <span>/</span>
              <Link to="/Login">Log in</Link>
            </>
          )}
        </div>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Top;
