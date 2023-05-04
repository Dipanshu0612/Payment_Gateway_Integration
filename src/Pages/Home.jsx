import React from 'react'
import { NavLink as Link} from 'react-router-dom';
import { useEffect} from 'react';
import CarouselComp from '../components/CaraouselComp'


export default function Home() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
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
    <div className='flex flex-wrap my-5 bg-slate-200 h-[25rem] justify-around items-center md:h-[50rem] sm:h-[40rem] sm:my-1'>
      <div className="imgcont h-[20rem] w-[20rem] sm:h-[10rem] sm:w-[10rem] sm:mb-0">
        <img src="https://internship.thesparksfoundation.info/assests/img/logo.png" alt="Sparks Foundation Logo" />
      </div>

      <div className="infocont h-[20rem] w-[30rem] py-5 space-y-3 sm:py-0 sm:space-y-0 sm:ml-2 sm:text-center">
        <h3 className='text-4xl sm:text-3xl'>The Sparks Foundation</h3>
        <h5 className='text-blue-300 text-2xl sm:text-[1.25rem]'>Mission and Vision Statement</h5>
        <p className='tracking-wide text-xl sm:text-[1rem]'>The sparks foundation is working to bring parity in education, making sure children have equal opportunity at success, irrespective of the financial background.</p>
        <div className='flex flex-wrap justify-start items-center sm:justify-center'>
        <button className='bg-blue-500 py-[0.7rem] px-2 mt-4 inline-flex rounded-md hover:bg-blue-700 ease-in-out duration-300 ' onClick={() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }}><Link to="/about-us" className="text-white">About Us</Link></button>
        <p className='inline-flex flex-wrap mt-4 ml-5'><form id="rzp_payment_form_2"></form></p>
      </div>
      </div>
    </div>
    </>
  )
}
