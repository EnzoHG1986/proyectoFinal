import React, { useState } from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import './ContatacPage.css'


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
        <h3 className='formTitulo'>Contact</h3>
        <label className='formLabel' htmlFor='nombre'>Full name *</label>
        <input className='formInput' placeholder='Cosme Fulanito' name='nombre' id='nombre' onChange={handleChangeRegisterUser} value={formUserData.nombre} required/>
        <label className='formLabel' htmlFor='email'>Email *</label>
        <input className='formInput' type='email' placeholder='CosmeFulanito@email.com' name='email' id='email' onChange={handleChangeRegisterUser} value={formUserData.email} required/>
        <label className='formLabel' htmlFor='message'>Message *</label>
        <input className='formInputMensaje' type='text' placeholder='Puedes enviar la devolucion por este medio.' name='textMail' id='textMail' onChange={handleChangeRegisterUser} value={formUserData.textMail} required/>
        <div className='fromContainerBtn'>
          <button className='formBtn' type='submit'>Send</button>
        </div>
      </form>
    </div>
  )
}

export default ContacPage