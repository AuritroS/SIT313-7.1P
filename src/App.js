import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Navbar from "./Navbar";
import HeroBanner from "./HeroBanner";
import FeaturedSection from "./FeaturedSection";
import Footer from "./Footer";
import useAuth from "./hooks/useAuth";

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; 
  }

  const Site = () => (
    <>
      <Navbar />
      <HeroBanner />
      <FeaturedSection />
      <Footer />
    </>
  );

  return (
    <Routes>
      {/* Default route: if logged in → site, else → login */}
      <Route
        path="/"
        element={user ? <Site /> : <Navigate to="/login" replace />}
      />

      {/* Login + Signup (redirect if already logged in) */}
      <Route
        path="/login"
        element={user ? <Navigate to="/" replace /> : <Login />}
      />
      <Route
        path="/signup"
        element={user ? <Navigate to="/" replace /> : <Signup />}
      />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
