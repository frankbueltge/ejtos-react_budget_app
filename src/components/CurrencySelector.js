import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css'



   

const CurrencySelector = () => {
    const {state, dispatch} = useContext(AppContext);

    const handleCurrencyChange = (newCurrency) => {
        dispatch({
            type: "CHG_CURRENCY",
            payload: newCurrency
        });
    }

    return (
        <div className='drop'>
        <label>Currency:</label>
        <select className="dropdown" value={state.currency} onChange={(e) => handleCurrencyChange(e.target.value)}> 
            <option className='opt' value="£">£ Pound</option>
            <option className='opt' value="$">$ Dollar</option>
            <option className='opt' value="€">€ Euro</option>
            <option className='opt' value="₹">₹ Indian Rupee</option>
        </select>
        </div>
    );
}

export default CurrencySelector;
