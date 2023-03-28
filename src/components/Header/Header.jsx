import React from 'react';
import Logo from '../Logo/Logo';

import mask from '../../images/mask.png';
import cart from '../../images/cart.png';


import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <Logo itemClass={'itemClass'} />
            <div className='header-menu'>
                <div>
                    Home
                </div>
                <div className='header-menu__features'>
                    Features
                    <img className='header-menu__arrow'
                        alt=''
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' 
                        width='10' height='6'%3E%3Cpath d='M1 5l4-4 4 4' 
                        stroke='%23333333' fill='none'/%3E%3C/svg%3E"></img>
                </div>
                <div>Block</div>
                <div>Shop</div>
                <div>About</div>
                <div className='header-menu__bold'>Contact</div>
                <div className="round-container">
                    <div className='round'>
                        <img className='round-image' alt='' src={mask}></img>
                    </div>
                    <div className='round'>
                        <img className='round-image' alt='' src={cart}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header