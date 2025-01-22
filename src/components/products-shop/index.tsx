import BradGramp from "../../generic/bardgram";
import CardTotal from "./card-total";
import Shopping from "./shopping";

function ProductsShop() {
  return (
    <section className="w-[90%] m-auto">
      <BradGramp pathTitle="Shopping card" />
      <div className="grid grid-cols-[3fr_1fr] my-9">
        <Shopping />
        <CardTotal />
      </div>
    </section>
  );
}

export default ProductsShop;
