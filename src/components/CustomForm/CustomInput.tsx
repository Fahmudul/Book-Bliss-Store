import { Input } from "antd";
import { Controller } from "react-hook-form";

const CustomInput = ({
  name,
  label,
  type,
}: {
  name: string;
  label: string;
  type: string;
}) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <>
          <label htmlFor={name}>{label}</label>
          <Input {...field} placeholder={`Enter ${label}`} type={type} />
        </>
      )}
    />
  );
};

export default CustomInput;
