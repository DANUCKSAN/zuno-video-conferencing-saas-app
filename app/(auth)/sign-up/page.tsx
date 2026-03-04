import { SignUp} from '@clerk/nextjs';
import React from 'react'
import SignInPage from '../sign-in/page';

const SignUpPage = () => {
  return (
    <main className='flex h-screen w-full items-center justify-center bg-dark-1'>
    <SignUp/>
    </main>
  )
}

export default SignUpPage;
