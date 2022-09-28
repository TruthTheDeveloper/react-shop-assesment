import { useState } from 'react';
import { Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import dropdown from "../assets/dropdown.png";
import cart from "../assets/cart.png";
import CartModel from '../components/CartModel';
//React router
import { NavLink } from "react-router-dom";

import { setShowModal, changeCurrency } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";


const Header = () => {

  const dispatch = useDispatch()
  const [scroll, setScroll] = useState<boolean>(false)
  const [showCurrency, setShowCurrency] = useState<boolean>(false)

  const {showModal, currency} = useSelector(
    (state: RootState) => state.productReducer
  );

  const showCart = () => {
    if(scroll){
      document.body.style.overflow = "visible"
      dispatch(setShowModal())
      setScroll(false)
      
    }else{
      document.body.style.overflow = "hidden"
      dispatch(setShowModal())
      setScroll(true)
    }
    
  }

  const modalHandler = () => {
    console.log('modal is open')
    // setScroll(true)
    document.body.style.overflow = "visible"; 
    dispatch(setShowModal())
    setScroll(false)

  }

  const swichCurrency = (cur:string) => {
    dispatch(changeCurrency(cur))
  }


  return (
    <>
      <header>
        <nav className="flex justify-between m-8 mx-28">
          <ul className="flex text-sm">
            <li className="mx-2 border-b-2 pb-4 text-green-400 font-semibold border-green-400 ">
              <NavLink to="/">WOMEN</NavLink>
            </li>
            <li className="mx-2">
              <NavLink to="/">MEN</NavLink>
            </li>
            <li className="mx-2">
              <NavLink to="/">KIDS</NavLink>
            </li>
          </ul>
          <div>
            <img src={logo} />
          </div>
          <div className="flex">
            <div>
              <div className="flex w-full" onClick={() => setShowCurrency(prev => !prev)}>
                <span>{currency}</span>
                <div className="mt-2 m-1 cursor-pointer">
                  <img src={dropdown} className="w-full" />
                </div>
              </div>
              {showCurrency && <ul className="fixed  p-2 text-sm">
                <li className="p-2 hover:bg-slate-200 cursor-pointer" onClick={() => swichCurrency('$')}>$ USD</li>
                <li className="p-2 hover:bg-slate-200 cursor-pointer" onClick={() => swichCurrency('€')}>€ EUR</li>
                <li className="p-2 hover:bg-slate-200 cursor-pointer" onClick={() => swichCurrency('¥')}>¥ JPY</li>
              </ul>}
            </div>
            <div className="m-1 cursor-pointer" onClick={showCart}>
              <img src={cart} className="w-full" />
            </div>
          </div>
        </nav>
      </header>
      <div className={`w-full h-screen bg-white  fixed top-16  ${scroll ? `visible` : 'hidden'} `}
      style={{ backgroundColor: `${!scroll ? `rgba(255, 0, 0, 0)` : `rgba(0, 0, 0, 0.774)`}`}}
      onClick={modalHandler}>
        
      </div>
      <Outlet />
      {showModal && <CartModel/>}
    </>
  );
};

export default Header;
