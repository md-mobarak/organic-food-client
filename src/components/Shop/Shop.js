import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [productFilter, setProductFilter] = useState(products)
    const [isProduct, setIsProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.reverse())
            })
    }, [])

    const fruitsProducts = (fruits, vegetables) => {
        const filterProduct = products.filter(elm => elm.category === fruits || vegetables)
        setIsProduct(filterProduct);
        setProductFilter()
        // console.log(filterProduct);
    }
    return (
        <div>
            <div className='my-10'>

                <h1 className='text-center font-bold text-5xl'>Fruits & Vegetables</h1>
                {/* <p className='text-center my-8 text-xl'>Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                <div className='flex justify-around mt-16'>
                    <button onClick={() => fruitsProducts('fruits')} className='bg-[#5EC49D] px-4 lg:px-8 lg:py-4 py-2 text-white font-semibold hover:bg-white hover:text-black hover:border-0'>FRUITS</button>
                    <button onClick={() => fruitsProducts('vegetables')} className='bg-[#5EC49D]  px-4 py-2 lg:px-8 lg:py-4 text-white font-semibold hover:bg-white hover:text-black hover:border-0'>VEGETABLES</button>
                    <button onClick={() => fruitsProducts(`fruits`, 'vegetables')} className='bg-[#5EC49D] px-4 py-2 lg:px-8 lg:py-4 text-white font-semibold hover:bg-white hover:text-black hover:border-0'>ALL ITEMS</button>
                </div>
            </div>
            <div className='flex justify-center items-center px-20'>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 grid-cols-1 '>
                    {
                        isProduct?.map(product => <div className='shadow-lg py-10'
                            key={product._id} >
                            <div className='flex justify-center'>
                                <img className=' rounded-3xl w-96 h-[230px]' src={product.image} alt="" />
                            </div>
                            <div className='flex justify-evenly mt-5 items-center bg-base-100  text-[#5EC49D]'>
                                <h1 className='text-xl font-bold my-3 '> Organic {product.name}</h1>
                                <p className='text-xl font-bold'>Price ${product.price}</p>
                            </div>
                            <div className='flex justify-around'>
                                <button className='btn btn-xs btn-accent bg-[#5EC49D] text-white border-0'>Add to card</button>
                                <button className='btn btn-accent btn-xs bg-[#5EC49D] text-white border-0'>BUY NOW</button>
                            </div>
                        </div>)
                    }
                    {
                        productFilter && products?.map(product => <div className='shadow-lg py-10'
                            key={product._id} >
                            <div className='flex justify-around'>
                                <img className=' rounded-3xl w-96 h-[230px]' src={product.image} alt="" />
                            </div>
                            <div className='flex justify-evenly mt-5 items-center bg-base-100 text-[#5EC49D]'>
                                <h1 className='text-xl font-bold my-3 '> Organic {product.name}</h1>
                                <p className='text-xl font-bold'>Price ${product.price}</p>
                            </div>
                            <div className='flex justify-around'>
                                <button className='btn btn-xs btn-accent bg-[#5EC49D] text-white border-0'>Add to card</button>
                                <button className='btn btn-accent btn-xs bg-[#5EC49D] text-white border-0'>BUY NOW</button>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;