import React from 'react'
import {
    BrowserRouter as Router, 
    Link
} from 'react-router-dom'
// import Dots from './Dots'

const Header = () =>{
   return(
    <>
    <Router> 
        <header>
            <div className="navbar"> 
                <div className="logo">
                    <Link
                        to='/' 
                        className="link"
                    > <h1>Flexer.p </h1></Link> 
                </div>
                {/* <li className='nav-item'>
                        <Link 
                            to='./' 
                            // onClick={closeMobileMenu} 
                            className='nav-links'
                        >
                            Services
                        </Link>
                    </li> */}
                <ul className="nav-items"> 
                    {/* <li className="nav-item  ">
                        <Link
                            to='/' 
                            className="link"
                        >Home</Link>
                    </li> */}
                    {/* <Dots /> */}
                    <li className="nav-item">
                        <Link
                            to='/contact' 
                            className="link"
                        >Contacts</Link>
                    </li>
                    {/* <Dots /> */}
                    <li className="nav-item">
                        <Link
                            to='/'
                            href="http://" 
                            className="link"
                        >About</Link>
                    </li>
                    {/* <Dots /> */}
                    <li className="nav-item">
                        <Link
                            to='/Project' 
                            className="link"
                        >Projects</Link>
                    </li>  
                </ul>

                <div className="socialIcons">
                    <ul>
                        <li>
                            <i className='fab fa-twitter'/>
                        </li>
                        <li>
                            <i className='fab fa-github'/>
                        </li>
                        <li>
                            <i className='fab fa-linkedin'/>
                        </li>
                    </ul>
                </div>

            </div> 
        </header>
        </Router>
    </>
   )
}

export default Header