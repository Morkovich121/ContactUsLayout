import React from 'react';
import PropTypes from 'prop-types';

import './Logo.css';

const Logo = ({ itemClass }) => {
  //Тут використовуємо propTypes та пропс itemClass на той випадок, 
  //якщо в майбутньому ми захочемо змінити Logo Here на зображення чи щось інше
  return (
    <div style={{ cursor: 'default' }} className={itemClass}>Logo Here</div>
  );
};

Logo.propTypes = {
  itemClass: PropTypes.string.isRequired,
};

export default Logo;