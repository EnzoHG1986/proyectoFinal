import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import './Footer.css'
import logoCel from '../../assets/utn-Ba-celu.png'
import { Link, NavLink, Route, Routes } from 'react-router-dom';


const Footer = () => {
    return (
        <footer>
            <div className='containerFooterLogo'>
                <div className='containerimgLogoFooter'>
                    <img className='footerLogo' src={logoCel} alt="logo" />
                </div>
                <div className='containerDireccion'>
                    <p className='footerDireccion'>Calle Falsa 123</p>
                    <p className='footerDireccion'>Buenos Aires, Argentina</p>
                </div>
            </div>
            <div className='containerFooterRedes'>
                <NavLink className="footerIco" to='https://web.whatsapp.com/'><i className="bi bi-whatsapp icoRedes"></i></NavLink>
                <NavLink className="footerIco" to='https://www.facebook.com/'><i className="bi bi-facebook icoRedes"></i></NavLink>
                <NavLink className="footerIco" to='https://www.instagram.com/'><i className="bi bi-instagram icoRedes"></i></NavLink>
                <NavLink className="footerIco" to='https://twitter.com/'><i className="bi bi-twitter icoRedes"></i></NavLink>
            </div>
            <div className='containerFooterLink'>
                <NavLink className="navFooter" to='/'>Home</NavLink>
                <NavLink className="navFooter" to='/contac'>Contacto</NavLink>
                <NavLink className="navFooter" to='/cart'>Carrito</NavLink>
            </div>
            <div className='containerFooterPolicy'>
                <div>
                    <p>2023 Enzo Guanco.</p>
                    <p>All Rights Reserved</p>
                </div>
                <div className='containerTermCondictions'>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer