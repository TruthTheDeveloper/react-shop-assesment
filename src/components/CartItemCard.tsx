const CartItemCard = () => {

    return (
        <div className="flex justify-between my-8">
                <div className="">
                    <h1 className="font-semibold text-xl">Apollo</h1>
                    <p className="font-thin mb-4">Running Short</p>
                    <p className="mb-4 text-sm font-bold">$50,000</p>
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
                            <div className="px-2 py-2 border border-black mr-2" style={{background:'#0F6450'}}></div>
                            <div className="px-2 py-2 border border-black mr-2 bg-black"></div>
                            <div className="px-2 py-2 border border-black mr-2" style={{background:'#D3D2D5'}}></div>
                        </div>
                    </div>
                </div>
                <div className="flex ">
                    <div>
                        <div className="px-3 py-1 border border-black mx-2">+</div>
                        <div className="text-center my-14">1</div>
                        <div className="px-3 py-1 border border-black mx-2">-</div>
                    </div>
                    <div className='w-56'>
                        <img src={"https://firebasestorage.googleapis.com/v0/b/naruto-208e5.appspot.com/o/Image.png?alt=media&token=c672e47b-e2e8-41a4-8ea4-25b9e5bd91bf"}/>
                    </div>
                </div>
            </div>
    )
}

export default CartItemCard;