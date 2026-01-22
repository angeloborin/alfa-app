// Main.jsx ou App.jsx
import React from 'react';
import { AuthProvider } from './auth/AuthContext';
import MainApp from './MainApp';
import Login from './components/Login';

function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}

export default App;