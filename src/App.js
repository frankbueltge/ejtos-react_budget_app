import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';
import CurrencySelector from './components/CurrencySelector';


const App = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('GBP');

    const handleCurrencyChange = (currency) => {
        setSelectedCurrency(currency);
    };

    return (
        <AppProvider value={{ selectedCurrency, setSelectedCurrency }}>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <CurrencySelector onCurrencyChange={handleCurrencyChange} />
                <div className='row mt-3'>
                    <div className='col-sm'>
                    <Budget />
                    </div>
                    <div className='col-sm'>
                        <RemainingBudget />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm/>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;
