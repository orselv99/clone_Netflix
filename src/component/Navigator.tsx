import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigator.css';

export const Navigator = () => {
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 100) {
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        };
        window.addEventListener('scroll', scrollListener);
        //console.log(showBackground);
        return () => window.removeEventListener('scroll', scrollListener);
    });

    return (
        <div
            className={`navigator ${
                showBackground === true ? 'navigator_show_background' : null
            }`}>
            <Link to='/favorite'>
                <img
                    className='navigator_logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
                    alt='netflix'
                />
            </Link>
            <div>
                <img
                    className='navigator_favorite'
                    src='https://image.flaticon.com/icons/png/512/102/102280.png'
                    alt='favorite'
                />
                <img
                    className='navigator_user'
                    src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                    alt='user'
                />
            </div>
        </div>
    );
};
