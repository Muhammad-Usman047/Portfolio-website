import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { themeChange } from '../Reduxf/Themes/themeSlice';

const Navbar = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  return (
    <nav className={`NavBar ${theme}`}>
      {/* <div className={theme}>hgfghfgh</div> */}
        <Link to="/" >Home</Link>
        <Link to="/About" >About</Link>
        <Link to="/Projects" >Projects</Link>
        <Link to="/Contact" >Contact</Link>
        <button onClick={() => dispatch(themeChange())}>
        {theme === 'light' ? '🌙' : '🌞'}  
        </button>
    </nav>
  )
}

export default Navbar;
