import React, { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';
import './FruitsVegetables.css'

const FruitsVegetables = () => {
    const [products, setProducts] = useState([])
    const [isProduct, setIsProduct] = useState(true)
    const [isHover, setIsHover] = useState(false);
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data.reverse())
            })
    }, [])

    const fruitsProducts = (fruits) => {

    }
    return (
        <div>
            <div className='my-10'>
                <h1 className='text-center font-bold text-5xl'>Fruits & Vegetables</h1>
                <p className='text-center my-8 text-xl'>Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className='flex justify-around mt-16'>
                    <button onClick={() => fruitsProducts()} className='bg-[#5EC49D] px-4 lg:px-8 lg:py-4 py-2 text-white font-semibold hover:bg-white hover:text-black hover:border'>FRUITS</button>
                    <button className='bg-[#5EC49D]  px-4 py-2 lg:px-8 lg:py-4 text-white font-semibold hover:bg-white hover:text-black hover:border-2'>VEGETABLES</button>
                    <button className='bg-[#5EC49D] px-4 py-2 lg:px-8 lg:py-4 text-white font-semibold hover:bg-white hover:text-black hover:border-2'>ALL ITEMS</button>
                </div>
            </div>
            <div className='flex justify-center items-center px-20'>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 grid-cols-1 '>
                    {
                        isProduct && products?.map(product => <div className='shadow-lg'
                        >
                            <div className='flex justify-center'>
                                <img className='w- rounded-3xl h-[300px]' src={product.image} alt="" />
                            </div>
                            <div className='flex justify-evenly mt-5 items-center bg-base-100 hover:bg-[#5EC49D] hover:text-white text-[#5EC49D]'>
                                <h1 className='text-xl font-bold my-3 '> Organic {product.name}</h1>
                                <p className='text-xl font-bold'>Price ${product.price}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FruitsVegetables;