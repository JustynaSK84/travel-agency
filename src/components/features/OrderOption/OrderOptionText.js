import React from 'react';
import styles from './OrderOption.module.scss';
import PropTypes from 'prop-types';

const OrderOptionText = ({setOptionValue}) => {
  return (
    <input 
      type="text"
      className={styles.input}
      onChange={event => setOptionValue(event.currentTarget.value)}
      placeholder='enter text'
    />
  );
};
OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
};

    
export default OrderOptionText; 

