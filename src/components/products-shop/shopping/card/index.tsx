import type { FC } from "react";
import { CartType } from "../../../../@types";

const ShoppingCard: FC<CartType> = ({ main_image, title, _id }) => {
  return (
    <div className="my-5 bg-[#eee]">
      <div className="flex items-center gap-4 p-4">
        <img className="w-[70px] h-[70px]" src={main_image} alt={title} />
        <div>
          <h3 className="text-16px font-medium">{title}</h3>
          <p className="text-14px font-normal pt-[10px] max-sm:text-[12px]">
            <span className="text-[#A5A5A5]">SKU :</span> {_id}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
