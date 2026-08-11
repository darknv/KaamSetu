import React from 'react'

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center h-auto bg-[#A96F45] mb-10">
      <h2 className="text-2xl font-bold text-white mb-4">Register</h2>
      <form className="bg-[#F5F5F5] p-8 rounded-lg shadow-md flex flex-col gap-4 h-full w-1/2 ">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" className="border border-gray-300 rounded-md p-2" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" className="border border-gray-300 rounded-md p-2" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" className="border border-gray-300 rounded-md p-2" />
        </div>
        <button type="submit" className="bg-[#0D332D] text-white py-2 px-4 rounded-md hover:bg-[#0A2A22]">
          Register
        </button>

        <p className="text-gray-600">
          Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login here</a>
        </p>
      </form>
    </div>
  )
}

export default Register