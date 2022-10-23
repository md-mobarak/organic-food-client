import React from 'react';
import './Card.css'
const Card = () => {
    const card1 = "https://cdn.shopify.com/s/files/1/0566/8981/9857/files/grid_banner_1_770x.png?v=1637660479"
    const card2 = "https://cdn.shopify.com/s/files/1/0566/8981/9857/files/grid_banner_2_770x.png?v=1637660478"
    const card3 = "https://cdn.shopify.com/s/files/1/0566/8981/9857/files/grid_banner_3_770x.png?v=1637660478"
    return (

        <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 px-16 my-16'>
            <div className='card_1 w-full flex justify-end items-center h-[300px] rounded-3xl'>
                <div className='mr-10'>
                    <p className='font-bold text-center'>100% Healthy & Affordable</p>
                    <h1 className='text-[#5DA88A] lg:text-2xl lg:font-bold my-3'>ORGANIC CITRUS FRUITS</h1>
                    <button className='text-xl font-bold sm:text-center'>SHOP NOW</button>
                </div>
            </div>
            <div className='card_2 w-full flex justify-end items-center h-[300px] rounded-3xl'>
                <div className='mr-10'>
                    <p className='font-bold '>Natural Raw Vegetables</p>
                    <h1 className='text-2xl font-bold my-3 text-white'>NEW GREENY <br /> VEGETABLES</h1>
                    <button className='text-xl font-bold'>SHOP NOW</button>
                </div>
            </div>
            <div className='card_3 w-full flex justify-end items-center h-[300px] rounded-3xl'>
                <div className='mr-10'>
                    <p className='font-bold'>Garden Fresh Fruits</p>
                    <h1 className='text-2xl font-bold my-3 text-[#5DA88A]'>HEALTHY <br /> ORGANIC <br /> EATABLES</h1>
                    <button className='text-xl font-bold'>SHOP NOW</button>
                </div>
            </div>
        </div>

    );
};

export default Card;