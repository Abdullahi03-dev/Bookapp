import '../assets/css/navbar.css'
import ImageComponent from './image'
import logo from '../assets/img/download-2.svg'
import cancel from '../assets/img/cancel.svg'
import menu from '../assets/img/menu.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const navbar =()=>{
    const [open ,setOpen]=useState<boolean>(false)

    const showNav=()=>{
        setOpen(!open)
    }
    const navigate=useNavigate()
    const toSignup=()=>{
        navigate('../pages/signup')
    }
    const toSignin=()=>{
        navigate('../pages/signin')
    }
    return(
         <>
         <div className={`mobile_nav ${open? 'show_nav':'close_nav'}`}>
            <a href="">HOME</a>
            <a href="">ABOUT</a>
            <a href="">CONTACT</a>
            <div className="mobile_reglinks">
            <a href='#' onClick={toSignin}>Sign in</a>
            <a href='#' onClick={toSignup}>Join now</a>
            </div>
         </div>
    <header>
        <span>
            <figure>
            <ImageComponent src={logo} alt="logo for book tracker" height='70px' width='70px'/>
            </figure>
        </span>
        
        <nav>
            <div className="navlinks">
                <a href='#'>Home</a>
                <a href='#'>About</a>
                <a href='#'>Contact</a>
            </div>

            <div className="reglinks">
            <a href='#' onClick={toSignin}>Sign in</a>
            <a href='#' onClick={toSignup}>Join now</a>

            </div>
        </nav>
        <ImageComponent src={open?cancel:menu} alt="logo for book tracker" height='40px' width='40px' className='menutoggler' onClick={showNav}/>
    </header>
    </>    
)

}
export default navbar