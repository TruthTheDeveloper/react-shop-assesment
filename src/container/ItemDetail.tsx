import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct } from "../store/productSlice";
import type { RootState } from '../store';

const ItemDetail = () => {

  const dispatch = useDispatch()
  const {id}  = useParams()

  


  const singleProduct  = useSelector((state: RootState) => state.productReducer.singleProduct)

  

  useEffect(() => {
    id && dispatch(getProduct(+id)) 
  },[])


  return (
    <div className="flex mx-28 mt-16">
      <div className="flex basis-1/2 ">
        <div>
          <div className="w-24 mb-4">
            <img
              src={
                singleProduct?.image
              }
            />
          </div>
          <div className="w-24 my-4">
            <img
              src={
                singleProduct?.image
              }
            />
          </div>
          <div className="w-24 my-4">
            <img
              src={
                singleProduct?.image
              }
            />
          </div>
        </div>
        <div className="w-full ml-16">
          <img
            className="w-full"
            src={
              singleProduct?.image
            }
          />
        </div>
      </div>
      <div className=" basis-1/2 pl-56 ">
        <h1 className="font-semibold text-xl">{singleProduct?.title}</h1>
        <p className="font-thin mb-4">{singleProduct?.subtitle}</p>
        <div className="mb-4">
          <p className="text-sm font-bold">SIZE</p>
          <div className="flex">
            <div className="px-2 py-1 border border-black mr-2">XS</div>
            <div className="px-3 py-1 border border-black mx-2">S</div>
            <div className="px-3 py-1 border border-black mx-2">M</div>
            <div className="px-3 py-1 border border-black mx-2">L</div>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-sm font-bold">COLOR</p>
          <div className="flex">
            <div
              className="px-2 py-2 border border-black mr-2"
              style={{ background: "#0F6450" }}
            ></div>
            <div className="px-2 py-2 border border-black mr-2 bg-black"></div>
            <div
              className="px-2 py-2 border border-black mr-2"
              style={{ background: "#D3D2D5" }}
            ></div>
          </div>
        </div>
        <div className="mb-4 text-sm font-bold">
          <p>PRICE</p>
          <p>${singleProduct?.price}</p>
        </div>
        <button className="py-3 px-8 bg-green-400 text-white mb-4">
          ADD TO CART
        </button>
        <div className="text-sm">
          <p>
            {singleProduct?.detail}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
