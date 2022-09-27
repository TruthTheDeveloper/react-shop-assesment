import { useState } from "react";
import CartItemCard from "./../components/CartItemCard";
import type { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { CartTypes } from "../tsd/product";

const Cart = () => {
  const cartItems = useSelector(
    (state: RootState) => state.productReducer.cart
  );
  const totalCost = useSelector(
    (state: RootState) => state.productReducer.totalCost
  );

  const tax = useSelector(
    (state: RootState) => state.productReducer.tax
  );
  console.log(cartItems);

  return (
    <div className=" mx-28 mt-16">
      <h1 className="font-semibold text-xl mb-8 px-8">Cart</h1>

      {cartItems.map((el: CartTypes) => {
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
          <CartItemCard
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
          <span>Tax 21%</span> <span className="mx-3 font-bold">$ `${tax}`</span>
        </div>
        <div>
          <span>Quantity </span> <span className="mx-3 font-bold">2</span>
        </div>
        <div>
          <span>Total </span> <span className="mx-3 font-bold">$`${totalCost}`</span>
        </div>
        <button className="px-24 text-sm py-2 bg-green-400 text-white my-4">
          ORDER
        </button>
      </div>
    </div>
  );
};
export default Cart;
