import Button from "@/components/Button";
import Input from "@/components/Input";
import { useOutsideClick } from "@/hooks/useOutsideClick ";
import { useAppDispatch } from "@/redux/hook";
import { getProductThunk, updateProductThunk } from "@/redux/product/thunks";
import { Product } from "@/type/product";
import { getFormikErrorField } from "@/utils/helper";
import { productSchema } from "@/utils/validations/productSchema";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";

interface EditProps {
  product: Product;
}

interface EditProductType {
  name: string;
  description: string;
  categories: string;
  price: number;
  image?: string;
  images?: string[];
}

const EditProduct = ({ product }: EditProps) => {
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();

  const { t } = useTranslation("profile");

  const formikUpdate = useFormik({
    initialValues: {
      name: product.name,
      description: product.description,
      categories: product.categories[0],
      price: product.price,
    },
    enableReinitialize: true,
    validationSchema: productSchema,

    onSubmit: async (values: EditProductType) => {
      const result: Product = {
        ...product,
        ...values,
        categories: [values.categories as string],
      };
      dispatch(updateProductThunk(result));
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

    formikUpdate.setFieldValue(name, value);
  };

  useEffect(() => {
    dispatch(getProductThunk(product.id));
  }, [product, dispatch]);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  const handleOpenModal = () => setOpen(true);

  const handleCloseModal = () => {
    setOpen(false);
    formikUpdate.resetForm();
  };

  return (
    <div>
      <button onClick={handleOpenModal}>
        <i className="fa-regular fa-pen-to-square text-2xl text-blue-500 mr-10"></i>
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
                onSubmit={formikUpdate.handleSubmit}
              >
                <div className="pb-5 border-b border-gray-300 mb-4 p-5">
                  <h2 className="text-2xl font-medium uppercase">
                    {t("edit product")}
                  </h2>
                </div>
                <div className="p-5">
                  <Input
                    value={formikUpdate.values.name}
                    label={t("product name")}
                    placeholder={t("product name")}
                    name="name"
                    onChange={setFieldValue}
                    error={getFormikErrorField(formikUpdate, "name")}
                  />
                  <Input
                    value={formikUpdate.values.categories}
                    label={t("categories")}
                    placeholder={t("categories")}
                    name="categories"
                    onChange={setFieldValue}
                    error={getFormikErrorField(formikUpdate, "categories")}
                  />
                  <Input
                    value={formikUpdate.values.price}
                    label={t("price")}
                    placeholder={t("price")}
                    name="price"
                    onChange={setFieldValue}
                    error={getFormikErrorField(formikUpdate, "price")}
                  />
                  <div>
                    <p className="mb-2 font-medium text-gray66">
                      {t("description")}
                    </p>
                    <textarea
                      value={formikUpdate.values.description}
                      name="description"
                      onChange={setFieldValue}
                      className="block h-36 p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none"
                      placeholder={t("write")}
                    />
                  </div>
                </div>
                <div className="absolute bottom-5 right-5 flex items-center justify-end">
                  <div className="flex items-center gap-4">
                    <Button onClick={handleCloseModal}>{t("cancel")}</Button>
                    <Button type="submit">{t("save")}</Button>
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

export default EditProduct;
