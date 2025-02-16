import '../assets/css/landing.css'
import image1 from '../assets/img/download.svg'
import image2 from '../assets/img/download-1.svg'
import image3 from '../assets/img/download-2.svg'
import ImageComponent from './image'
import {useNavigate} from 'react-router-dom'

const landing1=()=>{
    const navigate=useNavigate()
    const toSignup=()=>{
        navigate('../pages/signup')
    }
    return (
        <>
        <div className='landing1'>
            <h1>Your Reading Journey Starts Here!</h1>
            <p>Log your books,stay on track,and chat with like-minded readers. Make reading fun and interactive!</p>
       <span className="ctas">
        <button onClick={toSignup}>Get Started</button>
        <button onClick={toSignup}>Learn More</button>
       </span>
        </div>
        

        <div className='landing2'>

        <div className='card'>
            <span>
            <ImageComponent src={image1} alt="book" height='70px' width='70px'/>
                <h3>20M+ BOOKS</h3>
            </span>
            <p>Lorem ipsum dolor sit
            ? Voluptatem vero molestiae pariatur earum odio facilis, r
            em nostrum vitae laborum, omnis, quibusdam repellendus 
            asperiores blanditiis quaerat molestias fugit delectus.</p>
        </div>

        <div className='card'>
            <span>
            <ImageComponent src={image3} alt="book" height='70px' width='70px'/>
                <h3>20M+ BOOKS</h3>
            </span>
            <p>Lorem ipsum dolor sit
            ? Voluptatem vero molestiae pariatur earum odio facilis, r
            em nostrum vitae laborum, omnis, quibusdam repellendus 
            asperiores blanditiis quaerat molestias fugit delectus.</p>
        </div>

        <figure>
        <ImageComponent src={image2} alt="book" height='250px' width='320px' className='banner_img'/>
        </figure>
        
        </div>
        </>
    )
}
export default landing1