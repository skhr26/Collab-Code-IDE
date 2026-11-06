import React from 'react';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { login } from './features/login';

const App = () => {
  const handleLogin = async () => {
    try {
      const data = await signInWithPopup(auth, googleProvider);
      console.log(data);

      const token = await data.user.getIdToken();
      const userData = await login(token);
      console.log(userData);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Continue with google</button>
    </div>
  );
};

export default App;
