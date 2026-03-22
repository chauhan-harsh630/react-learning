import { useState } from 'react'
import InputBox from './compoents/InputBox'
import useCurrencyInfo from './hooks/useCurrencyinfo.js'

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }
  const convert = () => {
  setConvertedAmount(amount * currencyInfo[to]);
}
  return (
    <>
      <div
        
            className="w-full h-screen flex flex-wrap justify-center items-center bg-blue-500 bg-cover bg-no-repeat"
      >

        <div className="w-full">
          <h2 className='text-3xl font-bold text-white text-center mb-6 tracking-wide drop-shadow-md'>Currency Convertor</h2>
                <div className="w-full max-w-md mx-auto border border-white/50 rounded-2xl p-7 backdrop-blur-md bg-white/40 shadow-2xl transition-shadow duration-300">
                    <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                 label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-white rounded-full bg-blue-600 text-white font-bold px-4 py-1.5 shadow-md hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1/2 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
                                onClick={swap}
                            >
                                Swap
                            </button>
                        </div>
                        <div className="w-full mt-2 mb-4">
                            <InputBox
                                label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white font-bold px-4 py-4 rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
