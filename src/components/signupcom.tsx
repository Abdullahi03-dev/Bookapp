import '../assets/css/root.css'
import '../assets/css/signup.css'
import ImageComponent from '../components/image'
import image3 from '../assets/img/download-1.svg'
import {Link} from 'react-router-dom'


const signupcomp=()=>{
    return(
        <>
    <section className='signup'>
        <figure>
            <ImageComponent src={image3} alt='BOOK TRACKER' className='signupimage'/>
        </figure>
        <div className='form1'>
        <h3>Save Your Account</h3>
        <p>Open an account to meet other books enthusiasts like you</p>
        <form>

            <input type='text' placeholder='Full Name' />
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Password'/>
            <button>Sign Up</button>
            <Link to="">Already have an account?Login</Link>
    </form>
        </div>
    </section>
    
        
        </>
        )
}
export default signupcomp