import CartModelItem from "./CartModelItem";
const CartModel = () => {

    return(
        <div className="w-full h-screen bg-white fixed top-16 overflow-hidden" style={{backgroundColor: "rgba(0, 0, 0, 0.774)"}}>
            <div className=" justify-between  bg-white absolute top-0 right-0 mr-24 overflow-scroll h-4/8">
                <h1 className="mx-2 text-sm mt-4"><span className="font-semibold ">My bag</span>3 Items</h1>
                <CartModelItem/>
                <CartModelItem/>
                {/* <CartModelItem/> */}
                <div className="mx-2 text-sm flex justify-between ">
                    <div>
                        <p className="font-semibold">Total</p>
                        <button className="px-6 py-2 my-4 border-2 border-black text-sm">VIEW BAG</button>
                    </div>
                    <div>
                        <p className="text-right font-semibold">$200.00</p>
                        <button className="px-6 py-2 my-4 bg-green-400 text-white text-sm">CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartModel;