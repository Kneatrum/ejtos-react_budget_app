
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css';

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
        <div className='alert alert-success'>
        <label htmlFor="currency">Currency </label>
        <select id="currency"  onChange={handleCurrencyChange}>
            <option value="$">($ Dollar)</option>
            <option value="£">(£ Pound )</option>
            <option value="€">(€ Euro)</option>
            <option value="₹">₹ Ruppee</option>
        </select>
    </div>
    );
};

export default Currency;
