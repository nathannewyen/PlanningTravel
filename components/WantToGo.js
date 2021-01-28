import React from 'react';
import PlaceCard from './PlaceCard'

const WantToGo = () => {
    return (
        <div>
            <h2>Places we want to go</h2>
            <div className="flex flex-wrap mb-4 -mx-3">
                <div className="w-full sm:w-1/2 lg:w-1/4 mb-3 p-3">
                    <PlaceCard />
                </div>
            </div>
        </div>
    )
};

export default WantToGo;
