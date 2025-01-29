import React from "react";
import CustomForm from "../../components/CustomForm/CustomForm";
import CustomInput from "../../components/CustomForm/CustomInput";
import { Button } from "antd";

const Register = () => {
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <CustomForm onSubmit={onSubmit}>
      <CustomInput name="email" label="Email" type="email" />
      <CustomInput name="password" label="Password" type="password" />
      <CustomInput
        name="confirmPassword"
        label="Confirm Password"
        type="password"
      />
      <Button htmlType="submit">Register</Button>
    </CustomForm>
  );
};

export default Register;
