import React, {useState} from 'react';

const Counter = () => {
    // const [num1, setNum1] = useState<number>(0);
    // const [num2, setNum2] = useState<number>(0);
    // const [result, setResult] = useState<number>(0);
    // const add = () => {
    //     setResult(num1 + num2);
    // };
    // const subtract = () => {
    //     setResult(num1 - num2);
    // };
    // const multiply = () => {
    //     setResult(num1 * num2);
    // };
    // const divide = () => {
    //     setResult(num1 / num2);
    // };
    //
    // return (
    //     <>
    //         <div
    //             data-testid="result">
    //             {result}
    //         </div>
    //         <input
    //             type="number"
    //             data-testid="num1"
    //             value={num1}
    //             onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNum1(parseInt(e.target.value as string))}
    //         />
    //         <input
    //             type="number"
    //             data-testid="num2"
    //             value={num2}
    //             onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNum2(parseInt(e.target.value as string))}
    //         />
    //         <button onClick={add}
    //
    //                 data-testid="add">
    //             Add
    //         </button>
    //         <button
    //             onClick={subtract}
    //             data-testid="subtract"
    //         >
    //             Subtract
    //         </button>
    //         <button
    //             onClick={multiply}
    //             data-testid="multiply"
    //         >
    //             Multiply
    //         </button>
    //         <button onClick={divide}
    //                 data-testid="divide">
    //             Divide
    //         </button>
    //     </>
    // );
    const [value, setValue] = useState('')

    // @ts-ignore
    const removeDollarSign = value => (value[0] === '$' ? value.slice(1) : value)
    // @ts-ignore
    const getReturnValue = value => (value === '' ? '' : `$${value}`)

    // @ts-ignore
    const handleChange = ev => {
        ev.preventDefault()
        const inputtedValue = ev.currentTarget.value
        const noDollarSign = removeDollarSign(inputtedValue)
        if (isNaN(noDollarSign)) return
        setValue(getReturnValue(noDollarSign))
    }

    return <input value={value} aria-label="cost-input" onChange={handleChange} />

};

export default Counter;