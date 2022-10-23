import React from 'react';

const CouponCode = () => {
    return (
        <div>
            <div className='bg-[#FEE5D7] flex justify-center lg:py-20'>
                <div>
                    <h1 className='text-center font-bold lg:text-6xl text-3xl lg:mt-20 mt-10'>Use this Coupon Code For 15% Off</h1>
                    <div className='flex justify-center'>
                        <button style={{ border: 'dotted 3px #5EC49D', borderRadius: '5px' }} className='px-8 py-4 bg-[#FEE5D7] text-3xl my-6 '>Orga15</button>
                    </div>
                    <p className='text-center text-2xl mb-8'>Note: For New Users Only</p>
                </div>
            </div>
            <div className='px-20  lg:mt-[-60px]'>

                <div className='grid grid-cols-1 lg:grid-cols-2 rounded-3xl bg-[#F8F0E5]'>
                    <div className='py-20'>
                        <div style={{ borderRight: '2px solid #59C49D' }}>
                            <div className='flex justify-center'>
                                <img src=" https://cdn.shopify.com/s/files/1/0566/8981/9857/files/news_letter.png?v=1637662582" alt="" />
                            </div>
                            <h1 className='text-center font-bold lg:text-6xl text-3xl mt-10'>Free Door Delivery</h1>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div>
                            <p className='text-xl text-center '>Don’t Miss Out Our Latest <br /> Updates</p>
                            <h3 className='text-center text-4xl font-bold'>Subscribe Us</h3>
                            <input style={{ border: '1px solid #59C49D' }} className='py-4 my-5 px-16 w-96 rounded-3xl' type="text" placeholder='Type Email' /><br />
                            <input className='py-4 px-20 w-96 text-xl text-white rounded-3xl bg-[#59C49D] uppercase font-bold' type="submit" placeholder='Type Email' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:my-20 my-10 lg:flex justify-evenly items-center'>
                <img className='' src="https://cdn.shopify.com/s/files/1/0566/8981/9857/files/brand_logo_05_200x200.png?v=1639802304" alt="" />
                <img src="https://cdn.shopify.com/s/files/1/0566/8981/9857/files/brand_logo_03_200x200.png?v=1639802322" alt="" />
                <img src="https://cdn.shopify.com/s/files/1/0566/8981/9857/files/brand_logo_04_200x200.png?v=1639802351" alt="" />
                <img src="https://cdn.shopify.com/s/files/1/0566/8981/9857/files/brand_logo_02_200x200.png?v=1639802368" alt="" />
                <img src="https://cdn.shopify.com/s/files/1/0566/8981/9857/files/brand_logo_01_200x200.png?v=1639802383" alt="" />
            </div>
        </div>
    );
};

export default CouponCode;