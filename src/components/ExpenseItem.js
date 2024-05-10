import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaPlus } from 'react-icons/fa'; // Import the plus icon from react-icons
import { FaMinus } from 'react-icons/fa'; // Import the plus icon from react-icons

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><button className="plus-icon-btn" onClick={() => increaseAllocation(props.name)}><FaPlus className="plus-icon" /></button></td>
            {/* <td><button className="minus-icon-btn" onClick={handleDeleteExpense}><FaPlus className="plus-icon" /></button></td> */}
            <td><button className="minus-icon-btn" onClick={handleDeleteExpense}><FaMinus className="minus-icon" /></button></td>
            {/* <td><TiDelete size='1.5em' onClick={handleDeleteExpense} /></td> */}
        </tr>
    );
};

export default ExpenseItem;
