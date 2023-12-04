import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Snipper from '../Snipper/Snipper';

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            {
                navigation.state==='loading' ? <Snipper></Snipper> : ''
            }
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;