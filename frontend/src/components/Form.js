import React, { useState } from "react";

const Form = () => {
  const [data, setDAta] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setDAta({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <Form data-testid="form">
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={data.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={data.password}
          onChange={handleChange}
        />
      </div>
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="confirmPassword"
        name="confirmPasword"
        id="confirmPassword"
        value={data.confirmPassword}
        onChange={handleChange}
      />
    </Form>
  );
};

export default Form;
