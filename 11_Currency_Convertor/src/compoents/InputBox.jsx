import React from "react";
import { useId } from "react";
function InputBox({
    label,
    amount,
    currencyOptions,
    onCurrencyChange,
    onAmountChange,
    selectCurrency,
    amountDisable = false,
    className = "",
}) {
   
    const amountInputId = useId();

    return (
        <div className={`bg-white/95 p-4 rounded-xl text-sm flex shadow-sm hover:shadow-md transition-shadow duration-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-gray-500 font-medium mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                    className="outline-none w-full bg-transparent py-1.5 font-semibold text-gray-800 transition-colors duration-200"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                />
            </div>
            <div className="w-1/2 flex flex-col justify-center items-end">
                <p className="text-gray-500 font-medium mb-2">Currency Type</p>
                <select
                    className="rounded-lg px-4 py-2 bg-gray-100 cursor-pointer outline-none shadow-sm transition-all duration-300 ease-in-out hover:bg-gray-200 hover:shadow-md hover:-translate-y-0.5 hover:scale-105 active:scale-95 focus:ring-2 focus:ring-blue-500 font-semibold text-gray-800 "
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    
                    
                >
                    
                    {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
