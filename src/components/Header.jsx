import React from 'react'
import { useEffect,useState } from 'react';
import { useLocation, useNavigate , NavLink as Link} from 'react-router-dom';


export default function Header() {
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
  let loc=useLocation();
  let navigate=useNavigate();
  function pathMatch(route) {
    if (route === loc.pathname) {
        return true;
    }
    else{
        return false;
    }
}
  return (
    <div className='flex justify-between items-center bg-gray-900 h-[4.5rem] sticky'>
      <div className="logo flex">
          <a href="/" className='flex justify-center items-center cursor-pointer font-semibold'><img src="https://www.thesparksfoundationsingapore.org/images/logo_small.png" alt="" className='h-10 mx-4 bg-gradient-to-t from-white to-gray-400 inline' /><p className='text-white'>The Sparks Foundation</p></a>
      </div>
      <div className="nav">
        <ul className='flex justify-centre items-center mr-4 space-x-5'>
          <li className="text-white cursor-pointer py-[1.37rem] font-semibold "><Link to="/" activeClassName='active'>Home</Link></li>
          <li className="text-white cursor-pointer py-[1.37rem] font-semibold" ><Link to="/about-us" activeClassName='active'>About Us</Link></li>
          <li className='mt-2'><form id="rzp_payment_form"></form></li>
        </ul>
      </div>
    </div>
  )
}
