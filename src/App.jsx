import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import appFirebase from './credenciales';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Login from './components/Login';
import Home from './components/Home';
import Jugadores from './components/Jugadores';

import './App.css'


const auth = getAuth(appFirebase);

function App() {
  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    setUsuario(usuarioFirebase ? usuarioFirebase : null);
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={usuario ? <Home correoUsuario={usuario.email} /> : <Login />} />
        <Route path="/jugadores" element={<Jugadores />} />
      </Routes>
    </Router>
  );
}

export default App;
