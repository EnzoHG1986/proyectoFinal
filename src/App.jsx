import React from 'react'
import { useCustomContext } from './ContextManager/ContextProvider'
/* import { ProductCard } from './components' */
import { CartPage, DetailPage, HomePage, ContacPage } from './screens';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import logoFull from './assets/utn-Ba-full.png'
import logoCel from './assets/utn-Ba-celu.png'
import Footer from './components/Footer/Footer';




function App() {
  return (
    <div>
      <header>
        <div>
          <img className='logoFull' src={logoFull} alt="logo" />
          <img className='logoCel' src={logoCel} alt="logo" />
        </div>
        <nav>
        <NavLink to='/'><i className="bi bi-house-door-fill"></i></NavLink>
        <NavLink to='/contac'><i className="bi bi-envelope-fill"></i></NavLink>
        <NavLink to='/cart'><i className="bi bi-cart3"></i></NavLink>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<HomePage/>}/>        
        <Route path='/detail/:id' element={<DetailPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/contac' element={<ContacPage/>}/>
      </Routes>
    
      <Footer/>
    </div>
  )
}

export default App
