import React from 'react'
import { NavLink as Link} from 'react-router-dom';
import { useEffect} from 'react';
import CarouselComp from '../components/CaraouselComp'


export default function Home() {
  useEffect(() => {
    const rzpPaymentForm = document.getElementById("rzp_payment_form_2");
    
    if (!rzpPaymentForm.hasChildNodes()) {

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_LklOUd6tPdSZet";
      rzpPaymentForm.appendChild(script);

    }

  });
  return (
    <>
    <CarouselComp />
    <div className='flex my-5 bg-slate-200 h-[25rem] justify-around items-center'>
      <div className="imgcont h-[20rem] w-[20rem]">
        <img src="https://internship.thesparksfoundation.info/assests/img/logo.png" alt="Sparks Foundation Logo" />
      </div>

      <div className="infocont h-[20rem] w-[30rem] py-5 space-y-3">
        <h3 className='text-4xl'>The Sparks Foundation</h3>
        <h5 className='text-blue-300 text-2xl'>Mission and Vision Statement</h5>
        <p className='tracking-wide text-xl'>The sparks foundation is working to bring parity in education, making sure children have equal opportunity at success, irrespective of the financial background.</p>
        <div className='flex justify-start items-center'>
        <button className='bg-blue-500 py-[0.7rem] px-2 mt-4 inline-flex rounded-md hover:bg-blue-700 ease-in-out duration-300 '><Link to="/about-us" className="text-white">About Us</Link></button>
        <p className='inline-flex mt-4 ml-5'><form id="rzp_payment_form_2"></form></p>
      </div>
      </div>
    </div>
    </>
  )
}
