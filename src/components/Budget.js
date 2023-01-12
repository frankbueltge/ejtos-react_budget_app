import React, { useContext } from 'react';

import { AppContext, currencies } from '../context/AppContext';



const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    const currencySymbol = currencies.find(c => c.code === currency).symbol;

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currencySymbol}{budget}</span>
        </div>
    );
};

export default Budget;
