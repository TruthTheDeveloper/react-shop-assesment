import CartItem from "../components/CartItem";
import CartModel from "../components/CartModel";
import type { RootState } from "../store";
import { useSelector } from "react-redux";
import { productItemType } from "../tsd/product";

const LandingPage = () => {
  const { allProduct, showModal } = useSelector(
    (state: RootState) => state.productReducer
  );
  return (
    <>
      <section className="m-8 bg-white  ">
        <h1 className="text-2xl ml-24">Category name</h1>

        <div className="grid grid-cols-3">
          {allProduct.map((el: productItemType, _index: any) => {
            const { title, image, price, id } = el;

            return (
              <CartItem
                key={id}
                id={id}
                title={title}
                img={image}
                price={price}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default LandingPage;
