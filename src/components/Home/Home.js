import React from 'react';
import Banner from './Banner';
import Card from './Card';
import ChooseUs from './ChooseUs';
import CouponCode from './CouponCode';
import CustomersReview from './CustomersReview';
import ExitingBlog from './ExitingBlog';
import FruitsVegetables from './FruitsVegetables';
import IconsData from './IconsData';
import PopularProducts from './PopularProducts';
import ProductsCard from './ProductsCard';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <IconsData></IconsData>
            <Card></Card>
            <FruitsVegetables></FruitsVegetables>
            <ProductsCard></ProductsCard>
            <CustomersReview></CustomersReview>
            <ChooseUs></ChooseUs>
            <PopularProducts></PopularProducts>
            <ExitingBlog></ExitingBlog>
            <CouponCode></CouponCode>
        </div>
    );
};

export default Home;