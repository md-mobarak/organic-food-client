import React from 'react';

const ChooseUs = () => {
    return (
        <div>
            <h1 className='text-center font-bold lg:text-5xl text-3xl lg:mt-20 mt-10'>Why Choose Us</h1>
            <p className='text-center lg:text-2xl font-semibold lg:mb-16 mb-10 mt-3 lg:mt-5'>Arcu non odio euismod lacinia sectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua.</p>
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:px-20 px-10'>
                <div >
                    <img src="https://img.freepik.com/free-photo/basket-full-vegetables_1112-316.jpg?w=740&t=st=1666438137~exp=1666438737~hmac=24824d6d0d8f7a95c7f6048be3a7cfa3ea9f085eb76310331cb6f4a9f54520b8" alt="" />
                </div>
                <div>
                    <div className='lg:flex justify-center items-center'>
                        <img className='w-32' src="https://cdn.shopify.com/s/files/1/0566/8981/9857/files/icons_03_180x.png?v=1639802217" alt="" />
                        <div className='lg:ml-4'>
                            <h1 className='lg:text-4xl text-xl text-[#5EC49D]'>Healthy Fresh Eatbales</h1>
                            <p className='font-semibold lg:text-xl lg:mt-4'>Varius quam quisque id diam. Ipsum suspendisse ultrices gravida dictum fusce ut placerat sidet amet marques.</p>
                        </div>
                    </div>
                    <div className='my-8 lg:flex justify-center items-center'>
                        <img className='w-32' src="https://cdn.shopify.com/s/files/1/0566/8981/9857/files/icons_02_180x.png?v=1639802247" alt="" />
                        <div className='lg:ml-4'>
                            <h1 className='lg:text-4xl text-xl text-[#5EC49D]'>Authorized Organic Farm</h1>
                            <p className='font-semibold lg:text-xl lg:mt-4'>Accumsan in nisl nisi scelerisq amet sed due eu ultrices vitae auctor. Felis eget velit aliquet sagittis amet lor.</p>
                        </div>
                    </div>
                    <div className='lg:flex justify-center items-center'>
                        <img className='w-32' src="https://cdn.shopify.com/s/files/1/0566/8981/9857/files/icons_180x.png?v=1639802267" alt="" />
                        <div className='lg:ml-4'>
                            <h1 className='lg:text-4xl text-xl text-[#5EC49D]'>100% Non Chemical Fertilizers</h1>
                            <p className='font-semibold lg:text-xl lg:mt-4'>Est lorem ipsum dolor sit amet sit smret consectetur. Arcu risus quis varius quam quisque id diam vel tellus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;