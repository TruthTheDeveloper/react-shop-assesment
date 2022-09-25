import CartItemCard from './../components/CartItemCard';
const Cart = () => {

    return(
        <div className=" mx-28 mt-16">
            <h1 className="font-semibold text-xl mb-8">Cart</h1>
            
            <CartItemCard/>
            <CartItemCard/>
            <div className="text-sm">
                <div><span>Tax 21%</span> <span className="mx-3 font-bold">$42.00</span></div>
                <div><span>Quantity </span> <span className="mx-3 font-bold">2</span></div>
                <div><span>Total </span> <span className="mx-3 font-bold">$200.00</span></div>
                <button className="px-24 text-sm py-2 bg-green-400 text-white my-4">ORDER</button>
            </div>
        </div>
    )
}
export default Cart;