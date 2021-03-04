import React from "react";
import { NavLink } from "react-router-dom";

import {
  authRoutes,
  Email,
  Password,
  ResetButton,
  SignInForm,
  SubmitButton,
} from "react-serverless-auth";

export default function (props) {
  return (
    <div>
      <p>Entrar</p>
      <SignInForm {...props}>
        <Email autoComplete={"email"} />
        <Password autoComplete={"new-password"} />
        <NavLink to={authRoutes.reset}>Forgotten Password?</NavLink>
        <SubmitButton>Sign In</SubmitButton>
        <ResetButton>Cancel</ResetButton>
      </SignInForm>
    </div>
  );
}
