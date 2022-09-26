import { Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import dropdown from "../assets/dropdown.png";
import cart from "../assets/cart.png";
const Header = () => {
  return (
    <>
      <header>
        <nav className="flex justify-between m-8 mx-28">
          <ul className="flex text-sm">
            <li className="mx-2 border-b-2 pb-4 text-green-400 font-semibold border-green-400 ">
              WOMEN
            </li>
            <li className="mx-2">MEN</li>
            <li className="mx-2">KIDS</li>
          </ul>
          <div>
            <img src={logo} />
          </div>
          <div className="flex">
            <div>
              <div className="flex w-full">
                <span>$</span>
                <div className="mt-2 m-1 cursor-pointer">
                  <img src={dropdown} className="w-full" />
                </div>
              </div>
              <ul className="fixed  p-2 text-sm">
                <li className="p-2">$ USD</li>
                <li className="p-2">€ EUR</li>
                <li className="p-2">¥ JPY</li>
              </ul>
            </div>
            <div className="m-1 cursor-pointer">
              <img src={cart} className="w-full" />
            </div>
          </div>
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default Header;
