import React from 'react';
import Banner from './Bacnner/Banner';
import Category from './Category/Category';
import PopularMenu from './PopularMenu/PopularMenu';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <PopularMenu/>
        </div>
    );
};

export default Home;