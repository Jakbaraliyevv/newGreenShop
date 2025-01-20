import { useParams } from "react-router-dom";
import { useQuerHandler } from "../../hooks/useQuery";
import type { DataTYpe } from "../../@types";
import ShopSWipper from "./shop-swipper";
import ShopInfo from "./shop-info";
import ShopDescription from "./shopDescription";

interface ParamsType {
  category?: string;
  id?: string;
}
function ShopComponents() {
  const { category, id }: ParamsType = useParams();
  const { data, isError, isLoading }: DataTYpe = useQuerHandler({
    pathname: "id_card",
    url: `/flower/category/${category}/${id}`,
  });

  return (
    <section className="w-[90%] m-auto mt-[20px]">
      <div className="grid grid-cols-2 gap-5">
        <ShopSWipper data={data} isLoading={isLoading} isError={isError} />
        <ShopInfo data={data} isLoading={isLoading} isError={isError} />
      </div>
      <ShopDescription data={data} isLoading={isLoading} isError={isError} />
    </section>
  );
}

export default ShopComponents;
