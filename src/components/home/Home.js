import React from "react";
import {Hero} from './hero/Hero';
import {Card} from './hero/Card';
import {Product} from './product/Product';


export const Home = () => {
    return (
        <>
            <Hero/>
            <Card/>
            <Product/>
        </>
    );
}