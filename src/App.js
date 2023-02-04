import useFormulario from './hooks/useFormulario'
import Input from './components/Input'
import Card from './components/Card'
import Container from './components/Container'
import Button from  './components/Button'
import { useState } from 'react'
function App() {
  const [usuarios, setUsuarios]= useState([])
  const [formulario, handleChange, reset] = useFormulario({
                                                      name:'',
                                                      lastname:'',
                                                      email:''
                                                    })

  const submit = e => {
    e.preventDefault()
    setUsuarios([
      ...usuarios,
      formulario,
    ])
    reset()
  }
 
  return (
    <Container>
      <Card>
        <div style={{padding:20}}>
          <form onSubmit={submit}>
            <Input  label="Nombre" 
                    name="name" 
                    value={formulario.name} 
                    onChange={handleChange}/>

            <Input  label="Apellido" 
                    name="lastname" 
                    value={formulario.lastname} 
                    onChange={handleChange}/>

            <Input  label="Correo" 
                    name="email" 
                    value={formulario.email} 
                    onChange={handleChange}/>
            <Button>Enviar</Button>
          </form>
        </div>
       
      </Card>
      <Card>
        <ul>
          {usuarios.map(usuario => 
            <li key={usuario.email}>{`${usuario.name} ${usuario.lastname}: ${usuario.email}`}</li>)}
        </ul>
      </Card>
    </Container>
   
    
  );
}

export default App;
