import CustomForm from "../../components/CustomForm/CustomForm";
import { Button } from "antd";
import CustomInput from "../../components/CustomForm/CustomInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomSelect from "../../components/CustomForm/CustomSelect";
import { CategoryOptions } from "../../Constants/constants";
import { useUpdateBookDataMutation } from "../../Redux/Features/Admin/UserManagementApi/bookManagement.api";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "sonner";

const UpdateBook = () => {
  const { id } = useParams();
  const [updateBook] = useUpdateBookDataMutation(undefined);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Updating book...");
    console.log(data);
    // const custommizedData = {
    //   title: "The Great Gatsby",
    //   description: "A story of the Great Gatsby",
    //   price: 100,
    //   quantity: 10,
    //   author: "F. Scott Fitzgerald",
    //   category: "Fiction",
    // };
    // const { data: response } = await updateBook({ id, custommizedData });
    try {
      const { data: response } = await updateBook({ id, data });
      if (response?.data?.success) {
        toast.success("Book updated successfully", { id: toastId });
      } else {
        toast.error("Failed to update book", { id: toastId });
      }
      // console.log(response);
    } catch (error) {
      toast.error("Failed to update book", { id: toastId });
      console.log(error);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-center items-center   p-6"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Update Book Information📚
        </h2>
        <CustomForm onSubmit={onSubmit} className="space-y-6">
          <CustomInput name="title" placeholderTitle="Title" type="text" />
          <CustomInput
            name="description"
            placeholderTitle="Description"
            type="text"
          />
          <CustomInput name="price" placeholderTitle="Price" type="number" />
          <CustomInput
            name="quantity"
            placeholderTitle="Quantity"
            type="number"
          />
          <CustomInput name="author" placeholderTitle="Author" type="text" />
          <CustomSelect
            name="category"
            label="Category"
            options={CategoryOptions}
          />

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              htmlType="submit"
              className="custom-btn"
              style={{ width: "100%" }}
            >
              Update Book
            </Button>
          </motion.div>
        </CustomForm>
      </motion.div>
    </motion.div>
  );
};

export default UpdateBook;
