import React from 'react'
import {Link} from 'react-router-dom'
// import Dots from './Dots'

const Header = () =>{
   return(
    <>
        <header>
            <div className="navbar"> 
                <div className="logo">
                    <h1>Logos </h1>
                </div>
                {/* <li className='nav-item'>
                        <Link
                            to='./' 
                            to='./' 
                            onClick={closeMobileMenu} 
                            className='nav-links'
                        >
                            Services
                        </Link>
                    </li> */}
                <ul className="nav-items"> 
                    <li className="nav-item">
                        <Link
                            to='/'
                            href="http://" 
                            className="link"
                        >Home</Link>
                    </li>
                    {/* <Dots /> */}
                    <li className="nav-item">
                        <Link
                            to='./'
                            href="http://" 
                            className="link"
                        >Contacts</Link>
                    </li>
                    {/* <Dots /> */}
                    <li className="nav-item">
                        <Link
                            to='./'
                            href="http://" 
                            className="link"
                        >About</Link>
                    </li>
                    {/* <Dots /> */}
                    <li className="nav-item active">
                        <Link
                            to='./Project' 
                            className="link"
                        >Projects</Link>
                    </li>  
                </ul>
{/* 
                <div className="btn">
                    <button className="btn-item">
                        Contacts
                    </button>
                </div> */}
            </div> 
        </header>
    </>
   )
}

export default Header