import { Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import dropdown from "../assets/dropdown.png";
import cart from "../assets/cart.png";
const Header = () => {

    return(
        <>
        <header>
            <nav>
                <ul>
                    <li>WOMEN</li>
                    <li>MEN</li>
                    <li>KIDS</li>
                </ul>
                <div>
                    <img src={logo}/>
                </div>
                <div>
                    <div>
                        $ <img src={dropdown} />
                            <ul>
                                <li>$ USD</li>
                                <li>€ EUR</li>
                                <li>¥ JPY</li>
                            </ul>
                            <img src={cart} />
                    </div>
                </div>
            </nav>
        </header>

        <Outlet/>
        </>

    )

}

export default Header;