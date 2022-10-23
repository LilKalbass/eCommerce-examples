import React, {useState} from 'react';
import {products} from '../../assets/data/data';
import {BiSearch} from 'react-icons/bi';
import {SearchItems} from './SearchItems';

export const Hero = () => {
    const [value, setValue] = useState("");

    const onChanges = (e) => {
        setValue(e.target.value)
    }

    const onSearch = (k) => {
        setValue(k)
    }

    return (
        <>
            <section className = "hero">
                <div className = "container">
                    <h1>
                        <label>
                            Over <span>6,500</span> Curated Design
                        </label>
                        <br/>
                        <label>
                            Resources, <span>Graphic & Website</span> Templates
                        </label>
                    </h1>
                    <p>High-quality Design Themes for personal or commercial use. 6k+ items in 100 categories.</p>
                    <div className = "search">
                        <span>All Categories</span>
                        <hr/>
                        <input type = "text" placeholder = "Search Products..." onChange = {onChanges} value = {value}/>
                        <button onClick = {() => onSearch(value)}>
                            <BiSearch className = "searchIcon heIcon"/>
                        </button>
                    </div>
                    <SearchItems products = {products} value = {value} onSearch = {onSearch}/>
                    <p>Examples: Mockup, PSD, Theme Deign, Image, etc.</p>
                </div>
            </section>
        </>
    );
}
