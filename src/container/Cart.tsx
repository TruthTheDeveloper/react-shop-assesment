import { useState } from "react";
import CartItem from "../components/CartItems";
import type { RootState } from "../store";
import { useSelector } from "react-redux";
import { CartTypes } from "../tsd/product";
import { formatToCurrency } from "../utilities/priceFormatter";

const Cart = () => {
  const { cart, totalCost, tax, totalQuantity, currency } = useSelector(
    (state: RootState) => state.productReducer
  );

  return (
    <div className=" mx-28 mt-16">
      <h1 className="font-semibold text-xl mb-8 px-8">Cart</h1>

      {cart.map((el: CartTypes) => {
        const {
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
        } = el;
        return (
          <CartItem
            key={id}
            id={id}
            title={title}
            subtitle={subtitle}
            size={size}
            price={price}
            image={image}
            detail={detail}
            color={color}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
            qty={qty}
          />
        );
      })}

      <div className="text-sm px-8">
        <div>
          <span>Tax 21%</span>{" "}
          <span className="mx-3 font-bold">
            {`${currency}`}
            {`${tax}`}
          </span>
        </div>
        <div>
          <span>Quantity </span>{" "}
          <span className="mx-3 font-bold">
            {`${currency}`}
            {`${totalQuantity}`}
          </span>
        </div>
        <div>
          <span>Total </span>{" "}
          <span className="mx-3 font-bold">
            {`${currency}`}
            {`${formatToCurrency(totalCost)}`}
          </span>
        </div>
        <button className="px-24 text-sm py-2 bg-green-400 text-white my-4">
          ORDER
        </button>
      </div>
    </div>
  );
};
export default Cart;
