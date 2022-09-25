interface props {
  img: string;
  title: string;
  price: string;
}
const CartItem = ({ img, title, price }: props) => {
  return (
    <div className="w-64 mt-12 mx-auto shadow-md p-5">
      <img src={img} />
      <p className="p-2">{title}</p>
      <p className="p-2">{price}</p>
    </div>
  );
};

export default CartItem;
