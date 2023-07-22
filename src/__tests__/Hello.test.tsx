import {Hello} from "../components/Hello";
import {render, screen} from "@testing-library/react";

it('should "Hello World"', ()=> {
    render(<Hello/>)
    const myElement = screen.getByText(/Hello World/)
    expect(myElement).toBeInTheDocument()
}); 