import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = ({ onCurrencyChange }) => {
    const { currencies, selectedCurrency } = useContext(AppContext);

    const handleChange = (event) => {
        const currency = event.target.value;
        onCurrencyChange(currency);
    };

    return (
        <div>
            <select value={selectedCurrency} onChange={handleChange}>
                {currencies.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                        {currency.symbol} {currency.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CurrencySelector;
