import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency,expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if(event.target.value > 20000){
            alert("Budget should not exceed 20000")
        } else {
            const totalExpenses = expenses.reduce((total, item) => {
                return (total += item.cost);
            }, 0);
            if(event.target.value < totalExpenses){
                alert("Budget should not be lower than the expenses")
            } else{
                setNewBudget(event.target.value);
            }
        }
        
    }
    return (
        <div className='alert alert-secondary' style={{ display: 'flex', alignItems: 'center' }}>
            <span>Budget:</span>{currency}
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} />
            <span style={{ marginLeft: '0.5rem' }}></span>
        </div>
    );
};
export default Budget;
