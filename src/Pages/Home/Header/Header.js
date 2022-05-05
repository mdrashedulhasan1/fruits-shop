import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className='header-container'>
            <h1 className='header-text-color'>A Little Fruits Hunt</h1>
            <p><marquee className='header-p-text' behavior="" direction="">Choice your favoutite fruits. And buy now. We know you like good fruits thats why we made this website.</marquee></p>
        </div>
    );
};

export default Header;