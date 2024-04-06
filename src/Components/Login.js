import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import axios from 'axios';
import { appBg } from '../utils/constants';
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errMessage, setErrMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const confirmPassword = useRef(null);
    const dispatch = useDispatch();
    const handleButtonClick = () => {
        
        // validate the form data
        if (!isSignInForm && confirmPassword.current.value !== password.current.value) {
            alert('Passwords do not match');
            return;
        }
        const message = checkValidData(email.current.value, password.current.value);
        setErrMessage(message);

        // check if there is an error
        if (message) return;

        // check if there is no error
        if(!isSignInForm) {
            //sign up logic
            axios.post("https://myflix-ed777-default-rtdb.firebaseio.com/register.json", {email: email.current.value, name: name.current.value, password: password.current.value, createdAt: new Date(),})
                .then(() => {
                    alert('Account Created Successfully');
                })
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value, name.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, photoURL: "https://res.cloudinary.com/dksynwdd7/image/upload/v1679564076/samples/people/smiling-man.jpg"
                  }).then(() => {
                    // Profile updated!

                    console.log(user);
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    setErrMessage(error.message);
                    // ...
                  });
                
                
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrMessage(errorCode + ': ' + errorMessage);
                // ..
            });
            
        } else {
            // sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode+ ": " +errorMessage);
                setErrMessage(errorCode + ': ' + errorMessage);
            });
        }        
    }

    const toggleSigninForm = () => {
        setIsSignInForm(!isSignInForm);  
    }

    return (
        <div>
            <Header />
            <div className='absolute h-full'>
                <img src={appBg} alt="netflixBg" className='relative h-screen w-screen'/>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='flex flex-col w-[50%] md:w-4/12 flex-shrink-0 absolute text-white bg-black bg-opacity-80 p-8 my-[10%] mx-auto right-0 left-0 rounded-lg'>
                <h1 className='text-2xl font-medium py-2'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                {
                    !isSignInForm && <input ref={name} type='text' placeholder='Name' className='p-2 my-2 w-full bg-gray-950 bg-opacity-30 border border-zinc-400 rounded-md'></input>
                }
                <input ref={email} type='text' placeholder='Email or phone number' className='p-2 my-2 w-full bg-gray-950 bg-opacity-30 border border-zinc-400 rounded-md'></input>
                <input ref={password} type='password' placeholder='Password' className='p-2 my-2 w-full bg-gray-950 bg-opacity-30 border border-zinc-400 rounded-md'></input>
                {
                    !isSignInForm && <input ref={confirmPassword} type='password' placeholder='Confirm Password' className='p-2 my-2 w-full bg-gray-950 bg-opacity-30 border border-zinc-400 rounded-md'></input>
                }
                <p className='text-red-700 font-bold'>{errMessage}</p>
                <button onClick={handleButtonClick} type='submit' className='bg-red-700 p-2 my-2 w-full rounded-lg'>{isSignInForm ? 'Sign In' : "Create an Account"}</button>
                <p className='py-2'>{isSignInForm ? 'New to Netflix?' : 'Already have an account?'} <span onClick={toggleSigninForm} className='text-red-700 cursor-pointer'>{isSignInForm ? "Sign up now" : 'Sign In now'}</span></p>

            </form>
        </div>
    )
}

export default Login;