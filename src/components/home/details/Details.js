import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import {MdStarRate} from 'react-icons/md';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import {ADD, DELETE, REMOVE_INT} from '../../../controller/action';

export const Details = () => {
    const getData = useSelector((state) => state.cartReducer.carts)
    const dispatch = useDispatch()
    const [data, setData] = useState([])
    const {id} = useParams()
    const history = useHistory()

    const increment = (e) => {
        dispatch(ADD(e))
    }
    const decrement = (item) => {
        dispatch(REMOVE_INT(item))
    }

    const check = () => {
        let checkData = getData.filter((e) => {
            return e.id == id
        })
        setData(checkData)
    }
    useEffect(() => {
        check()
    }, [id])

    const deletes = (id) => {
        dispatch(DELETE(id))
        history.push("/")
    }

    return (
        <>
            <article>
                <section className = "details" style = {{padding: '4%'}}>
                    <h2 className = "details_title">Product Details: </h2>
                    {data.map((item) => (
                        <div className = "details_content">
                            <div className = "details_content_img">
                                <img src = {item.cover} alt = "cover_img"/>
                            </div>
                            <div className = "details_content_detail">
                                <h1>{item.title}</h1>
                                <div className = "rating">
                                    <MdStarRate/>
                                    <MdStarRate/>
                                    <MdStarRate/>
                                    <MdStarRate/>
                                    <MdStarRate/>
                                    <label htmlFor = "">(1 customer review)</label>
                                </div>
                                <h3>${item.price * item.qty}</h3>
                                <p>{item.author}</p>
                                <div className = "qty">
                                    <div className = "count">
                                        <button onClick = {() => increment(item)}>
                                            <AiOutlinePlus/>
                                        </button>
                                        <span>{item.qty}</span>
                                        <button onClick = {item.qty <= 1 ? () => deletes(item.id) : () => decrement(item)}>
                                            <AiOutlineMinus/>
                                        </button>
                                    </div>
                                    <button className='button'>Add To Cart</button>
                                </div>
                                <div className = 'desc'>
                                    <h4>PRODUCTS DESCRIPTION</h4>
                                    <p>Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs.</p>
                                    <h4> PRODUCT DETAILS</h4>
                                    <ul>
                                        <li>
                                            <p> Material: Plastic, Wood</p>
                                        </li>
                                        <li>
                                            <p>Legs: Lacquered oak and black painted oak</p>
                                        </li>
                                        <li>
                                            <p>Dimensions and Weight: Height: 80 cm, Weight: 5.3 kg</p>
                                        </li>
                                        <li>
                                            <p>Length: 48cm</p>
                                        </li>
                                        <li>
                                            <p>Depth: 52 cm</p>
                                        </li>
                                        <li>
                                            <p>Seat Height: 44 cm</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </article>
        </>
    )
}