import React from 'react';

const ExitingBlog = () => {
    return (
        <div>
            <h1 className='text-center font-bold lg:text-5xl text-3xl lg:mt-20 mt-10'>Exiting Blog</h1>
            <p className='text-center lg:text-2xl font-semibold lg:mb-16 mb-10 mt-3 lg:mt-5'>Et malesuada fames ac turpis consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.</p>
            <div className='grid lg:grid-cols-3 grid-cols-1 lg:mb-20'>
                <div className='px-12'>
                    <img className='rounded-xl lg:mb-4' src="https://img.freepik.com/premium-photo/woman-medical-protective-mask-supermarket_1157-46692.jpg?w=740" alt="" />
                    <div>
                        <p>FASHION MARKET TRENDY December 15, 2021</p>
                        <h1 className='text-xl font-semibold text-[#5EC49D]'>A Pearl Of Health Hidden In A Fruits</h1>
                        <button className='font-bold text-blue-500 hover:text-[#5EC49D] btn-link'>READ MORE</button>
                    </div>
                </div>
                <div className='px-12'>
                    <img className='rounded-xl' src="https://img.freepik.com/free-photo/woman-shopping-vegetables-supermarket_1157-37886.jpg?w=740&t=st=1666497785~exp=1666498385~hmac=0cf8e39393be1655930437c47a6158c4c31b0bb8faf4110eaf3fb109df7cffb9" alt="" />
                    <div>
                        <p>MARKET TRENDY December 15, 2021</p>
                        <h1 className='text-xl font-semibold text-[#5EC49D]'>Organic Vegetables For Your Life</h1>
                        <button className='font-bold text-blue-500 hover:text-[#5EC49D] btn-link'>READ MORE</button>
                    </div>
                </div>
                <div className='px-12'>
                    <img className='rounded-xl' src="https://as2.ftcdn.net/v2/jpg/01/21/55/55/1000_F_121555594_lol8vpDczK1JdKcVvAm16hGlkYZm4K1g.jpg" alt="" />
                    <div>
                        <p>FASHION MARKET TRENDY | December 14, 2021</p>
                        <h1 className='text-xl font-semibold text-[#5EC49D]'>Eat Fruit Juice to be Cute</h1>
                        <button className='font-bold text-blue-500 hover:text-[#5EC49D] btn-link'>READ MORE</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExitingBlog;