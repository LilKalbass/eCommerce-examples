import React,{useState} from 'react';
import {topProducts} from '../../assets/data/data';
import {Heading} from '../../common/Heading';
import {ProductItem} from '../product/ProductItem';

export const TopProduct = () => {
    const [data, setData] = useState(topProducts)
    const allCategories = ["all", ...new Set(data.map((item) => item.category))]
    const [category, setCategory] = useState(allCategories)

    const handleFilter = (category) => {
        const newItem = topProducts.filter((item) => item.category === category)
        setData(newItem)
        if (category === "all") {
            return setData(topProducts)
        }
    }

    return (
        <>
            <section className = "topproduct">
                <div className = "container">
                    <div className = "head">
                        <Heading title = "Top Sellin` Products" desc = "Meet our newbies! The latest templates uploaded to the marketplace"/>
                        <div className = "category">
                            {category.map((category) => (
                                <button className = "button" onClick={() => handleFilter(category)}>{category}</button>
                            ))}
                        </div>
                    </div>
                    <ProductItem data = {data}/>
                </div>
            </section>
        </>
    );
}