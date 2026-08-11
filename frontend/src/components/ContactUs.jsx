import React from 'react'
import { MapPin , Mail , PhoneCall , MessageCircle , Users } from 'lucide-react';


const ContactUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 h-screen flex flex-col justify-center items-center m-5">
        <div className="bg-[#0D332D] p-8 rounded-lg shadow-md w-full">
            <h1 className="text-3xl font-bold mb-4 text-white">Contact Us</h1>
            <p className="text-white">If you have any questions or inquiries, please feel free to reach out to us using the contact information below:</p>
        
            <div className="mt-4 text-white space-y-2 ">
                 <div>Email: <a href="mailto:cnvworkss@gmail.com" className="text-blue-500 font-bold">
                    <div className='flex mt-2 gap-4'><Mail /> cnvworkss@gmail.com</div></a></div>
                 <div>Contact No: <a href="tel:+91 8318873596" className="text-blue-500 font-bold">
                    <div className='flex mt-2 gap-4'><PhoneCall /> +91 8318873596</div></a></div>
                 <div >Address:<div className='flex mt-2 gap-4'><MapPin className="inline-block ml-1" /> Lucknow, Uttar Pradesh, 226002</div></div>
                 <div>Social Media: <a href="https://www.instagram.com/cool.nv/" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold">
                 <div className='flex mt-2 gap-4'><MessageCircle /> Instagram</div></a></div>
                 <div>Social Media: <a href="https://www.linkedin.com/in/naveen-chaubey-477a22249" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold">
                 <div className='flex mt-2 gap-4'><Users /> LinkedIn</div></a></div>
            </div>
           
            <p className="mt-4 text-white">We will do our best to respond to your inquiries in a timely manner. Thank you for reaching out to us!</p>
        </div>
    </div>
  )
}

export default ContactUs