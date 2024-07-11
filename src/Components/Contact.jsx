import React from 'react'
import { Analytics } from "@vercel/analytics/react"
const email = 'udugula@usc.edu'
const Contact = () => {
    return (
      <div name='contact' className='w-full h-screen bg-[#ffffff] flex justify-center items-center p-4'>
          <form method='POST' action="https://getform.io/f/56d0eb9d-cf2c-46ec-8dc4-f114ef0aa40a" className='flex flex-col max-w-[600px] w-full'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-black-300'>Contact</p>
                  <p className='text-black-300 py-4'>// Submit the form below or shoot me an email to <a href={`mailto:${email}`} style={{ textDecoration: 'underline', color: '#43A5BE' }}>{email}</a></p>
              </div>
              <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
              <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
              <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
              {/* <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button> */}
              <button className='text-white bg-blue-500 border-2 border-blue-500 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>

          </form>
      </div>
    )
  }

export default Contact