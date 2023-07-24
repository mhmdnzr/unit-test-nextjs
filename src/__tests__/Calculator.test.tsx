import Calculator from "../components/Calculator";
import {act, fireEvent, render, screen} from "@testing-library/react";


const setup = () => {
    const utils = render(<Calculator/>)
    // check component is rendered
    expect(screen.getByTestId("result")).toBeInTheDocument();
    expect(screen.getByTestId("add")).toBeInTheDocument();
    expect(screen.getByTestId("subtract")).toBeInTheDocument();
    expect(screen.getByTestId("multiply")).toBeInTheDocument();
    expect(screen.getByTestId("divide")).toBeInTheDocument();
    expect(screen.getByTestId("cost-input")).toBeInTheDocument();
    expect(screen.getByTestId("cost-input-2")).toBeInTheDocument();
    // end check component is rendered


    // define elements in test
    const addButton = screen.getByTestId("add");
    const subtractButton = screen.getByTestId("subtract");
    const multiplyButton = screen.getByTestId("multiply");
    const divideButton = screen.getByTestId("divide");
    const resultArea = screen.getByTestId("result");
    const input = screen.getByTestId("cost-input");
    const input2 = screen.getByTestId("cost-input-2");
    // end define element in test


    return {
        input,
        input2,
        addButton,
        subtractButton,
        multiplyButton,
        divideButton,
        resultArea,
        ...utils,
    }
}


describe("Calculator", () => {
    test('It should not allow letters to be inputted', () => {
        const {input, input2} = setup()
        // @ts-ignore
        expect(input.value).toBe('0') // empty before
        // @ts-ignore
        expect(input2.value).toBe('0') // empty before


        fireEvent.change(input, {target: {value: 'Good Day'}})
        fireEvent.change(input2, {target: {value: 'Good Day'}})


        // @ts-ignore
        expect(input.value).toBe('') //empty after
        // @ts-ignore
        expect(input2.value).toBe('') //empty after
    })

    test("adds numbers", () => {
        const {
            input,
            input2,
            addButton,
            resultArea
        } = setup()

        fireEvent.change(input, {target: {value: '3'}})
        fireEvent.change(input2, {target: {value: '6'}})
        act(() => {
            /* fire events that update state */
            addButton.click();
        });
        expect(resultArea).toHaveTextContent("9");
    });

    test("subtracts numbers", () => {
        const {
            input,
            input2,
            subtractButton,
            resultArea
        } = setup()
        fireEvent.change(input, {target: {value: '6'}})
        fireEvent.change(input2, {target: {value: '3'}})
        act(() => {
            /* fire events that update state */
            subtractButton.click();
        });
        expect(resultArea).toHaveTextContent("3");
    });


    it("multiplies numbers", () => {
        const {
            input,
            input2,
            multiplyButton,
            resultArea
        } = setup()
        fireEvent.change(input, {target: {value: '3'}})
        fireEvent.change(input2, {target: {value: '6'}})
        act(() => {
            /* fire events that update state */
            multiplyButton.click();
        });
        expect(resultArea).toHaveTextContent("18");
    });
    it("divides numbers", () => {
        const {
            input,
            input2,
            divideButton,
            resultArea
        } = setup()
        fireEvent.change(input, {target: {value: '6'}})
        fireEvent.change(input2, {target: {value: '3'}})
        act(() => {
            /* fire events that update state */
            divideButton.click();
        });
        expect(resultArea).toHaveTextContent("2");
    });
})