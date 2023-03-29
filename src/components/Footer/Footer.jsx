import React from 'react';
import Logo from '../Logo/Logo';
import ContactInfo from '../ContactInfo/ContactInfo';

import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <Logo itemClass='footer__logo' />
            <div className='footer-info'>
                <div className="footer-info__line"></div>
                <div className='footer-info-text'>
                    <div className="mobile-info">
                        <div className="gap20 footer-info_reach-us">
                            <div className='footer-info__header'>Reach us</div>
                            <ContactInfo />
                        </div>
                        <div className="gap20 footer-info_company">
                            <div className='footer-info__header'>Company</div>
                            <div className='gap25 footer-contact-info'>
                                <a href="/">About</a>
                                <a href="/">Contact</a>
                                <a href="/">Blogs</a>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-info">
                        <div className="gap20 footer-info_legal">
                            <div className='footer-info__header'>Legal</div>
                            <div className='gap25 footer-contact-info'>
                                <a href="/">Privacy Policy</a>
                                <a href="/">Terms &amp; Services</a>
                                <a href="/">Terms of Use</a>
                                <a href="/">Refund Policy</a>
                            </div>
                        </div>
                        <div className="gap20 footer-info_links">
                            <div className='footer-info__header'>Quick Links</div>
                            <div className='gap25 footer-contact-info'>
                                <a href="/">Techlabz Keybox</a>
                                <a href="/">Downloads</a>
                                <a href="/">Forum</a>
                            </div>
                        </div>
                    </div>
                    <div className='newsletter'>
                        <div className="newsletter__header">
                            Join Our Newsletter
                        </div>
                        <div className="newsletter-send">
                            <input type='text' className='newsletter__input' placeholder='Your email address' />
                            <button className='newsletter__button'>Subscribe</button>
                        </div>
                        <div className="newsletter__message">
                            *  Will send you weekly updates for your better tool management.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer