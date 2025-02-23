import '../assets/css/root.css'
import '../assets/css/signup.css'
import ImageComponent from '../components/image'
import image3 from '../assets/img/download-1.svg'
import {Link} from 'react-router-dom'
import { useState } from "react";
import toast from 'react-hot-toast'
import { auth, db,signInWithEmailAndPassword, collection, query, where, getDocs} from "../firebase/firebase";


const signincomp=()=>{
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

    // Function to check if the name already exists in Firestore
    const checkIfNameExists = async (name: string): Promise<boolean> => {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("name", "==", name));
        const querySnapshot = await getDocs(q);
        return !querySnapshot.empty; // Returns true if name exists
      };

       // Function to handle sign-up
  const handleSignup = async (e: React.FormEvent) => {
    // if (error) {
    // }
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Check if the name already exists in Firestore
      const nameExists = await checkIfNameExists(name);
      if (!nameExists) {
        setError("This name is already taken. Please choose another one.");
        toast.error('Incorrect Username')
        setLoading(false);
        return;
      }

      // Create user with email and password in Firebase Auth
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
       userCredential.user;

    //   // Store the user details in Firestore
    //   await setDoc(doc(db, "users", user.uid), {
    //     name: name,
    //     email: email,
    //     userId: user.uid,
    //   });

      console.log("User signed up successfully!");
      toast.success("User signed in successfully!")

    } catch (error: any) {
      setError(error.message);
    }
    if(error){
      toast.error(error)

    }

    setLoading(false);
  };
    return(
        <>
    <section className='signup'>
        <figure>
            <ImageComponent src={image3} alt='BOOK TRACKER' className='signupimage'/>
        </figure>
        <div className='form1'>
        <h3>Log In!</h3>
        <p>Welcome back to your book dynasty</p>
       
        <form onSubmit={handleSignup}>

            <input type='text' placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} required  />
            <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <button disabled={loading}>{loading ? "Login..." : "Login"}</button>
            <Link to="../pages/signup">Don't have an Account? Sign Up</Link>
    </form>
        </div>
    </section>
    
        
        </>
        )
}
export default signincomp