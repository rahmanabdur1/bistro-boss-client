import React, { useState } from 'react';
import Cover from '../../Shared/Cover/Cover';
import orderCoverImg from '../../../assets/shop/banner2.jpg'
import useMenu from '../../../hooks/useMenu';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex =categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Cover img={orderCoverImg} title='Order Food' />
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList className="flex justify-center items-center mt-4 mb-4 p-4"> 
                    <Tab selectedClassName="rounded text-white bg-orange-500">Salad</Tab>
                    <Tab selectedClassName="rounded text-white bg-orange-500">Pizza</Tab>
                    <Tab selectedClassName="rounded text-white bg-orange-500">Soup</Tab>
                    <Tab selectedClassName="rounded text-white bg-orange-500">Dessert</Tab>
                    <Tab selectedClassName="rounded text-white bg-orange-500">Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;