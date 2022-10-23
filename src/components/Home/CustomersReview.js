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
                    spaceBetween={2}
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
                            reviews?.map(review => <SwiperSlide className='px-24 rounded-3xl '>
                                <h1 className='text-center font-bold text-xl'>{review?.name}</h1>
                                <img className='rounded-3xl' src={review?.image} alt="" />

                                <p>{review.reviews.slice(0, 100)}</p>
                            </SwiperSlide>)
                        }

                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default CustomersReview;