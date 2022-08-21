import './App.css';
import React, { useState } from 'react';
import Input1 from './componentes/Input1';



function App() {
  const [nombre, setNombre] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState(true);

  return (
    <div className="App">

      <header className="App-header">
        <h1>Desafío estado de los componentes y eventos</h1>
      </header>

      <form className="formulario">
        
          <Input1
          nombre = {nombre}
          setNombre = {setNombre}
          contraseña = {contraseña}
          setContraseña = {setContraseña}
          error = {error}
          setError = {setError}
          />
        
   
      </form>
    </div>
  );
}

export default App;
