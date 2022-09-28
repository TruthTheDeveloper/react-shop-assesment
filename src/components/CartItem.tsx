import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import { formatToCurrency } from "../utilities/priceFormatter";

interface props {
  id: number;
  img: string;
  title: string;
  price: number;
}

const CartItem = ({ id, img, title, price }: props) => {
  const navigateTo = useNavigate();
  const currency = useSelector(
    (state: RootState) => state.productReducer.currency
  );

  const navigate = () => {
    navigateTo(`/${id}`);
  };

  return (
    <div
      className="w-64 mt-12 mx-auto shadow-md p-5 cursor-pointer"
      onClick={navigate}
    >
      <img src={img} />
      <p className="p-2">{title}</p>
      <p className="p-2 font-semibold">
        {`${currency}`}
        {formatToCurrency(price)}
      </p>
    </div>
  );
};

export default CartItem;
