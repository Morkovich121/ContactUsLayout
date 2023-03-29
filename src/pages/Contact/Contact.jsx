import React from 'react';
import Footer from '../../components/Footer/Footer';
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';

import './Contact.css';

const Contact = () => {
    return (
        <>
            <div className='hideAll'>
            </div>
            <div className='contacts-container'>
                <Header />
                <div className="main-part">
                    <div className="main-part_contact-us">
                        <div>Contact Us</div>
                        <div>Any question or remarks? Just write us a message!</div>
                    </div>
                    <Form />
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Contact