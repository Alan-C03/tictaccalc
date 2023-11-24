import React, { useState } from 'react';
import Button from './Button';

const Calculator = () => {
    const [input, setInput] = useState('');

    const handleButtonClick = (value) => {
        setInput((prevInput) => prevInput + value);
    };

    const handleClear = () => {
        setInput('');
    };

    const handleCalculate = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput('Error');
        }
    };

    return (
        <div className="calculator">
            <input type="text" value={input} readOnly />
            <div className="button-grid">
                <Button label="1" onClick={() => handleButtonClick('1')} />
                <Button label="2" onClick={() => handleButtonClick('2')} />
                <Button label="3" onClick={() => handleButtonClick('3')} />
                <Button label="+" onClick={() => handleButtonClick('+')} />
                <Button label="4" onClick={() => handleButtonClick('4')} />
                <Button label="5" onClick={() => handleButtonClick('5')} />
                <Button label="6" onClick={() => handleButtonClick('6')} />
                <Button label="-" onClick={() => handleButtonClick('-')} />
                <Button label="7" onClick={() => handleButtonClick('7')} />
                <Button label="8" onClick={() => handleButtonClick('8')} />
                <Button label="9" onClick={() => handleButtonClick('9')} />
                <Button label="*" onClick={() => handleButtonClick('*')} />
                <Button label="0" onClick={() => handleButtonClick('0')} />
                <Button label="C" onClick={handleClear} />
                <Button label="=" onClick={handleCalculate} />
                <Button label="/" onClick={() => handleButtonClick('/')} />
            </div>
        </div>
    );
};

export default Calculator;
