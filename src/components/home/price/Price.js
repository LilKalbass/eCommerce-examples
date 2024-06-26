import React from 'react';
import {price} from '../../assets/data/data';
import {Heading} from '../../common/Heading';

export const Price = () => {
    return (
        <>
            <section className = "price">
                <Heading title = "Top Sellin` Products" desc = "Meet our newbies! The latest templates uploaded to the marketplace"/>
                <div className = "content">
                    {price.map((item) => (
                        <div className = "box">
                            <h3>{item.name}</h3>
                            <h1><span>$</span>{item.price}<label htmlFor = "">/user per month</label></h1>
                            <p>{item.desc}</p>
                            <button className = "button">Get Started</button>
                            <ul>
                                {item.list.map((lists) => (
                                    <li>
                                        <i>{lists.icon}</i>
                                        <span>{lists.para}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}