import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {navlist} from '../assets/data/data';
import logo from '../assets/images/logo.svg'
import {BiSearch} from 'react-icons/bi';
import {BsBagCheck} from 'react-icons/bs';
import {RiUser3Line} from 'react-icons/ri';
import {AiOutlineHeart, AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

export const Header = () => {
    const [mobile, setMobile] = useState(false)
    const [isActive, setIsActive] = useState(false);
    const [cartList, setCartList] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
        });
    });

    return (
        <>
            <header className = {isActive ? "activeH" : ""}>
                <div className = "container">
                    <nav>
                        <div  className = "toggle">
                            <button onClick = {() => setMobile(!mobile)}>
                                {mobile ? <AiOutlineClose className = "close heIcon"/ >  : <AiOutlineMenu className = "open heIcon"/>}
                            </button>
                        </div>
                        <div className = "left">
                            <img src = {logo} alt = "logo_img"/>
                        </div>
                        <div className = "center">
                            <ul className = {mobile ? "mobile-nav" : "menu"}>
                                {navlist.map((nav, i) => (
                                    <li key = {i}>
                                        <Link to = {nav.path}>{nav.text}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                    <div className = "right">
                        <div className = "right_search">
                            <input type = "text" placeholder = "Search Products..."/>
                            <BiSearch className = "searchIcon heIcon" />
                        </div>
                        <div className = "right_user">
                            <RiUser3Line className = "userIcon heIcon"/>
                            <AiOutlineHeart className = "userIcon heIcon"/>
                        </div>
                        <div className = "right_card">
                            <button className = {isActive ? "activeBB" : "button"} onClick = {() => setCartList(!cartList)}>
                                <BsBagCheck className = {isActive ? "activeB" : "cartIcon heIcon"}/> My Cart (0)
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}