
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        const symbol = event.target.value
        dispatch({
            type: 'CHG_CURRENCY',
            payload: symbol,
        });
    }


  return (
    <div>
        <label htmlFor="currency">Currency: </label>
        <select id="currency"  onChange={handleCurrencyChange}>
            <option value="£">£ Pound Sterling</option>
            <option value="$">$ US Dollar</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Ruppee</option>
        </select>
    </div>
  );
};

export default Currency;
