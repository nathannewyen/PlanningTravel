import React, {userState} from 'react';
import { getPlacesByTags, defaultTagField } from '../utils';
import TagCheckboxes from '../components/TagCheckboxes';

const PlacePicker = () => {
    return (
        <section className="py-12 md:flex md:justify-between">
            <div className="lg:w-1/2">
                <h2 className="mb-5 text-4xl">This year we're going to...</h2>
                <div className="w-full py-4">
                    <TagCheckboxes />
                </div>
                
                <div className="flex justify-center md:justify-start mt-10">
                    <button className="inline-flex items-center px-6 py-3 rounded-lg shadow bg-green-500 hover:bg-green-400 hover:shadow-lg focus:outline-none focus:bg-green-400 text-white font-small tracking-wide">
                        Tell me already!!!
                    </button>
                </div>
            </div>

            <div className="lg:w-1/2">
                <img src="/plane.gif" alt="Plane taking off" className="rounded-lg" />
                {/* <img src="/plane.png" alt="Plane" className="rounded-lg" /> */} 
            </div>
        </section>
    )
};

export default PlacePicker;