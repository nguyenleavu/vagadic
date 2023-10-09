import Breadcrumb from "@/components/Breadcrumb";
import Loading from "@/components/Loading";
import DashboardLayout from "@/layouts/DashboardLayout";
import { useAppDispatch } from "@/redux/hook";
import { getProductThunk } from "@/redux/product/thunks";
import { Product as ProductType } from "@/type/product";
import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Info from "./Info";
import Related from "./Related";
import Slider from "./Slider";

const Product = () => {
  const [product, setProduct] = useState<ProductType | null>(null);
  const dispatch = useAppDispatch();

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      if (id) {
        const data = await dispatch(getProductThunk(id));
        if (getProductThunk.fulfilled.match(data)) setProduct(data.payload);
      }
    })();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [id, dispatch]);

  return (
    <DashboardLayout title="PRODUCT DETAIL">
      {!isEmpty(product) ? (
        <>
          <Breadcrumb router="Organic Tomatoes" />
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-[30px]">
            <Slider images={product.images} />
            <Info product={product} />
          </div>
          <Related />
        </>
      ) : (
        <Loading />
      )}
    </DashboardLayout>
  );
};

export default Product;
