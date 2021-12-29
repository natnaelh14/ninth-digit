import React from 'react';
import NinthLogo from './ninth-logo.png';
import './header.css';

const Header = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', borderBottom: '0.5rem solid black' }}>
            <img style={{ height: '100px', width: '100px' }} src={NinthLogo} alt='ninth-digit-logo' />
            <h1 className="f2" style={{ marginLeft: '1rem' }}>NINTH DIGIT</h1>
        </div>
    )
}

export default Header
