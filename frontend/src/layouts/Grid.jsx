import React from 'react'
import items from '../data/data.js'
import { Star } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Grid = () => {
  return (
    <div className="bg-[#A96F45] h-auto w-screen p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ">
            {
                items.map((item, index) => (
                    <div key={index} className="bg-[#F5F5F5] p-4 rounded-lg shadow-md flex flex-col gap-4">
                        <div className="flex flex-col gap-2 bg-[#E0E0E0] p-4 rounded-lg">
                            <div className="flex items-center gap-2">
                                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full" />
                                <h2 className="text-lg font-bold mr-auto">{item.name}</h2>
                                <Star /> <span className="ml-1">{item.rating}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin /> 
                                <h4 className="text-md font-semibold">{item.location}</h4><span className="ml-1">{item.distance} km away</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h4 className="text-md font-semibold">Services Offered:</h4>
                                <p className="text-sm">{item.services}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <h4 className="text-md font-semibold">Joined Date: {item.joinedDate}</h4>
                            <button className="bg-[#0D332D] text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-transform active:scale-90">Available</button>
                        </div>
                        <Link to={`/user/${item.id}`} className="bg-[#0D332D] text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-transform active:scale-90 text-center">View Profile</Link>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Grid