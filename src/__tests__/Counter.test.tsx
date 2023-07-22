import Counter from "../components/Counter";
import {fireEvent, render, screen} from "@testing-library/react";


const setup = () => {
    const utils = render(<Counter />)
    const input = screen.getByLabelText('cost-input')
    return {
        input,
        ...utils,
    }
}
test('It should keep a $ in front of the input', () => {
    const {input} = setup()
    fireEvent.change(input, {target: {value: '23'}})
    // @ts-ignore
    expect(input.value).toBe('$23')
})
test('It should allow a $ to be in the input when the value is changed', () => {
    const {input} = setup()
    fireEvent.change(input, {target: {value: '$23.0'}})
    // @ts-ignore
    expect(input.value).toBe('$23.0')
})

test('It should not allow letters to be inputted', () => {
    const {input} = setup()
    // @ts-ignore
    expect(input.value).toBe('') // empty before
    fireEvent.change(input, {target: {value: 'Good Day'}})
    // @ts-ignore
    expect(input.value).toBe('') //empty after
})

test('It should allow the $ to be deleted', () => {
    const {input} = setup()
    fireEvent.change(input, {target: {value: '23'}})
    // @ts-ignore
    expect(input.value).toBe('$23') // need to make a change so React registers "" as a change
    fireEvent.change(input, {target: {value: ''}})
    // @ts-ignore
    expect(input.value).toBe('')
})
//
// describe("Calculator", () => {
//     it("renders a calculator", () => {
//         render(<Counter/>);
//         // check if all components are rendered
//         expect(screen.getByTestId("result")).toBeInTheDocument();
//         expect(screen.getByTestId("num1")).toBeInTheDocument();
//         expect(screen.getByTestId("num2")).toBeInTheDocument();
//         expect(screen.getByTestId("add")).toBeInTheDocument();
//         expect(screen.getByTestId("subtract")).toBeInTheDocument();
//         expect(screen.getByTestId("multiply")).toBeInTheDocument();
//         expect(screen.getByTestId("divide")).toBeInTheDocument();
//     });
//     it("adds numbers", () => {
//         render(<Counter/>);
//         // check if adds properly
//         const num1input = screen.getByTestId("num1");
//         const num2input = screen.getByTestId("num2");
//         const addButton = screen.getByTestId("add");
//         const resultArea = screen.getByTestId("result");
//         fireEvent.change(num1input, { target: { value: 5 } });
//         fireEvent.change(num2input, { target: { value: 8 } });
//         addButton.click();
//         expect(resultArea).toHaveTextContent("13");
//     });
//     it("subtracts numbers", () => {
//         render(<Counter/>);
//         // check if adds properly
//         const num1input = screen.getByTestId("num1");
//         const num2input = screen.getByTestId("num2");
//         const subtractButton = screen.getByTestId("subtract");
//         const resultArea = screen.getByTestId("result");
//         fireEvent.change(num1input, { target: { value: 8 } });
//         fireEvent.change(num2input, { target: { value: 5 } });
//         subtractButton.click();
//         expect(resultArea).toHaveTextContent("3");
//     });
//     it("multiplies numbers", () => {
//         render(<Counter/>);
//         // check if adds properly
//         const num1input = screen.getByTestId("num1");
//         const num2input = screen.getByTestId("num2");
//         const multiplyButton = screen.getByTestId("multiply");
//         const resultArea = screen.getByTestId("result");
//         fireEvent.change(num1input, { target: { value: 5 } });
//         fireEvent.change(num2input, { target: { value: 8 } });
//         multiplyButton.click();
//         expect(resultArea).toHaveTextContent("40");
//     });
//     it("divides numbers", () => {
//         render(<Counter/>);
//         // check if adds properly
//         const num1input = screen.getByTestId("num1");
//         const num2input = screen.getByTestId("num2");
//         const divideButton = screen.getByTestId("divide");
//         const resultArea = screen.getByTestId("result");
//         fireEvent.change(num1input, { target: { value: 20 } });
//         fireEvent.change(num2input, { target: { value: 2 } });
//         divideButton.click();
//         expect(resultArea).toHaveTextContent("10");
//     });
// });