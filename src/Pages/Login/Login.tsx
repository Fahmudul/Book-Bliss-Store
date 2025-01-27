import React from "react";
import CustomForm from "../../components/CustomForm/CustomForm";
import CustomInput from "../../components/CustomForm/CustomInput";
import { Button } from "antd";
import { useLoginMutation } from "../../Redux/Features/Auth/authApi";
import { useDispatch } from "react-redux";
import { getUser, setUser } from "../../Redux/Features/Auth/authSlice";
import { verifyToken } from "../../Utils/verifyToken";
import { useNavigate, useNavigation } from "react-router-dom";
import { useAppSelector } from "../../Redux/hook";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login] = useLoginMutation(undefined);
  const user = useAppSelector(getUser);
  console.log(user);
  const handleSubmit = async (data) => {
    const { data: userData } = await login(data);
    const user = verifyToken(userData?.data?.accessToken);
    console.log(user);
    dispatch(setUser({ user, token: userData?.data?.accessToken }));
    if (user?.role) {
      navigate(`/${user?.role}/dashboard`);
    }
    // console.log(res);
    console.log(userData);
  };
  return (
    <div>
      <CustomForm onSubmit={handleSubmit}>
        <CustomInput name="email" label="Email" type="email" />
        <CustomInput name="password" label="Password" type="password" />
        <Button htmlType="submit">Login</Button>
      </CustomForm>
    </div>
  );
};

export default Login;
