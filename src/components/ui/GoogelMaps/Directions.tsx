"use client"
import React from 'react';

const Directions = ({map_type = "directions",start="",end=""}) => {
    const key = "AIzaSyDG3E0iJm6w02gmFqUrAPVLyqhhrmUB2qk";

    return (
        <div className=''>
            <iframe
                className='items-center w-full h-screen'
                
                style={{ marginRight: '1em' }}
                loading="lazy"
                src={`https://www.google.com/maps/embed/v1/${map_type}?key=${key}&origin=${start}&destination=${end}`}>
            </iframe>
        </div>
    );
}

export default Directions;