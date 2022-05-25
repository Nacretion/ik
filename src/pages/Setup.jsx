import React, {useContext, useEffect, useState} from 'react';
import {ReactComponent as ArrowBack} from "../svg/arrow-back.svg";
import {ReactComponent as ArrowForward} from "../svg/arrow-forward.svg";
import NavArrows from "../components/UI/NavArrows";
import {VisibleContext} from "../context";
import {useNavigate} from "react-router-dom";
import NavCircles from "../components/NavCircles";
import CheckBox from "../components/UI/CheckBox";
import {prices} from "../consts/consts";

export default function Setup({funcPrev}) {
    const {textColor, bgColor} = useContext(VisibleContext)
    const [carousel, setCarousel] = useState(["card1", "card2", "card3"])
    const [currentPrice, setCurrentPrice] = useState(0)

    const [photos, setPhotos] = useState(false);
    const [cart, setCart] = useState(false);
    const [menu, setMenu] = useState(false);
    const [networks, setNetworks] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        setCurrentPrice(
            prices.default[0] +
            photos * prices.photos[0] +
            cart * prices.cart[0] +
            menu * prices.services[0] +
            networks * prices.socNetworks[0])
    }, [photos, cart, menu, networks])

    return (
        <>
            <header>
                <div className="link-heading">
                    <ArrowBack style={
                        textColor === "#ffffff" ? {
                            filter: "invert(100%) sepia(99%) saturate(0%) hue-rotate(282deg) brightness(113%) contrast(100%)",
                            transition: ".5s"
                        } : {
                            filter: "invert(0%) sepia(62%) saturate(16%) hue-rotate(267deg) brightness(86%) contrast(100%)",
                            transition: ".5s"
                        }
                    }
                               onClick={() => navigate("/")} className="arrow m-right"/>
                    <NavArrows/>
                </div>
            </header>
            <main style={{height: "500px"}}>
                <div className="cards-wrapper">
                    <div className={"card-inner " + carousel[0]}>
                        <p style={{color: "rgba(0,0,0,0)"}}>продвижение в вк</p>
                        <div style={{backgroundColor: bgColor, zIndex: "100", opacity: "1"}} className="card"> </div>
                    </div>
                    <div className={"card-inner " + carousel[1]}>
                        <p style={{color: "rgba(0,0,0,0)"}}>продвижение в вк</p>
                        <div style={{backgroundColor: bgColor, zIndex: "100", opacity: "1"}} className="card"> </div>
                    </div>
                    <div className={"card-inner " + carousel[2]}>
                        <p style={{color: "rgba(0,0,0,0)"}}>продвижение в вк</p>
                        <div style={{backgroundColor: bgColor, zIndex: "100", opacity: "1"}} className="card"> </div>
                    </div>
                    <div className={"card-inner " + carousel[0]}
                         onClick={() => setCarousel(["card2", "card1", "card3"])}>
                        <p>продвижение в вк</p>
                        <div className="card"> </div>
                    </div>
                    <div className={"card-inner " + carousel[1]}
                         onClick={() => setCarousel(["card1", "card2", "card3"])}>
                        <p>разработать сайт</p>
                        <div className="card">
                            <div className="styled-input-container styled-input--square">
                                <CheckBox
                                    id="check1" disabled checked readOnly>Стилизация сайта под
                                    дизайн компании</CheckBox>
                                <CheckBox
                                    id={"check2"} checked={photos}
                                    onChange={e => {
                                        setPhotos(e.target.checked)
                                    }}>Фотографии заведения</CheckBox>
                                <CheckBox
                                    id={"check3"} checked={menu}
                                    onChange={e => {
                                        setMenu(e.target.checked)
                                    }}>Меню с фотографиями,
                                    описанием и ценой</CheckBox>
                                <CheckBox
                                    id={"check4"} checked={cart}
                                    onChange={e => {
                                        setCart(e.target.checked)
                                    }}>Функция корзины с
                                    выбором товара и отправки заявки</CheckBox>
                                <CheckBox
                                    id={"check5"} checked={networks}
                                    onChange={e => {
                                        setNetworks(e.target.checked)
                                    }}>обратная связь через
                                    мессенджеры</CheckBox>
                                <label style={{color: "#000"}}>Итоговая стоимость {currentPrice}</label>
                            </div>
                        </div>
                    </div>
                    <div className={"card-inner " + carousel[2]}
                         onClick={() => setCarousel(["card1", "card3", "card2"])}>
                        <p>добавить данные</p>
                        <div className="card"> </div>
                    </div>
                </div>
            </main>
            <footer style={{marginTop: "70px"}}>
                <div>
                    <div className="heading arrow-inner" style={{marginBottom: "10px"}}>
                        <ArrowForward
                            style={
                                textColor === "#ffffff" ? {
                                    filter: "invert(100%) sepia(99%) saturate(0%) hue-rotate(282deg) brightness(113%) contrast(100%)",
                                    transition: ".5s"
                                } : {
                                    filter: "invert(0%) sepia(62%) saturate(16%) hue-rotate(267deg) brightness(86%) contrast(100%)",
                                    transition: ".5s"
                                }
                            } className="arrow m-right"/>
                        <p>Выберите категорию</p>
                    </div>
                    <NavCircles/>
                </div>
                <button style={{borderColor: textColor, color: textColor}} className="submit"><p>Отправить запрос</p>
                </button>
            </footer>
        </>
    );
};
