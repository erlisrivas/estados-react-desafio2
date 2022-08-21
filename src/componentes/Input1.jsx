import React from 'react'
import Boton from './Boton';


const Input1 = ({nombre, setNombre, contraseña, setContraseña, error, setError}) => {


    if (contraseña == 252525) {
      setError(false);
    } else {
      setError(true);
    }
  

  return (
    <>
       <div className="form-group">
            <label>Nombre</label>
            <input 
            type="text" 
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre} />
          
         </div>
        <div className="form-group">
            <label>Contraseña</label>
            <input 
            type="password" 
            className="form-control"
            onChange={(e) => setContraseña(e.target.value)}
            value={contraseña} />
        </div>
    
    <div>{!error ? <Boton /> : null}</div>

   
</>
  )
}


export default Input1