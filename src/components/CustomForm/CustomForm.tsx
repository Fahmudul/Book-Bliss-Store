import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
};
const CustomForm = ({ children, onSubmit }: TFormProps) => {
  const methods = useForm();
  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    methods.reset()
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default CustomForm;
