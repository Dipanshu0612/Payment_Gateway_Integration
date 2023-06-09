import React, { useState } from 'react'
import { useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink as Link } from 'react-router-dom';


export default function Header() {
  let [menuicon, changemenuicon] = useState(false);
  useEffect(() => {
    const rzpPaymentForm = document.getElementById("rzp_payment_form");
    if (!rzpPaymentForm.hasChildNodes()) {

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_LklOUd6tPdSZet";
      rzpPaymentForm.appendChild(script);

    }

  });

  return (
    <div className='flex flex-wrap justify-between items-center bg-gray-900 h-[4.5rem] sticky top-0 z-10 '>
      <div className="logo flex flex-wrap">
        <a href="/" className='flex flex-wrap justify-center items-center cursor-pointer font-semibold'><img src="https://www.thesparksfoundationsingapore.org/images/logo_small.png" alt="" className='h-10 mx-4 bg-gradient-to-t from-white to-gray-400 inline' /><p className='text-white text-2xl sm:text-[1rem]'>The Sparks Foundation</p></a>
      </div>
      <div className="nav" id='nav'>
        <ul className='flex flex-wrap justify-centre items-center mr-4 space-x-5'>
          <li className="text-white cursor-pointer py-[1.37rem] font-semibold "><Link to="/" activeClassName='active'>Home</Link></li>
          <li className="text-white cursor-pointer py-[1.37rem] font-semibold" ><Link to="/about-us" activeClassName='active'>About Us</Link></li>
          <li className='mt-2'><form id="rzp_payment_form"></form></li>
        </ul>
      </div>
      {menuicon ? <AiOutlineClose id='menuicon' onClick={() => {
        document.getElementById('nav').style.display = 'none'
        changemenuicon((prevState) => !prevState)
      }} />
        : <AiOutlineMenu id='menuicon' onClick={() => {
          document.getElementById('nav').style.display = 'block'
          changemenuicon((prevState) => !prevState)
        }} />}

    </div>
  )
}
