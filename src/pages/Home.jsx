import React, { useContext, useEffect, useState } from 'react'
import Header from '../commen/Header'
import axios from 'axios'
import { FaStar } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { cartContex } from '../context/MainContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

 let {productData,setProductData,cart,setCart}=useContext(cartContex)

  return (
    <>
        <div className=' sticky top-0 z-[999]'>
            <Header/>
        </div>

        <section className="bg-white dark:bg-gray-900">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 sm:grid-cols-12">
              <div className="sm:hidden lg:mt-0 flex">
                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"/>
              </div>
              <div className="mr-auto place-self-center sm:col-span-7">
                  <h1 className="max-w-2xl mb-4 sm:text-4xl text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">The experience makes all the difference. </h1>
                  <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                  <div className=' flex'>
                      <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 bg-red-500">
                          Get started
                          <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                      <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 uppercase">
                          Offers
                      </a> 
                  </div>
              </div>
              <div className="hidden lg:mt-0 sm:col-span-5 sm:flex">
                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" style={{width:'100%'}}/>
              </div>                
          </div>
        </section>

{/*<!-- product category section -->*/}
        <section className="flex justify-center items-center">
          <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
            <div className="flex flex-col jusitfy-center items-center space-y-10">
              <div className="flex flex-col justify-center items-center ">
                <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white">Shop By Category</h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 w-full">
                <div className="relative group flex justify-center items-center h-full w-full">
                  <img className="object-center object-cover h-full w-full" src="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png" alt="girl-image" />
                  <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Women</button>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                </div>

                <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                  <div className="relative group flex justify-center items-center h-full w-full">
                    <img className="object-center object-cover h-full w-full" src="https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png" alt="shoe-image" />
                    <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Shoes</button>
                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                  </div>
                  <div className="relative group flex justify-center items-center h-full w-full">
                    <img className="object-center object-cover h-full w-full" src="https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png" alt="watch-image" />
                    <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Watches</button>
                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                  </div>
                </div>

                <div className="relative group justify-center items-center h-full w-full hidden lg:flex">
                  <img className="object-center object-cover h-full w-full" src="https://i.ibb.co/PTtRBLL/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png" alt="girl-image" />
                  <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Accessories</button>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                </div>
                <div className="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
                  <img className="object-center object-cover h-full w-full hidden md:block" src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png" alt="girl-image" />
                  <img className="object-center object-cover h-full w-full md:hidden" src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png" alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2" />
                  <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Accessories</button>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                </div>
              </div>
              <div className="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
                <img className="object-center object-cover h-full w-full hidden md:block" src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png" alt="girl-image" />
                <img className="object-center object-cover h-full w-full sm:hidden" src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png" alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2" />
                <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Accessories</button>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>
            </div>
          </div>
        </section>

{/*<!-- product section -->*/}
        <section className="w-[95%] mx-auto my-auto">
          <div class="w-full h-auto mt-[50px]">
              <h1 className="sm:text-4xl text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white capitalize shadow-lg pb-8 text-center ">Get difference Product </h1>
              <div class="flex flex-wrap mt-16">

                {productData.map((itme,index)=>{
                  
                  return(
                    <>
                      <ProductItem itme={itme}/>
                    </>
                  )
                })}

              </div>
          </div>
        </section>
        <ToastContainer position="top-center"/>
    </>
  )
}

function ProductItem({itme}) {

  let {thumbnail,title,price,brand,rating,id}=itme
  let {cart,setCart}=useContext(cartContex)

  let chechProduct = cart.filter((v,i)=>v.id==id)

  let [numQty,setNumQty]=useState(chechProduct==0 ? 1 : chechProduct[0].qty)

  console.log(numQty)

  let addToCart = ()=>{
  
    let obj={
      qty:1,
      thumbnail:thumbnail,
      title:title,
      price:price,
      brand:brand,
      id:id
    }
    setCart([...cart,obj])
    setNumQty(1)
    toast.success("Your Item Seved in Cart !")
  
  }

  useEffect(()=>{
    if(chechProduct.length == 1){

      if(numQty >= 1){

      let pDataWithQtyUpdate = cart.filter((v)=>{
        if(v.id==id){
          v['qty']=numQty
        }
        return v;
      })
      setCart(pDataWithQtyUpdate)

    }
    else{
      let deleteAddToCart = cart.filter((v)=>v.id != id)
      setCart(deleteAddToCart)
    }
    }
    },[numQty])

  return(
    <div className=" w-[100%] sm:w-[25%] lg:w-[20%] inline-flex px-2 pb-4 ">
      <div className="relative bg-white inline-flex items-stretch w-full h-full p-0 box-border">

          {/*<!-- heart -->*/}
          <div className="absolute top-[4px] right-[4px] w-[28px] h-[28px] text-center z-10 rounded-full">
              <div className="absolute top-0 left-0 m-auto text-[#cc3535] text-2xl">
                <IoHeart />
              </div>
          </div>
          {/*<!-- end heart -->*/}
          
          <div className="relative shadow-md rounded-lg min-w-full flex flex-col">
            
            {/*<!-- product img -->*/}
            <div className="relative">
              <div className="relative h-0 rounded-t-lg pb-[100%] w-full bg-white text-ellipsis	overflow-hidden"> 
                <div className="bg-no-repeat bg-cover inline-block my-0 mx-auto text-center w-full h-full absolute">
                  <img src={thumbnail} alt=""/>
                </div>
              </div>
            </div>
            {/*<!-- end img product -->*/}

            <div className="relative p-2 box-border overflow-hidden grow">
              
              {/*<!-- product name -->*/}
              <span className="text-gray-800 max-h-[38px] text-sm font-semibold leading-5 overflow-hidden whitespace-normal break-words		">
                {title}
              </span>
              {/*<!-- end product name -->*/}
              
              {/*<!-- price -->*/}
              <div>
                <div className="block w-full text-sm font-bold text-amber-700">
                  Rs {price}
                </div>
              </div>
              {/*<!-- end price -->*/}

              {/*<!-- store name -->*/}
              <div className="flex align-items-center text-xs leading-6 mx-0 my-1 text-gray-600">
                {brand}
              </div>
              {/*<!-- end store name -->*/}
              
              {/*<!-- rating -->*/}
                <div className="min-h-[14px] text-xs flex justify-between">
                  <div className=" flex items-center my-1 mx-0 text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span className="align-midle ml-1 text-gray-600">
                      ({rating})
                    </span>
                  </div>
                  {chechProduct.length == 0
                  ? 
                  <button onClick={addToCart} className=' bg-blue-600 text-white px-4 rounded '>ADD</button>
                  :
                  <div class="flex">
                    <svg onClick={()=>setNumQty(numQty-1)} class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                    </svg>

                    <input class=" bg-blue-700 text-white font-bold mx-2 border text-center w-8 rounded" type="text" value={numQty}/>

                    <svg onClick={()=>setNumQty(numQty+1)} class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                    </svg>
                  </div>
                  }
                  
                </div>
              {/*<!-- end rating -->*/}
              
            </div>
          </div>
      </div>
      
    </div>
  )
}
