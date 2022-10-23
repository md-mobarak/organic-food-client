import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
const PopularProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [products])
    return (
        <div>
            <h1 className='text-center font-bold lg:text-5xl text-3xl lg:mt-20 mt-10'>Popular Products</h1>
            <p className='text-center lg:text-2xl font-semibold lg:mb-16 mb-10 mt-3 lg:mt-5'>Vel quam elementum pulvinar etiamconsectetur <br /> adipiscing elit,  sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.</p>
            <div className='px-24'>
                <Swiper
                    spaceBetween={100}
                    slidesPerView={3}
                    slidesPerGroup={1}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                // className="mySwiper"
                >
                    {
                        products.map(product => <div>
                            key={product.name}
                            <SwiperSlide>
                                <div className="card card-compact w-96 shadow-xl">
                                    <figure><img className='w-96 h-[230px]' src={product.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-xl">{product.name}</h2>
                                        <p className='text-xl card-title'>Price ${product.price}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn hover:bg-[#5EC49D] bg-[#FDE4D8] w-full text-black hover:text-white rounded-none border-0">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>)
                    }


                </Swiper>
            </div>
        </div>
    );
};

export default PopularProducts;