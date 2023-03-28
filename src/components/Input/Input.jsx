import React from 'react'
import PropTypes from 'prop-types';

const Input = ({ label = '', placeholder = '', classText = '' }) => {
    return (
        <>
            <label className={classText}>{label}</label>
            <input type='text' placeholder={placeholder} />
            <div className='line'></div>
        </>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    classText: PropTypes.string
};

export default Input