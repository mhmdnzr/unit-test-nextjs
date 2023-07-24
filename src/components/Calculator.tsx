import React, {useState} from 'react';

const Calculator = () => {
    const [value, setValue] = useState<number>(0)
    const [value2, setValue2] = useState<number>(0)
    const [result, setResult] = useState<number>(0);
    const add = () => {
        const res = parseInt(String(value)) + parseInt(String(value2))
        setResult(res);
    };
    const subtract = () => {
        const res = parseInt(String(value)) - parseInt(String(value2))
        setResult(res);

    };
    const multiply = () => {
        const res = parseInt(String(value)) * parseInt(String(value2))
        setResult(res);
    };
    const divide = () => {
        const res = parseInt(String(value)) / parseInt(String(value2))
        setResult(res);
    };


    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>): void => {
        ev.preventDefault()
        const inputtedValue = ev.currentTarget.value
        setValue(parseInt(inputtedValue))
    }

    const handleChange2 = (ev: React.ChangeEvent<HTMLInputElement>): void => {
        ev.preventDefault()
        const inputtedValue = ev.currentTarget.value
        setValue2(parseInt(inputtedValue))
    }

    return <>
        <input type={'number'} value={value} data-testid="cost-input" onChange={handleChange}/>
        <input type={'number'} value={value2} data-testid="cost-input-2" onChange={handleChange2}/>

        <button onClick={add}
                data-testid="add">
            Add
        </button>
        <button
            onClick={subtract}
            data-testid="subtract"
        >
            Subtract
        </button>
        <button
            onClick={multiply}
            data-testid="multiply"
        >
            Multiply
        </button>
        <button onClick={divide}
                data-testid="divide">
            Divide
        </button>
        <div data-testid="result">
            {result}
        </div>
    </>

};

export default Calculator;