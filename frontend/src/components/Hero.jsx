import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Welcome to KaamSetu</h2>
            <p className="text-lg text-white">Find the best and trusted local workers near you.</p>
        </div>

        <div className="mt-4">  
        <select class="border border-gray-300 rounded-md p-2">
        <option value="">Select a service you want</option>
        <option value="plumber">Plumber</option>
        <option value="electrician">Electrician</option>
        <option value="carpenter">Carpenter</option>
        <option value="painter">Painter</option>
        <option value="auto">Book Auto</option>
        <option value="driver">Driver</option>
        <option value="tutor">Tutor</option>
        <option value="babysitter">Babysitter</option>
        <option value="maid">Maid</option>
        <option value="cook">Cook</option>
        <option value="mechanic">Mechanic</option>
        <option value="mason">Mason</option>
        <option value="labour">Labour</option>
        </select>  
        </div>

        <div className="mt-4">
            <select className="border border-gray-300 rounded-md p-2">
                <option value="">Select a location</option>
                <option value="Lucknow">Lucknow</option>
                <option value="delhi">Delhi</option>
                <option value="mumbai">Mumbai</option>
                <option value="bangalore">Bangalore</option>
                <option value="chennai">Chennai</option>
            </select>
        </div>
        <button className="mt-4 bg-[#0D332D] text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-transform active:scale-90">Find Workers</button>
    
    </div>
    
  )
}

export default Hero