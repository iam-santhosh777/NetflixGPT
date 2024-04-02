import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
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
  return (
    <div className='absolute bg-gradient-to-b from-black  w-full h-18 z-30 flex justify-between'>
        <img src="https://res.cloudinary.com/dksynwdd7/image/upload/v1711438418/Netflix_Logo_PMS_nchbfd.png" alt='netflixLogo' className='w-[15%]'/>
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