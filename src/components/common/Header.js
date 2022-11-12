import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {navlist} from '../assets/data/data';
import logo from '../assets/images/logo.svg'
import cartImg from '../assets/images/cart.png'
import {BiSearch} from 'react-icons/bi';
import {BsBagCheck} from 'react-icons/bs';
import {RiUser3Line} from 'react-icons/ri';
import {AiOutlineHeart, AiOutlineMenu, AiOutlineClose, AiOutlineDelete} from 'react-icons/ai';
import {connect, useDispatch, useSelector} from 'react-redux';
import {DELETE} from '../../controller/action';

export const Header = () => {
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
        });
    });

    const getData = useSelector((state) => state.cartReducer.carts)
    const dispatch = useDispatch()
    const [mobile, setMobile] = useState(false)
    const [isActive, setIsActive] = useState(false);
    const [cartList, setCartList] = useState(false)
    const [price, setPrice] = useState(0)

    const handleClose = () => {
        setCartList(null)
    }
    const kill = (id) => {
        dispatch(DELETE(id))
    }

    const totals = () => {
        let price = 0;
        getData.map((e, i) => {
            price = parseFloat(e.price) * e.qty + price;
        })
        setPrice(price)
    }
    useEffect(() => {
        totals()
    }, [totals])

    return (
        <>
            <header className = {isActive ? "activeH" : ""}>
                <div className = "container">
                    <nav>
                        <div  className = "toggle">
                            <button onClick = {() => setMobile(!mobile)}>
                                {mobile ? <AiOutlineClose className = "close heIcon"/>  : <AiOutlineMenu className = "open heIcon"/>}
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
                            <button className = {isActive ? "activeBB" : "button"} onClick={() => setCartList(!cartList)}>
                                <BsBagCheck className = {isActive ? "activeB" : "cartIcon heIcon"}/> My Cart ({getData.length})
                            </button>
                            <div className = {cartList ? "showCart" : "hideCart"} style={{marginTop: "3.5%"}}>
                                {getData.length ? (
                                    <section className = "details">
                                        <div className = "details_title">
                                            <h3>Photo</h3>
                                            <p>Product Name</p>
                                        </div>
                                        {getData.map((e) => (
                                            <div className = "details_content">
                                                <div className = "details_content_img">
                                                    <Link to = {`/cart/${e.id}`}>
                                                        <img src = {e.cover} alt = "e_cover_img"/>
                                                    </Link>
                                                </div>
                                                <div className = "details_content_detail">
                                                    <div className = "details_content_detail_price">
                                                        <p>{e.title.slice(0, 20)}...</p>
                                                        <p>Price: ${e.price}</p>
                                                        <p>Quantity: {e.qty}</p>
                                                    </div>
                                                </div>
                                                <div className = "details_content_detail_icon">
                                                    <i onClick = {() => kill(e.id)}>
                                                        <AiOutlineDelete/>
                                                    </i>
                                                </div>
                                            </div>
                                        ))}
                                        <div className = "details_total">
                                            <h4>Total: ${price}</h4>
                                        </div>
                                    </section>
                                ) : (
                                    <div className = "empty">
                                        <p>Ur cart is empty</p>
                                        <img src= {cartImg}/>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        amount: state.amount
    }
}
connect(mapStateToProps)(Header)