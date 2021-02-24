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
                        Acadia National Park
                    </div>
                </div>

                <div className="flex flex-wrap items-center px-6 py-4">
                <span className="flex items-center mr-2 mb-2 px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700 font-medium capitalize">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="inline-block w-4 mr-1 fill-current">
                    <path
                        className="heroicon-ui"
                        d="M2.59 13.41A1.98 1.98 0 0 1 2 12V7a5 5 0 0 1 5-5h4.99c.53 0 1.04.2 1.42.59l8 8a2 2 0 0 1 0 2.82l-8 8a2 2 0 0 1-2.82 0l-8-8zM20 12l-8-8H7a3 3 0 0 0-3 3v5l8 8 8-8zM7 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                    />
                        </svg>
                    Short Flight
                </span>
                <span className="flex items-center mr-2 mb-2 px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700 font-medium capitalize">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="inline-block w-4 mr-1 fill-current">
                    <path
                        className="heroicon-ui"
                        d="M2.59 13.41A1.98 1.98 0 0 1 2 12V7a5 5 0 0 1 5-5h4.99c.53 0 1.04.2 1.42.59l8 8a2 2 0 0 1 0 2.82l-8 8a2 2 0 0 1-2.82 0l-8-8zM20 12l-8-8H7a3 3 0 0 0-3 3v5l8 8 8-8zM7 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                    />
                        </svg>
                    Temperature
                </span>
                <span className="flex items-center mr-2 mb-2 px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700 font-medium capitalize">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="inline-block w-4 mr-1 fill-current">
                    <path
                        className="heroicon-ui"
                        d="M2.59 13.41A1.98 1.98 0 0 1 2 12V7a5 5 0 0 1 5-5h4.99c.53 0 1.04.2 1.42.59l8 8a2 2 0 0 1 0 2.82l-8 8a2 2 0 0 1-2.82 0l-8-8zM20 12l-8-8H7a3 3 0 0 0-3 3v5l8 8 8-8zM7 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                    />
                        </svg>
                    Adventure
                </span>
                </div>
            </div>
        </div>
    )
};

export default PlaceCard;