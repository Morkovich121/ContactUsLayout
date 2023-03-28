import React from 'react';
import Header from '../../components/Header/Header';

import './Contact.css';

const Contact = () => {
    return (
        <div className='contactsContainer'>
            <Header />
            <div className="main-part">
                <div className="main-part_contact-us">
                    <span>Contact Us</span>
                    <span>Any question or remarks? Just write us a message!</span>
                </div>
            </div>
        </div>
    )
}

export default Contact