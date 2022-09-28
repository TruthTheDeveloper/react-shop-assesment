import { CartTypes } from "../tsd/product";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { formatToCurrency } from "../utilities/priceFormatter";

const CartModelItem = ({id,
  title,
  subtitle,
  size,
  price,
  image,
  detail,
  color,
  selectedColor,
  selectedSize,
  qty}:CartTypes) => {

  const [quantity, setQuantity] = useState<number>(qty);

  const singleProduct = useSelector(
    (state: RootState) => state.productReducer.singleProduct
  );

  const incrementQty = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQty = () => {
    quantity > 1 && setQuantity((prev) => prev - 1);
  };

  return (
    <div className="flex m-2">
      <div className=" text-xs w-full">
        <div className="my-1">
          <h1 className="font-thin text-sm">{title}</h1>
          <p className="font-thin mb-1">{subtitle}</p>
          <p className="mb-1 text-sm font-semibold">${formatToCurrency(price)}</p>
        </div>
        <div className="mb-1">
          <p className="text-sm font-thin">Size</p>
          <div className="flex">
          {size.map((el) =>
              selectedSize === el ? (
                <div className="px-2 py-1 border border-black text-white cursor-pointer bg-black mr-2">
                  {el}
                </div>
              ) : (
                <div className="px-2 py-1 border border-black cursor-pointer  mr-2">{el}</div>
              )
            )}
          </div>
        </div>
        <div className="mb-1">
          <p className="text-sm font-thin">Color</p>
          <div className="flex ">
          {color.map((el) => (
              <div
                className="px-2 py-2 border border-black mr-2 cursor-pointer"
                style={{ background: `${el}` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="mt-2">
          <div className="px-2 py-1 border border-black mx-2 cursor-pointer" onClick={incrementQty}>+</div>
          <div className="text-center my-7">{quantity}</div>
          <div className="px-2 py-1 border border-black mx-2 cursor-pointer" onClick={decrementQty}>-</div>
        </div>
        <div className="w-24  mt-6">
          <img
            className="h-32"
            src={
              image
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CartModelItem;
