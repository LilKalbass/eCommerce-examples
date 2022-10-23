import React, {useState} from 'react';
import {products} from '../../assets/data/data';
import {Heading} from '../../common/Heading';
import {ProductItem} from './ProductItem';

export const Product = () => {
    const [data, setData] = useState(products)
    return (
        <>
            <section>
                <div>
                    <Heading title = "Trending Products" desc = "Check the hottest design of the week. They worth ur attention :)"/>
                    <ProductItem data = {data}/>
                </div>
            </section>
        </>
    );
}