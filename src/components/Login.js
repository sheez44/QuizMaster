import React from "react";

const Login = () => (
  <form>
    <fieldset>
      <label for="userName">Username: </label>
      <input type="text" id="userName" />
      <label for="password">Password: </label>
      <input type="password" id="password" />
    </fieldset>
  </form>
);

export default Login;
