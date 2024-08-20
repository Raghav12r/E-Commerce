import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo2.jpg'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/Context';
import dropdown from '../Assets/dropdown.png'
function Navbar() {
  const [buldge, setbuldge] = useState('home');
  const { totalitems } = useContext(ShopContext);
  const menuRef = useRef();
  const down = (e) => {
    menuRef.current.classList.toggle('menu-visible');
    e.target.classList.toggle('open');
  }
  return (
    <div className='nav'>
      <div className="logo">
        <img src={logo} alt=''></img>
        <p>Shopsy</p>
      </div>
      <div className="mid">
        <img src={dropdown} onClick={down} className='drpdwn' alt='' />
        <ul ref={menuRef} className="menu">
          <li onClick={() => { setbuldge('home') }}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link>{buldge === 'home' ? <hr /> : <></>}</li>
          <li onClick={() => { setbuldge('men') }}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>{buldge === 'men' ? <hr /> : <></>}</li>
          <li onClick={() => { setbuldge('women') }}><Link style={{ textDecoration: 'none' }} to='/woman'>Women</Link>{buldge === 'women' ? <hr /> : <></>}</li>
          <li onClick={() => { setbuldge('kids') }}><Link style={{ textDecoration: 'none' }} to='/kid'>Kids</Link>{buldge === 'kids' ? <hr /> : <></>}</li>
        </ul>
      </div>
      <div className="cartlogin">
        {localStorage.getItem('auth')?<button onClick={()=>{localStorage.removeItem('auth');window.location.replace("/")}}>Logout</button>:<Link style={{ textDecoration: 'none' }} to='/login'><button>Login</button></Link>}
        <Link style={{ textDecoration: 'none' }} to='/cart'><ShoppingCartCheckoutIcon /></Link>
        <div className="cnt">{totalitems()}</div>
      </div>
    </div>
  )
}

export default Navbar
