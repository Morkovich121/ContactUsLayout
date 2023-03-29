import React from 'react';
import Logo from '../Logo/Logo';

import mask from '../../images/mask.png';
import cart from '../../images/cart.png';
import maskWhite from '../../images/maskWhite.png';
import cartWhite from '../../images/cartWhite.png';
import menu from '../../images/menu.png';



import './Header.css';

const Header = () => {

    const showMenu = () => {
        const menu = document.getElementsByClassName('header-menu');
        const hideAll = document.getElementsByClassName('hideAll');
        menu[0].style.top = '0%'
        hideAll[0].style.display = 'block';
    }

    const hideMenu = () => {
        const menu = document.getElementsByClassName('header-menu');
        const hideAll = document.getElementsByClassName('hideAll');
        menu[0].style.top = '-25%'
        hideAll[0].style.display = 'none';
    }

    return (
        <div className='header'>
            <Logo itemClass={'itemClass'} />
            <div className='header-menu'>
                <div className="mobile-header-logo">
                    <Logo itemClass={'itemClass-menu'} />
                    <svg onClick={hideMenu} className='close-menu' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 17L1 1M17 1L1 17" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>

                </div>
                <div className='menu-list'>
                    <a href='/'>
                        <div>
                            Home
                        </div>
                    </a>
                    <a href='/'>
                        <div className='header-menu__features'>

                            Features
                            <img className='header-menu__arrow black'
                                alt=''
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' 
                        width='10' height='6'%3E%3Cpath d='M1 5l4-4 4 4' 
                        stroke='%23333333' fill='none'/%3E%3C/svg%3E"></img>
                            <img className='header-menu__arrow white'
                                alt=''
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' 
                        width='10' height='6'%3E%3Cpath d='M1 5l4-4 4 4' 
                        stroke='white' fill='none'/%3E%3C/svg%3E"></img>
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
                </div>
                <div className="round-container">
                    <a href='/'>
                        <div className='round'>
                            <img className='round-image-desktop' alt='' src={mask}></img>
                            <img className='round-image-mobile' alt='' src={maskWhite}></img>

                        </div>
                    </a>
                    <a href='/'>
                        <div className='round'>
                            <img className='round-image-desktop' alt='' src={cart}></img>
                            <img className='round-image-mobile' alt='' src={cartWhite}></img>
                        </div>
                    </a>
                </div>
            </div >
            <div className='menu-pic'>
                <img onClick={showMenu} src={menu} alt='' />
            </div>
        </div >
    )
}

export default Header