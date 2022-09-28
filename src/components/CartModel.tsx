import CartModelItem from "./CartModelItem";
import type { RootState } from "../store";
import { useSelector } from "react-redux";
import { CartTypes } from "../tsd/product";
import { useNavigate } from "react-router-dom";
import { formatToCurrency } from "../utilities/priceFormatter";
import PaymentWithPaystack from "./paymentWithPaystack";
import { PaymentRef } from "../tsd/product";

const CartModel = () => {

  const DROPDOWN_TYPE = 'drop'
  const navigateTo = useNavigate();

  const { cart, totalCost, currency } = useSelector(
    (state: RootState) => state.productReducer
  );

  const viewBackButtonHandler = () => {
    navigateTo("/cart");
  };

  const paymentResponse = (ref: PaymentRef) => {
    console.log(ref);
  };

  return (
    <div>
      <div className=" justify-between  bg-white absolute top-16 right-0 mr-24 overflow-scroll h-[30rem]">
        <h1 className="mx-2 text-sm mt-4">
          <span className="font-semibold mr-2">My bag</span>
          {cart.length} Items
        </h1>
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
            <CartModelItem
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
        <div className="mx-2 text-sm flex justify-between ">
          <div>
            <p className="font-semibold">Total</p>
            <button
              className="px-6 mx-1 py-2 my-4 border-2 border-black text-sm"
              onClick={viewBackButtonHandler}
            >
              VIEW BAG
            </button>
          </div>
          <div>
            <p className="text-right font-semibold">
              {`${currency}`}
              {`${formatToCurrency(totalCost)}`}
            </p>
            <PaymentWithPaystack
              amount={totalCost}
              paymentResponse={paymentResponse}
              btn={DROPDOWN_TYPE}
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModel;
