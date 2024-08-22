import React from 'react'
import Header from '../commen/Header'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../FirebaseConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Register() {
  const auth = getAuth(app);


  let registerData=(e)=>{
    e.preventDefault();

    let emailValue=e.target.email.value;
    let passwordValue=e.target.password.value;
    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    toast.success("User Created")
    e.target.reset()
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });



  }
  return (
    <>
      <div className=' sticky top-0 z-[99999]'>
        <Header/>
      </div>
      <div>
        <div class="container mx-auto">
          <div class="w-5/6 lg:w-1/2 mx-auto bg-white rounded border">
                <div class="py-4 px-8 text-black text-xl font-bold border-b border-grey-lighter capitalize">Register for a free account</div>
                <form class="py-4 px-8" onSubmit={registerData}>
                   
                    <div class="mb-4">
                        <label class="block text-grey-darker text-sm font-bold mb-2" for="email">Email Address</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" name='email' placeholder="Your email address"/>
                    </div>
                    <div class="mb-4">
                        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">Password</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password" name='password' type="password" placeholder="Your secure password"/>
                        <p class="text-grey text-xs mt-1">At least 6 characters</p>
                    </div>
                    <div class="flex items-center justify-between mt-8">
                        <button class="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full" type="submit">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
            <p class="text-center my-4">
                <a href="#" class="text-grey-dark text-sm no-underline hover:text-grey-darker">I already have an account</a>
            </p>
        </div>
        <footer class="w-full bg-grey-lighter py-8">
          <div class="container mx-auto text-center px-8">
              <p class="text-grey-dark mb-2 text-sm">This is a product of <span class="font-bold">Your Company</span></p>
          </div>
        </footer>
      </div>
      <ToastContainer position="right-center"/>
    </>
  )
}
