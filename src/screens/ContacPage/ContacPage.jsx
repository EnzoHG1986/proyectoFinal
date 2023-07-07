import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import './ContatacPage.css'


const ContacPage = () => {
  const handleRegisterUser = (evento) =>{
    evento.preventDefault()
  }
  return (
    <div className='containerForm'>
      <form onSubmit={handleRegisterUser}>
        <h3 className='formTitulo'>Contact</h3>
        <label className='formLabel' htmlFor='nombre'>Full name *</label>
        <input className='formInput' placeholder='Cosme' name='nombre' id='nombre' />
        <label className='formLabel' htmlFor='email'>Email *</label>
        <input className='formInput' type='email' placeholder='CosmeFulaniuto@email.com' name='email' id='email' />
        <label className='formLabel' htmlFor='message'>Message *</label>
        <textarea className='formTextarea' name="" id="" cols="20" rows="6"  placeholder='Puedes enviar la devolucion por este medio.'></textarea>
        <div className='fromContainerBtn'>
          <button className='formBtn' type='submit'>Send</button>
        </div>
      </form>

    </div>
  )
}

export default ContacPage