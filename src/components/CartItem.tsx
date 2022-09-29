import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import cartImage from "../assets/cartImageIcon.svg";

import { formatToCurrency } from "../utilities/priceFormatter";

interface props {
  id: number;
  img: string;
  title: string;
  price: number;
  inCart: boolean;
  outOfStock: boolean;
}

const CartItem = ({ id, img, title, price, inCart, outOfStock }: props) => {
  const navigateTo = useNavigate();

  const currency = useSelector(
    (state: RootState) => state.productReducer.currency
  );

  const navigate = () => {
    navigateTo(`/${id}`);
  };

  const render = () => {
    if (inCart) {
      return (
        <div
          className="w-64 mt-12 mx-auto shadow-md p-5 relative cursor-not-allowed"
        >
          <div className="">
            <img src={img} alt="" />
          </div>

          <div className="relative">
            <div className="bg-green-400 w-[40px] grid place-items-center h-[40px] rounded-[40px] absolute top-[-10px] right-5">
              <img src={cartImage} alt="" />
            </div>
            <p className="p-2">{title}</p>
            <p className="p-2 font-semibold">
              {`${currency}`}
              {formatToCurrency(price)}
            </p>
          </div>
        </div>
      );
    } else if (outOfStock) {
      return (
        <div
          className="w-64 mt-12 mx-auto shadow-md p-5 relative opacity-40 cursor-not-allowed"
        >
          <div className="">
            <img src={img} alt="" />
            <p className="absolute top-28 left-20  right-0 bottom-0">
              Out of stock
            </p>
          </div>

          <div className="">
            <p className="p-2">{title}</p>
            <p className="p-2 font-semibold">
              {`${currency}`}
              {formatToCurrency(price)}
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="w-64 mt-12 mx-auto shadow-md p-5 relative cursor-pointer"
          onClick={navigate}
        >
          <div className="">
            <img src={img} alt="" />
          </div>

          <div className="">
            <p className="p-2">{title}</p>
            <p className="p-2 font-semibold">
              {`${currency}`}
              {formatToCurrency(price)}
            </p>
          </div>
        </div>
      );
    }
  };

  return render();
};

export default CartItem;
