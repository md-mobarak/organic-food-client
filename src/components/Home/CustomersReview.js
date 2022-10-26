import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
const CustomersReview = () => {
    const [reviews, setReviews] = useState()
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='my-20 bg-[#FDE4D8] pt-20 pb-32'>
            <div className='lg:px-24 lg:rounded-3xl'>
                <h1 className='text-center font-bold lg:text-5xl text-3xl lg:mt-20 mt-10'>What Our Customers Say</h1>
                <p className='text-center lg:text-2xl font-semibold lg:mb-16 mb-10 mt-3 lg:mt-5'>Urna et pharetra pharetra massa massa ultricies mi. Cras <br /> fermentum odio eu feugiat pretium. Pellentesque massa placerat <br /> duis ultric lectus</p>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={0}
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
                    className="mySwiper"
                >
                    <div>

                        {
                            reviews?.map(review => <SwiperSlide className='pb-20 shadow-3xl  px-12 rounded-3xl  '>
                                <div className=' border-4 border-blue-300 bg-[#03fcc2] flex justify-center items-center w-full rounded-xl py-4'>
                                    <div>
                                        <h1 className='text-center uppercase font-bold my-6 text-2xl'>{review?.name}</h1>
                                        {/* <img className='rounded-2xl shadow-2xl' src={review?.image} alt="" /> */}
                                        <div className="avatar flex justify-center items-center">
                                            <div className="w-48 rounded-full">
                                                <img src={review.image} alt='' />
                                            </div>
                                        </div>

                                        <div className='px-12'>
                                            <p className='text-xl pb-10 ml-8 mt-5'>{review.reviews.slice(0, 80)}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }

                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default CustomersReview;