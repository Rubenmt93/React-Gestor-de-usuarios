import React from 'react'
import Button from  './Button'
import Input from './Input'
import useFormulario from '../hooks/useFormulario'

const UserForm =({ submit }) => {
    const [formulario, handleChange, reset] = useFormulario({
        name:'',
        lastname:'',
        email:''
      })

    const  handleSubmit = (e) => {
        e.prevenDefault()
        submit(formulario)
        reset()
    }
    return (
        <form onSubmit={handleSubmit}>
                <Input  label="Nombre" 
                        name="name" 
                        value={formulario.name} 
                        placeholder='Nombre'
                        onChange={handleChange}/>

                <Input  label="Apellido" 
                        name="lastname" 
                        value={formulario.lastname} 
                        placeholder='Apellido'
                        onChange={handleChange}/>

                <Input  label="Correo" 
                        name="email" 
                        value={formulario.email} 
                        placeholder='Correo'
                        onChange={handleChange}/>
                <Button>Enviar</Button>
                </form>
    )
}

export default UserForm