import CartItem from "../components/CartItem";
import type { RootState } from "../store";
import { useSelector } from "react-redux";
import { productItemType } from "../tsd/product";
import { checkIfProductInCart } from "../store/productSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const LandingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkIfProductInCart());
  }, [dispatch]);

  const allProduct = useSelector(
    (state: RootState) => state.productReducer.allProduct
  );

  return (
    <>
      <section className="m-8 bg-white  ">
        <h1 className="text-2xl ml-24">Category name</h1>

        <div className="grid grid-cols-3">
          {allProduct.map((el: productItemType, _index: number) => {
            const { title, image, price, id, inCart, outOfStock } = el;

            return (
              <CartItem
                key={id}
                id={id}
                title={title}
                img={image}
                price={price}
                inCart={inCart}
                outOfStock={outOfStock}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default LandingPage;
