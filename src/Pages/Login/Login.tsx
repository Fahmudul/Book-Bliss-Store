import React from "react";
import CustomForm from "../../components/CustomForm/CustomForm";
import CustomInput from "../../components/CustomForm/CustomInput";
import { Button } from "antd";

const Login = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <CustomForm onSubmit={handleSubmit}>
        <CustomInput name="email" label="Email" type="email" />
        <Button htmlType="submit">Login</Button>
      </CustomForm>
    </div>
  );
};

export default Login;
