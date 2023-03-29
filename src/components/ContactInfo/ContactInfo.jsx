import React from 'react';
import phone from '../../images/phone.png';
import mail from '../../images/mail.png';
import location from '../../images/location.png';

import './ContactInfo.css';

const ContactInfo = () => {
    return (
        <div className='mobile-info left-part__info'>
            <div>
                <img src={phone} alt='' />
                <span>+1012 3456 789</span>
            </div>
            <div>
                <img src={mail} alt='' />
                <span>demo@gmail.com</span>
            </div>
            <div>
                <img src={location} alt='' />
                <span>132 Dartmouth Street Boston, Massachusetts 02156 United States</span>
            </div>
        </div>
    )
}

export default ContactInfo