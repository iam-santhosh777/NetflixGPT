import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { netflixLogo } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user)
  const handleSignout = () => {
    signOut(auth)
    .then(() => {
      // Sign-out successful.
      navigate('/');
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid, email, displayName, photoURL} = user;
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
          navigate('/browse');
          // ...
        } else {
          // User is signed out
          // ...
          dispatch(removeUser());
          navigate("/");
         
        }
      });

    // Un Subscribe when component unmounts
    return () => unsubscribe();
}, [])

  return (
    <div className='absolute bg-gradient-to-b from-black  w-full h-18 z-30 flex justify-between'>
        <img src={netflixLogo} alt='netflixLogo' className='w-[15%] pl-8'/>
        { user && (
          <div className='flex justify-center items-center p-2'>
          <img className='w-8 h-8 ' alt='profile' src={user?.photoURL} />
          <button onClick={handleSignout} className='p-2 font-bold text-white'>(Sign out)</button>
        </div>)
        }
    </div>
  )
}

export default Header