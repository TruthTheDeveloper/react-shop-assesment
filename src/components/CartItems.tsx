import { CartTypes } from "../tsd/product";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  decrementTotalQuantity,
  incrementTotalQuantity,
  setTotalQuantityDefaulltValue,
} from "../store/productSlice";
import { formatToCurrency } from "../utilities/priceFormatter";

const CartItems = ({
  id,
  title,
  subtitle,
  size,
  price,
  image,
  detail,
  color,
  selectedColor,
  selectedSize,
  qty,
}: CartTypes) => {
  const [quantity, setQuantity] = useState<number>(qty);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTotalQuantityDefaulltValue());
  }, []);

  const incrementQty = () => {
    dispatch(incrementTotalQuantity(1));
    setQuantity((prev) => prev + 1);
  };

  const decrementQty = () => {
    quantity > 1 &&
      dispatch(decrementTotalQuantity(1)) &&
      setQuantity((prev) => prev - 1);
  };

  return (
    <div className="flex justify-between my-8 shadow-md px-8">
      <div className="">
        <h1 className="font-semibold text-xl">{title}</h1>
        <p className="font-thin mb-4">{subtitle}</p>
        <p className="mb-4 text-sm font-bold">${formatToCurrency(price)}</p>
        <div className="mb-4">
          <p className="text-sm font-bold">SIZE</p>
          <div className="flex">
            {size.map((el, indx) =>
              selectedSize === el ? (
                <div
                  key={indx}
                  className="px-2 py-1 border border-black text-white bg-black mr-2"
                >
                  {el}
                </div>
              ) : (
                <div key={indx} className="px-2 py-1 border border-black  mr-2">
                  {el}
                </div>
              )
            )}
          </div>
        </div>
        <div className="mb-4">
          <p className="text-sm font-bold">COLOR</p>
          <div className="flex">
            {color.map((el, indx) => (
              <div
                key={indx}
                className="px-2 py-2 border border-black mr-2"
                style={{ background: `${el}` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex ">
        <div>
          <div
            className="px-3 py-1 border border-black mx-2 cursor-pointer"
            onClick={incrementQty}
          >
            +
          </div>
          <div className="text-center my-14">{quantity}</div>
          <div
            className="px-3 py-1 border border-black mx-2 cursor-pointer"
            onClick={decrementQty}
          >
            -
          </div>
        </div>
        <div className="w-56">
          <img src={image} />
        </div>
      </div>
    </div>
  );
};

export default CartItems;
