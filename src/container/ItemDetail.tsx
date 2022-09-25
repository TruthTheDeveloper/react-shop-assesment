const ItemDetail = () => {

    return(
        <div className="flex mx-28 mt-16">
            <div className="flex basis-1/2 ">
                <div>
                    <div className='w-24 mb-4'>
                        <img src={"https://firebasestorage.googleapis.com/v0/b/naruto-208e5.appspot.com/o/Image.png?alt=media&token=c672e47b-e2e8-41a4-8ea4-25b9e5bd91bf"}/>
                    </div>
                    <div className='w-24 my-4'>
                        <img src={"https://firebasestorage.googleapis.com/v0/b/naruto-208e5.appspot.com/o/Image.png?alt=media&token=c672e47b-e2e8-41a4-8ea4-25b9e5bd91bf"}/>
                    </div>
                    <div className='w-24 my-4'>
                        <img src={"https://firebasestorage.googleapis.com/v0/b/naruto-208e5.appspot.com/o/Image.png?alt=media&token=c672e47b-e2e8-41a4-8ea4-25b9e5bd91bf"}/>
                    </div>
                </div>
                <div className="w-full ml-16">
                    <img className="w-full"  src={"https://firebasestorage.googleapis.com/v0/b/naruto-208e5.appspot.com/o/Image.png?alt=media&token=c672e47b-e2e8-41a4-8ea4-25b9e5bd91bf"}/>
                </div>
            </div>
            <div className=" basis-1/2 pl-56 ">
                <h1 className="font-semibold text-xl">Apollo</h1>
                <p className="font-thin mb-4">Running Short</p>
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
                <div className="mb-4 text-sm font-bold">
                    <p>PRICE</p>
                    <p>$50,000</p>
                </div>
                <button className="py-3 px-8 bg-green-400 text-white mb-4">ADD TO CART</button>
                <div className="text-sm">
                    <p>Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;