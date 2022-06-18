import React, { useContext } from 'react';
import './App.css';
import { PrivateRoutes } from './Routes/PrivateRoutes';
import { PublicRoutes } from './Routes/PublicRoutes';
import { AuthContext } from './contexts/auth';

function App() {
  const { auth, setAuth } = useContext(AuthContext);

  return auth ? <PrivateRoutes/> : <PublicRoutes/>
}

export default App;