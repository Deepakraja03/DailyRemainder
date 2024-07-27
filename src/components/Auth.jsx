// src/components/Auth.js
import React from 'react';
import { auth } from '../firebaseConfig';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/details');
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleLogin}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Auth;
