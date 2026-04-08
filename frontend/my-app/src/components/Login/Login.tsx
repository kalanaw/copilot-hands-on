import React, { FC, useState, useEffect } from 'react';
import './Login.scss';

interface LoginProps {};
interface IUser {
   name: string;
   email?: string;
   password?: string;
};
interface ILoginFormState {
   email: {
      value: string;
      isValid: boolean;
      errorMessage: string;
   };
   password: {
      value: string;
      isValid: boolean;
      errorMessage: string;
   };
}



const Login: FC<LoginProps> = () => {
   // initalize state for the form
   const [formState, setFormState] = useState<ILoginFormState>({
      email: {
         value: '',
         isValid: false,
         errorMessage: ''
      },
      password: {
         value: '',
         isValid: false,
         errorMessage: ''
      }
   }),
   // have functions for onChange and onSubmit
   onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const email = e.target.value;
      setFormState({
         ...formState,
         email: {
            value: email,
            isValid: validateEmail(email),
            errorMessage: validateEmail(email) ? '' : 'Please enter a valid email'
         }
      });
   },
   onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const password = e.target.value;
      setFormState({
         ...formState,
         password: {
            value: password,
            isValid: validatePassword(password),
            errorMessage: validatePassword(password) ? '' : 'Please enter a valid password'
         }
      });
   },
   onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(formState);
   },
   // add functions to validate the form inputs i need a email regex and a password regex with a min length of 8 characters and characters should be alphanumeric with at least one special character
   validateEmail = (email: string) => {
      const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
      return emailRegex.test(email);
   },
   validatePassword = (password: string) => {
      const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/;
      return passwordRegex.test(password);
   };

   // define a form with email and password and a submit button with a text to register if the user doesn't have an account
   return (
      <div className="login-section">
         <div className="login-header">
            <h1>Login</h1>
         </div>
         <div className="form-container">
            <form action="" onSubmit={onSubmit}>
               {/* have form row and form field divs and have error divs for validation messages*/}
               <div className="form-row">
                  <div className="form-field">
                     <label htmlFor="email">Email</label>
                     <input type="email" name="email" id="email" onChange={onEmailChange}/>
                     <div className="form-error">
                        {formState.email.errorMessage}
                     </div>
                  </div>
               </div>
               <div className="form-row">
                  <div className="form-field">
                     <label htmlFor="password">Password</label>
                     <input type="password" name="password" id="password" onChange={onPasswordChange} />
                     <div className="form-error">
                        {formState.password.errorMessage}
                     </div>
                  </div>
               </div>
               <div className="form-row">
                  <div className="form-field">
                     <button className='form-button' type="submit">Login</button>
                  </div>
               </div>
               <div className="form-row">   
                   <div className="form-field">
                     <p>Don't have an account? <a href="/register">Register</a></p>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Login;
