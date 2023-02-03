import useFormulario from './hooks/useFormulario'
import { useState } from "react"



function App() {

  const [formulario, handleChange] = useFormulario({name:''})
 
  // const[formulario, setFormulario]= useState({name: ''})
  //   const handleChange= (e) => {
  //       setFormulario({
  //                   ...formulario, 
  //                   [e.target.name]: e.target.value
  //       })
  //   }

    console.log(formulario);
  return (
    <form>
      <input  name="name" 
              placeholder="Nombre" 
              value={formulario.name}
              onChange={handleChange}
      />
    
    </form>
  );
}

export default App;
