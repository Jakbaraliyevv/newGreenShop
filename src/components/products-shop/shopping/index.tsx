import { CartType } from "../../../@types";
import { useReduxSelector } from "../../../hooks/useRedux";
import ShoppingCard from "./card";

function Shopping() {
  const { shop } = useReduxSelector((state) => state.shopSlice);
  return (
    <div>
      <div className="flex items-center justify-between">
        <h3>Products</h3>
        <h3>Price</h3>
        <h3>Quantitiy</h3>
        <h3>Total</h3>
      </div>

      {shop?.map((value: CartType) => (
        <ShoppingCard key={value._id} {...value} />
      ))}
    </div>
  );
}

export default Shopping;
