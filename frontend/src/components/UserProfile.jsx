import React from 'react'
import items from '../data/data.js'
import { useParams } from 'react-router-dom'
import { Star } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { TriangleAlert } from 'lucide-react';

const UserProfile = () => {
  const { id } = useParams()
  const user = items.find((item) => item.id === parseInt(id))
if (!user) {
    return <div className="text-center text-white text-bold h-screen flex flex-col justify-center items-center">
        <TriangleAlert className="w-20 h-20 text-white mx-auto font-bold" />
        <h2 className="text-2xl font-bold mt-4">User not found</h2>
    </div>
  }
  return (
    <div className="max-w-4xl mx-auto p-4">
        <div className="flex flex-col items-center mb-4">
            <img src={user.image} alt={user.name} className="w-32 h-32 rounded-full object-cover" />
            <h2 className="text-2xl font-bold mt-4 text-white mb-5">{user.name}</h2>
            <p className="text-white">{user.description}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-semibold">Location: {user.location} <MapPin className="inline-block ml-1" /></p>
            <p className="font-semibold">Rating: {user.rating} <Star className="inline-block ml-1" /></p>
            <p className="font-semibold">Distance: {user.distance} km away from you</p>
            <p className="font-semibold">Services: {user.services}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <p>{user.experience}</p>
        </div>
    </div>
  )
}

export default UserProfile