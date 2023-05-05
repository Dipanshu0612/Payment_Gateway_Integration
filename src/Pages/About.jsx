import React from 'react'
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  useEffect(() => {
    const rzpPaymentForm = document.getElementById("rzp_payment_form3");

    if (!rzpPaymentForm.hasChildNodes()) {

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_LklOUd6tPdSZet";
      rzpPaymentForm.appendChild(script);

    }

  });
  return (
    <div className='flex flex-wrap bg-slate-200 my-3 flex-col justify-center items-center space-y-5'>
      <div className="box flex flex-wrap justify-center items-center flex-col my-4">
        <h3 className='text-4xl text-black font-bold tracking-wider mb-2'>About Us</h3>
        <h4 className='text-blue-700'>Vision, Mission and Values</h4>
      </div>
      <div className="box flex flex-wrap justify-center items-center flex-col my-4">
        <h3 className='text-3xl text-yellow-500 tracking-wider'>Our Vision Statement</h3>
        <h4 className='text-center'>A world of enabled and connected little minds, building future.</h4>
      </div>
      <div className="box flex flex-wrap justify-center items-center flex-col ">
        <h3 className='text-3xl text-yellow-500 tracking-wider'>Our Mission Statement</h3>
        <h4 className='text-center'>To inspire students, help them innovate and let them integrate to build the next generation humankind.</h4>
        <div className="missioncont flex flex-wrap justify-around items-center px-[4.5rem] py-3">
          <div className="insbox1 px-[4rem] py-2 sm:px-1 sm:py-1 md:px-1 md:py-1 text-center">
            <h4 className='font-bold'>Inspire</h4>
            <p className='tracking-wider'>To inspire, motivate and encourage students to learn, create and help build a better society.</p>
          </div>
          <div className="insbox2 px-[4rem] py-2 sm:px-1 sm:py-1 md:px-1 md:py-1 text-center">
            <h4 className='font-bold'>Innovate</h4>
            <p className='tracking-wider'>To teach new ways of thinking, to innovate and solve the problems on their own.</p>
          </div>
          <div className="insbox3 px-[4rem] py-2 sm:px-1 sm:py-1 md:px-1 md:py-1 text-center">
            <h4 className='font-bold'>Integrate</h4>
            <p className='tracking-wider'>To let the students integrate, and help each other, learn from each other and do well together.</p>
          </div>
        </div>
      </div>
      <div className="box flex flex-wrap justify-center items-center flex-col space-y-5">
        <h3 className='text-3xl text-yellow-500 tracking-wider'>Our Values</h3>
        <div className='flex flex-wrap justify-center items-center px-4 py-2 space-x-10 md:text-[2rem] md:flex-col sm:flex-col md:space-x-1 sm:space-x-1'>
          <div className="valuebox1 px-[4rem] space-y-7 md:text-center md:px-0 md:py-0 sm:px-0 sm:py-0 sm:text-center sm:my-2 md:my-2">
            <h4>Resilience</h4>
            <h4>Commitment</h4>
            <h4>Integrity</h4>
          </div>
          <div className="valuebox2 px-[4rem] space-y-7 md:text-center md:px-0 md:py-0 sm:px-0 sm:py-0 sm:text-center sm:my-2 md:my-2">
            <h4>Respect</h4>
            <h4>People</h4>
            <h4>Training</h4>
          </div>
          <div className="valuebox3 px-[4rem] space-y-7 md:text-center md:px-0 md:py-0 sm:px-0 sm:py-0 sm:text-center sm:my-2 md:my-2">
            <h4>Excellence</h4>
            <h4>Quality</h4>
            <h4>Professionalism</h4>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap justify-center items-center flex-col space-y-5 my-4'>
        <form id="rzp_payment_form3"></form>
      </div>
    </div>
  )
}
