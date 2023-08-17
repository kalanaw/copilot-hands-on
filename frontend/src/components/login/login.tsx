import "./login.scss";
import React, {useState} from "react";

interface LoginProps {}

export const Login: React.FunctionComponent<LoginProps> = (props) => {
  // initize the formstate for login form email and password i want value, isValid and errormessage
  const [formState, setFormState] = useState({
    email: {
      value: "",
      isValid: false,
      errorMessage: "",
    },
    password: {
      value: "",
      isValid: false,
      errorMessage: "",
    },
  }), 
  // validations for email and password
  validateEmail = (email: string) => {
    // regular expression for email
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  },
  validatePassword = (password: string) => {
    // regular expression for password 8 characters alphanumeric with atleast one special character
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
    return regex.test(password);
  },
  // write onchange handlers for email and password
  onEmailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    // update the formstate
    setFormState({
      ...formState,
      email: {
        isValid: validateEmail(event.target.value),
        value: event.target.value,
        errorMessage: validateEmail(event.target.value)? "" : "Please enter a valid email",
      },
    });
  },
  onPasswordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    // update the formstate
    setFormState({
      ...formState,
      password: {
        value: event.target.value,
        isValid: validatePassword(event.target.value),
        errorMessage: validatePassword(event.target.value)? "" : "Please enter a valid password",
      },
    });
  },
  onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    // prevent default behaviour
    event.preventDefault();
    console.log(formState);
  };

  return (
    <div className="login">
      {/* I need form inside a formcontainer div each input should be in form row and form field divs add form-error for validation messages */}
      <div className="form-container">
        <form onSubmit={onSubmitHandler}>
        <div className="form-header">
          <h2>Login</h2>
        </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={formState.email.value}
                onChange={onEmailChangeHandler}
              />
              {formState.email.errorMessage && (
                <p className="form-error">{formState.email.errorMessage}</p>
              )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={formState.password.value}
                onChange={onPasswordChangeHandler}
              />
              {formState.password.errorMessage && (
                <p className="form-error">{formState.password.errorMessage}</p>
              )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <button className="form-btn" type="submit">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};