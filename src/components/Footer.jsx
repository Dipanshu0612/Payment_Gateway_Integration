import React from 'react'
import {BsGlobeCentralSouthAsia, BsLinkedin} from "react-icons/bs"
import {AiFillFacebook, AiFillInstagram, AiFillTwitterSquare} from "react-icons/ai"


export default function Footer() {
  return (
    <>
    <div className='bg-neutral-900 h-[20rem] flex justify-around items-center'>
        <div className="box1 h-[18rem] w-[18rem]">
            <h3 className='text-yellow-500 font-bold text-transform: uppercase text-[1.5rem] px-4 py-2 tracking-wide'>The Sparks Foundation</h3>
            <p className='px-3 py-3 text-gray-300'>We connect students of all financial backgrounds with experts. Knowledge sharing enables equal opportunity for all.</p>
            <div className="social flex font-medium text-[1.7rem] space-x-3 px-3 py-4">
                <a href="https://www.facebook.com/thesparksfoundation.info" className='border border-gray-300 text-gray-300 p-1 hover:text-white hover:bg-blue-300'><AiFillFacebook/></a>
                <a href="https://www.linkedin.com/company/the-sparks-foundation/" className='border border-gray-300 text-gray-300 p-1 hover:text-white hover:bg-blue-300'><BsLinkedin/></a>
                <a href="https://instagram.com/thesparksfoundation.info" className='border border-gray-300 text-gray-300 p-1 hover:text-white hover:bg-blue-300'><AiFillInstagram/></a>
                <a href="https://twitter.com/tsfsingapore" className='border border-gray-300 text-gray-300 p-1 hover:text-white hover:bg-blue-300'><AiFillTwitterSquare/></a>
                <a href="https://thesparksfoundation.info/" className='border border-gray-300 text-gray-300 p-1 hover:text-white hover:bg-blue-300'><BsGlobeCentralSouthAsia/></a>
            </div>
        </div>
        <div className="box2 border border-white h-[18rem] w-[18rem]">

        </div>
        <div className="box3 border border-white h-[18rem] w-[18rem]">

        </div>
        <div className="box4 border border-white h-[18rem] w-[18rem]">

        </div>
    </div>
    <div className="lastfooter w-full bg-black h-[7rem] text-lg text-white flex items-center justify-center">
    © 2023 The Sparks Foundation. All Rights Reserved | Design by <a href="https://www.linkedin.com/in/dipanshu-mishra-696a0622a/"><span className='text-blue-500 text-lg font-bold cursor-pointer'>&nbsp;Dipanshu Mishra</span> </a>
    </div>
    </>
  )
}
