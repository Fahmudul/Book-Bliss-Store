import CustomForm from "../../components/CustomForm/CustomForm";
import { Button } from "antd";
import CustomInput from "../../components/CustomForm/CustomInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomSelect from "../../components/CustomForm/CustomSelect";
import { CategoryOptions } from "../../Constants/constants";
import {
  usePublishBookMutation,
  useUpdateBookDataMutation,
} from "../../Redux/Features/Admin/UserManagementApi/bookManagement.api";
import { useParams, useSearchParams } from "react-router-dom";

const UpdateBook = () => {
  const { id } = useParams();
  const [updateBook] = useUpdateBookDataMutation(undefined);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const custommizedData = {
      title: "The Great Gatsby",
      description: "A story of the Great Gatsby",
      price: 100,
      quantity: 10,
      author: "F. Scott Fitzgerald",
      category: "Fiction",
    };
    const { data: response } = await updateBook({ id, custommizedData });
    // const { data: response } = await publishBook(data);
    console.log(response);
  };
  return (
    <div>
      <CustomForm onSubmit={onSubmit}>
        <CustomInput name="title" label="Title" type="text" />
        <CustomInput name="description" label="Description" type="text" />
        <CustomInput name="price" label="Price" type="number" />
        <CustomInput name="quantity" label="quantity" type="number" />
        <CustomInput name="author" label="Author" type="string" />
        <CustomSelect
          name="category"
          label="Category"
          options={CategoryOptions}
        />
        <Button htmlType="submit">Update Book</Button>
      </CustomForm>
    </div>
  );
};

export default UpdateBook;
