import React from 'react';
import {customer} from '../../assets/data/data';
import {Heading} from '../../common/Heading';
import {ImQuotesRight} from 'react-icons/im';

export const Testimonial = () => {
    return (
        <>
            <section className = "customer">
                <Heading title = "Top Sellin` Products" desc = "Meet our newbies! The latest templates uploaded to the marketplace"/>
                <div className = "content">
                    {customer.map((items) => (
                        <div className = "card">
                            <button><ImQuotesRight/></button>
                            <p>{items.desc}</p>
                            <h3>{items.name}</h3>
                            <h3>{items.post}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}