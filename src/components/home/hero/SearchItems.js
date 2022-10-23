import React from 'react';
import {FiSearch, FiShoppingBag} from "react-icons/fi";
import {AiOutlineHeart} from "react-icons/ai";

export const SearchItems = ({products, value, onSearch}) => {
    return (
        <>
            <section className = "searchItems" style = {{paddingTop: "55px"}}>
                <div className = "product_items" style = {{borderRadius: "25px"}}>
                    {products.filter((items) => {
                        const searchkey = value.toLowerCase()
                        const title = items.title.toLowerCase()

                        return searchkey && title.startsWith(searchkey) && title !== searchkey
                    }).slice(0, 10)
                      .map((items) => (
                        <div className = "box" key = {items.id}>
                            <div className = "img" >
                                <img src = {items.cover} alt = "box_img"/>
                                <div className = "overlay">
                                    <button className = "button">
                                        <FiShoppingBag/>
                                    </button>
                                    <button className = "button">
                                        <AiOutlineHeart/>
                                    </button>
                                    <button className = "button">
                                        <FiSearch/>
                                    </button>
                                </div>
                                <div className = "details">
                                    <h3>{items.title}</h3>
                                    <p>{items.author}</p>
                                    <h4>${items.price}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}