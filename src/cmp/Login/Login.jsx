import { useState } from "react";
import "./Login.css";
import { auth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "../../firebase";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

function Login() {

    const dispatch = useDispatch();
    const [signUp,setSignUp] = useState(false);
    const [name, setName] = useState("");
    const [photoURL,setPhotoURL] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const signupForm = (e)=>{
        e.preventDefault();
        if(!name.trim()){alert("Name is required");}
        if(!photoURL.trim()){alert("Profile Picture URL is required");}
        if(!email.trim()){alert("Email is required");}
        if(!password.trim()){alert("Password is required");}

        createUserWithEmailAndPassword(auth, email, password)
        .then((userAuth)=>{
            const user = userAuth.user;
            updateProfile(user,{
                displayName : name,
                photoURL : photoURL
            }).then(()=>{
                dispatch(login({
                    displayName : user.displayName,
                    email : user.email,
                    photoURL : user.photoURL,
                    uid : user.uid
                }));
            })
        }).catch((e)=>{
            console.error(e);
        })

        setName("");
        setPhotoURL("");
        setEmail("");
        setPassword("");

    }

    const signinForm = (e)=>{
        e.preventDefault();
        if(!email.trim()){alert("Email is required");}
        if(!password.trim()){alert("Password is required");}
        
        signInWithEmailAndPassword(auth, email, password)
        .then(({user})=>{
            dispatch(login({
                displayName : user.displayName,
                email : user.email,
                photoURL : user.photoURL,
                uid : user.uid
            }));
        })
        .catch((e)=>{
            console.error(e);
        })

    }
 
  return (
    <>
        <div className='loginScreen'>
        <img src='https://freelogopng.com/images/all_img/1656994565linkedin-png.png' alt='login-logo' />
        {
            signUp ? (<form onSubmit={signupForm}>
                <input type='text' placeholder='Full Name' value={name} onChange={(e)=>setName(e.target.value)} />
                <input type='text' placeholder='Profile Picture URL' value={photoURL} onChange={(e)=>setPhotoURL(e.target.value)} />
                <input type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                <input type='submit' value="Sign Up" />
                <h4>Already a member ? <span onClick={()=>setSignUp(false)}>Login Here</span></h4>
            </form> ) : ( <form onSubmit={signinForm}>
                <input type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                <input type='submit' value="Sign In" />
                <h4>Not a member ? <span onClick={()=>setSignUp(true)}>Register Here</span></h4>
            </form> )
        }
            

               
        </div>
    </> 
  )
}

export default Login;