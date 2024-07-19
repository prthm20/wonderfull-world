"use client"
import React from 'react';

const PlaceMap = ({map_type = "search",extra_address = "",map_params="India"}) => {
    const key ="AIzaSyDG3E0iJm6w02gmFqUrAPVLyqhhrmUB2qk";

    return (
        <div className=''>
            <iframe
                className=' sm:h-80 sm:w-80 w-70'
                
                style={{ marginRight: '1em' }}
                loading="lazy"
                src={`https://www.google.com/maps/embed/v1/${map_type}?key=${key}&q=Top tourist destinations,${extra_address}${map_params}`}>
            </iframe>
        </div>
    );
}

export default PlaceMap;