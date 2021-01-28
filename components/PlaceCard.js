import React from 'react';
import Tag from './Tag'

const PlaceCard = () => {
    return (
        <div className="flex flex-col justify-between w-full h-full rounded overflow-hidden shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none cursor-pointer">
            <div>
                <div className="w-full bg-gray-200">
                    <img className="w-full" src="https://images.unsplash.com/photo-1576595092285-a89d7b0115bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=350&q=80" />
                </div>

                <div className="px-6 py-4">
                    <div className="flex justify-between items-center mb-2 text-xl font-bold">
                        Hello World
                    </div>
                    <p className="text-gray-700 text-base">Hi there!</p>
                </div>

                <div className="flex flex-wrap items-center px-6 py-4">
                    <Tag />
                </div>
            </div>
        </div>
    )
};

export default PlaceCard;