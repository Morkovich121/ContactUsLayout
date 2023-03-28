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
                <a href='/'>
                    <div>
                        Home
                    </div>
                </a>
                <a href='/'>
                    <div className='header-menu__features'>

                        Features
                        <img className='header-menu__arrow'
                            alt=''
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' 
                        width='10' height='6'%3E%3Cpath d='M1 5l4-4 4 4' 
                        stroke='%23333333' fill='none'/%3E%3C/svg%3E"></img>
                    </div>
                </a>
                <a href='/'>
                    <div>Blog</div>
                </a>
                <a href='/'>
                    <div>Shop</div>
                </a>
                <a href='/'>
                    <div>About</div>
                </a>
                <a href='/'>
                    <div className='header-menu__bold'>Contact</div>
                </a>
                <div className="round-container">
                    <a href='/'>
                        <div className='round'>
                            <img className='round-image' alt='' src={mask}></img>
                        </div>
                    </a>
                    <a href='/'>
                        <div className='round'>
                            <img className='round-image' alt='' src={cart}></img>
                        </div>
                    </a>
                </div>
            </div >
        </div >
    )
}

export default Header