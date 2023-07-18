import React, { useState } from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import './ContacPage.css'

const ContacPage = () => {

  const [formUserData, setFormUserData] = useState({
    nombre: '',
    email: '',
    textMail: ''
  })

  const handleRegisterUser = (evento) =>{
    evento.preventDefault()
    console.log(evento)
  }
  const handleChangeRegisterUser = (evento) =>{
    console.log(evento.target.name)
    console.log(formUserData)
    setFormUserData({...formUserData, [evento.target.name]: evento.target.value})
  }
  return (

    <div className='containerForm'>
      <form onSubmit={handleRegisterUser}>
        <h3 className='formTitulo'>Contacto</h3>
        <label className='formLabel' htmlFor='nombre'>Nombre Completo *</label>
        <input className='formInput' placeholder='Cosme Fulanito' name='nombre' id='nombre' onChange={handleChangeRegisterUser} value={formUserData.nombre} required/>
        <label className='formLabel' htmlFor='email'>Email *</label>
        <input className='formInput' type='email' placeholder='CosmeFulanito@email.com' name='email' id='email' onChange={handleChangeRegisterUser} value={formUserData.email} required/>
        <label className='formLabel' htmlFor='message'>Mensaje *</label>
        <textarea className='formInputMensaje' type='text' placeholder='Puedes enviar tu Mensaje' name='textMail' id='textMail' onChange={handleChangeRegisterUser} value={formUserData.textMail} required/>
        <div className='fromContainerBtn'>
          <button className='formBtn' type='submit'>Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default ContacPage