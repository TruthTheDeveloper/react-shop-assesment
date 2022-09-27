import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../store/productSlice";
import type { RootState } from "../store";
import { addTocart, addToTotalCost, calculateTax } from "../store/productSlice";
import { useNavigate } from "react-router-dom";
// import { CartTypes } from "../tsd/product";

const ItemDetail = () => {
  const singleProduct = useSelector(
    (state: RootState) => state.productReducer.singleProduct
  );

  const [selectedSize, setSelectedSize] = useState<string>(
    singleProduct?.color[0] || "M"
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    singleProduct?.color[0] || "blue"
  );

  const dispatch = useDispatch();
  const { id } = useParams();
  const navigateTo = useNavigate();

  useEffect(() => {
    id && dispatch(getProduct(+id));
  }, []);

  useEffect(() => {
    singleProduct &&
      dispatch(addToTotalCost(singleProduct?.price)) &&
      dispatch(calculateTax());
  }, [singleProduct]);

  const addToCartHandler = () => {
    singleProduct &&
      dispatch(
        addTocart({
          id: singleProduct?.id,
          title: singleProduct?.title,
          subtitle: singleProduct?.subtitle,
          detail: singleProduct?.detail,
          price: singleProduct?.price,
          image: singleProduct?.image,
          color: singleProduct?.color,
          size: singleProduct?.size,
          selectedColor,
          selectedSize,
          qty: 1,
        })
      ) &&
      navigateTo("/cart");
  };

  return (
    <div className="flex mx-28 mt-16">
      <div className="flex basis-1/2 ">
        <div>
          <div className="w-24 mb-4 cursor-pointer">
            <img src={singleProduct?.image} />
          </div>
          <div className="w-24 my-4 cursor-pointer">
            <img src={singleProduct?.image} />
          </div>
          <div className="w-24 my-4 cursor-pointer">
            <img src={singleProduct?.image} />
          </div>
        </div>
        <div className="w-full ml-16">
          <img className="w-full" src={singleProduct?.image} />
        </div>
      </div>
      <div className=" basis-1/2 pl-56 ">
        <h1 className="font-semibold text-xl">{singleProduct?.title}</h1>
        <p className="font-thin mb-4">{singleProduct?.subtitle}</p>
        <div className="mb-4">
          <p className="text-sm font-bold py-1">SIZE</p>

          <div className="flex">
            {singleProduct?.size.map((el, index) =>
              el === selectedSize ? (
                <div
                  key={index}
                  onClick={() => setSelectedSize(el)}
                  className="px-3 py-1 border bg-black border-black mr-2 text-white cursor-pointer"
                >
                  {el}
                </div>
              ) : (
                <div
                  key={index}
                  onClick={() => setSelectedSize(el)}
                  className="px-3 py-1 border border-black mr-2 cursor-pointer"
                >
                  {el}
                </div>
              )
            )}
          </div>
        </div>
        <div className="mb-4">
          <p className="text-sm font-bold">COLOR</p>
          <div className="flex">
            {singleProduct?.color.map((el, index) => (
              <div
                key={index}
                onClick={() => setSelectedColor(el)}
                className="px-2 py-2 border border-black mr-2 cursor-pointer"
                style={{ background: `${el}` }}
              ></div>
            ))}
          </div>
        </div>
        <div className="mb-4 text-sm font-bold">
          <p>PRICE</p>
          <p>${singleProduct?.price}</p>
        </div>
        <button
          className="py-3 px-8 bg-green-400 text-white mb-4"
          onClick={addToCartHandler}
        >
          ADD TO CART
        </button>
        <div className="text-sm">
          <p>{singleProduct?.detail}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
