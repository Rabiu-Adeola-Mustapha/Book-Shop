import { render, screen } from "@testing-library/react";
import Form from "./Form";
import userEvent from "@testing-library/user-event";


beforeEach(() => {
    render(<Form/>);
});



test("test 2 + 2", () => {
  expect(2 + 2).toBe(4);
});


// test("should be in the document", () => {
//   render(<Form />);
//   const divElem = screen.getByTestId("form");
// expect(divElem).toBeInTheDocument;
// });

test("should have empty value on start", () => {
  //render the component
  

  // select the elemet to test
  const emailInputElem = screen.getByRole("textbox");
  const passwordInputElem = screen.getByLabelText("textbox");
  const confirmPasswordInputElem = screen.getByLabelText(/confirm password/i);

  //test your assertion
  expect(emailInputElem.value).toBe("");
  expect(passwordInputElem.value).toBe("");
  expect(confirmPasswordInputElem.value).toBe("");
});


test("should be able to type into the box", () => {
    const emailInputElem = screen.getByRole("textbox");
    const passwordInputElem = screen.getByLabelText("Password")
    const confirmPasswordInputElem = screen.getByLabelText(/confirm password/i)

    userEvent.type(emailInputElem, "mustopharabiu@gmail.com");
    userEvent.type(passwordInputElem,"password");
    userEvent.type(confirmPasswordInputElem, "password")

    expect(emailInputElem.value).toBe("mustopharabiu@gmail.com");
    expect(passwordInputElem.value).toBe("password");
    expect(confirmPasswordInputElem.value).toBe("password")

});
