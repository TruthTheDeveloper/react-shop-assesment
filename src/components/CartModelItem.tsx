const CartModelItem = () => {

    return(
        <div className="flex m-2">
            <div className=" text-xs ">
                <div className="my-1">
                    <h1 className="font-thin text-sm">Apollo</h1>
                    <p className="font-thin mb-1">Running Short</p>
                    <p className="mb-1 text-sm font-semibold">$50,000</p>
                </div>
                <div className="mb-1">
                    <p className="text-sm font-thin">Size</p>
                    <div className="flex">
                        <div className="px-2 py-1 border border-black mr-1">XS</div>
                        <div className="px-2 py-1 border border-black mx-1">S</div>
                        <div className="px-2 py-1 border border-black mx-1">M</div>
                        <div className="px-2 py-1 border border-black mx-1">L</div>
                    </div>
                </div>
                <div className="mb-1">
                    <p className="text-sm font-thin">Color</p>
                    <div className="flex ">
                        <div className="px-2 py-2 border border-black mr-2" style={{background:'#0F6450'}}></div>
                        <div className="px-2 py-2 border border-black mr-2 bg-black"></div>
                        <div className="px-2 py-2 border border-black mr-2" style={{background:'#D3D2D5'}}></div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="mt-2">
                    <div className="px-2 py-1 border border-black mx-2">+</div>
                    <div className="text-center my-7">1</div>
                    <div className="px-2 py-1 border border-black mx-2">-</div>
                </div>
                <div className='w-24  mt-6'>
                    <img className="h-32" src={"https://firebasestorage.googleapis.com/v0/b/naruto-208e5.appspot.com/o/Image.png?alt=media&token=c672e47b-e2e8-41a4-8ea4-25b9e5bd91bf"}/>
                </div>
            </div>
        </div>
    )
}

export default CartModelItem;