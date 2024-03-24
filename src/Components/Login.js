import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errMessage, setErrMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const confirmPassword = useRef(null);
    const handleButtonClick = () => {
        // validate the form data
        if (!isSignInForm && confirmPassword.current.value !== password.current.value) {
            alert('Passwords do not match');
            return;
        }

        const message = checkValidData(email.current.value, password.current.value);
        setErrMessage(message);

        // Sign in or sign up the user
        
        
    }

    const toggleSigninForm = () => {
        setIsSignInForm(!isSignInForm);  
    }

    return (
        <div>
            <Header />
            <div className='absolute h-full'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="netflixBg" className='relative h-screen w-screen'/>
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