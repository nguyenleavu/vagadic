import Button from "@/components/Button";
import Input from "@/components/Input";
import { useOutsideClick } from "@/hooks/useOutsideClick ";
import { useAppDispatch } from "@/redux/hook";
import { addProductThunk } from "@/redux/product/thunks";
import { Product } from "@/type/product";
import { getFormikErrorField } from "@/utils/helper";
import { productSchema } from "@/utils/validations/productSchema";
import { useFormik } from "formik";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";

interface AddProductType {
  name: string;
  description: string;
  categories: string[] | string;
  price: number;
  image: string;
  images: string[];
}

const AddProduct = () => {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation("profile");

  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      categories: "",
      image: "",
      images: [],
      price: Number(""),
    },
    validationSchema: productSchema,
    onSubmit: async (values: AddProductType) => {
      const result: Omit<Product, "id"> = {
        ...values,
        categories: [values.categories as string],
        image: "",
        images: [],
        price: Number(values.price),
      };
      dispatch(addProductThunk(result));
      formik.resetForm();
      setOpen(false);
    },
  });

  const setFieldValue = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;

    formik.setFieldValue(name, value);
  };

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  const handleOpenModal = () => setOpen(true);

  const handleCloseModal = () => {
    setOpen(false);
    formik.resetForm();
  };

  return (
    <div>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center justify-center"
        onClick={handleOpenModal}
      >
        <i className="fa-regular fa-circle-plus text-xl"></i>
        <span className="ml-2">{t("add product")}</span>
      </button>

      {open &&
        createPortal(
          <div className="fixed inset-0 bg-[#00000070] flex items-center justify-center">
            <div
              ref={ref}
              className="h-full w-full mb:h-5/6 mb:w-[700px] bg-white rounded"
            >
              <form
                className="h-full w-full relative"
                onSubmit={formik.handleSubmit}
              >
                <div className="pb-5 border-b border-gray-300 p-5">
                  <h2 className="text-2xl font-medium uppercase">
                    {t("add product")}
                  </h2>
                </div>
                <div className="p-5">
                  <Input
                    label={t("product name")}
                    placeholder={t("product name")}
                    name="name"
                    onChange={setFieldValue}
                    error={getFormikErrorField(formik, "name")}
                  />
                  <Input
                    label={t("categories")}
                    placeholder={t("categories")}
                    name="categories"
                    onChange={setFieldValue}
                    error={getFormikErrorField(formik, "categories")}
                  />
                  <Input
                    label={t("price")}
                    placeholder={t("price")}
                    name="price"
                    onChange={setFieldValue}
                    error={getFormikErrorField(formik, "price")}
                  />
                  <div>
                    <p className="mb-2 font-medium text-gray66">
                      {t("description")}
                    </p>
                    <textarea
                      name="description"
                      onChange={setFieldValue}
                      className="block h-36 p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none"
                      placeholder={t("write")}
                    />
                    <p className="text-red-500 my-2 ml-1">
                      {getFormikErrorField(formik, "description")}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-5 right-5 flex items-center justify-end">
                  <div className="flex items-center gap-4">
                    <Button onClick={handleCloseModal}>{t("cancel")}</Button>
                    <Button type="submit">{t("add")}</Button>
                  </div>
                </div>
              </form>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default AddProduct;
