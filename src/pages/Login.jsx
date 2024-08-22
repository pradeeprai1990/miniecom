import React, { useContext, useEffect } from 'react'
import Header from '../commen/Header'
import { FaGoogle } from "react-icons/fa"; 
import { IoLogoFacebook } from "react-icons/io5"; 
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../FirebaseConfig';
import { cartContex } from '../context/MainContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  let {token,setToken}=useContext(cartContex)
  let navigator=useNavigate();
  let googleLogin=()=>{
   
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const logintoken = credential.accessToken;

      setToken(logintoken)
      // The signed-in user info.
      const user = result.user;
      console.log(user,token)
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

  let userEmailLogin=(e)=>{
    e.preventDefault()
    let email=e.target.email.value;
    let password=e.target.password.value;
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        setToken(user.accessToken)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      }); 


  }

  useEffect(()=>{
      if(token!==undefined && token!==''){
        navigator('/')
      }
  },[token])
  return (
    <>
      <div className=' sticky top-0 z-[99999]'>
        <Header/>
      </div>
      <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
        <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
          <div className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
            <div className="my-3 text-4xl font-bold tracking-wider text-center">
              <a href="#">K-WD</a>
            </div>
            <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
              With the power of K-WD, you can now focus only on functionaries for your digital products, while leaving the
              UI design on us!
            </p>
            <p className="flex flex-col items-center justify-center mt-10 text-center">
              <span>Don't have an account?</span>
              <a href="#" className="underline">Get Started!</a>
            </p>
            <p className="mt-6 text-sm text-center text-gray-300">
              Read our <a href="#" className="underline">terms</a> and <a href="#" className="underline">conditions</a>
            </p>
          </div>
          <div className="p-5 bg-white md:flex-1">
            <h3 className="my-4 text-2xl font-semibold text-gray-700">Account Login</h3>
            <form action="#" className="flex flex-col space-y-5" onSubmit={userEmailLogin}>
              <div className="flex flex-col space-y-1">
                <label for="email" className="text-sm font-semibold text-gray-500">Email address</label>
                <input
                  type="email"
                  id="email"
                  name='email'
                  autofocus
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label for="password" className="text-sm font-semibold text-gray-500">Password</label>
                  <a href="#" className="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>
                </div>
                <input
                  type="password"
                  name='password'
                  id="password"
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                />
                <label for="remember" className="text-sm font-semibold text-gray-500">Remember me</label>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                  Log in
                </button>
              </div>
              <div className="flex flex-col space-y-5">
                <span className="flex items-center justify-center space-x-2">
                  <span className="h-px bg-gray-400 w-14"></span>
                  <span className="font-normal text-gray-500">or login with</span>
                  <span className="h-px bg-gray-400 w-14"></span>
                </span>
                <div className="flex flex-col space-y-4">

                  <button onClick={googleLogin}  className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none">
                      <div className="w-5 text-lg text-gray-800 fill-current group-hover:text-white flex justify-center items-center">
                        <FaGoogle />
                      </div>
                    <span className="text-sm font-medium text-gray-800 group-hover:text-white">Login with Google</span>
                  </button>

                  <button href="#" className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none">
                      <div className="w-5 text-xl text-blue-500 group-hover:text-white">
                        <IoLogoFacebook />
                      </div>
                    <span className="text-sm font-medium text-blue-500 group-hover:text-white">Login with Facebook</span>
                  </button>

                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
