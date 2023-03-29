import React from 'react';
import Footer from '../../components/Footer/Footer';
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';

import './Contact.css';

const Contact = () => {
    return (
        <>
            <div className='contacts-container'>
                <Header />
                <div className="main-part">
                    <div className="main-part_contact-us">
                        <span>Contact Us</span>
                        <span>Any question or remarks? Just write us a message!</span>
                    </div>
                    <Form />
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Contact