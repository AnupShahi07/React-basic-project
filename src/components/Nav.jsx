import React from 'react'
import './Nav.css'; 
import { Link } from 'react-router-dom';
function Nav() {
    return (
        <div className='Navbar'>
            <h2 className='name'>Welcome to My Project</h2>
            <div className='link'>  
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/photos'>Photos</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    )
}

export default Nav;