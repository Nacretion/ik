import React, {useContext, useState} from 'react';
import {ReactComponent as ArrowBack} from "../svg/arrow-back.svg";
import {ReactComponent as ArrowForward} from "../svg/arrow-forward.svg";
import NavArrows from "../components/UI/NavArrows";
import {VisibleContext} from "../context";
import {useNavigate} from "react-router-dom";
import NavCircles from "../components/NavCircles";
import CheckBox from "../components/UI/CheckBox";

export default function Setup({funcPrev}) {
    const {textColor} = useContext(VisibleContext)
    const [carousel, setCarousel] = useState(["card1", "card2", "card3"])

    const [photos, setPhotos] = useState(false);
    const [cart, setCart] = useState(false);
    const [networks, setNetworks] = useState(false);

    const navigate = useNavigate();

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
                    <div className={"card-inner " + carousel[0]}
                         onClick={() => setCarousel(["card2", "card1", "card3"])}>
                        <p>продвижение в вк</p>
                        <div className="card"></div>
                    </div>
                    <div className={"card-inner " + carousel[1]}
                         onClick={() => setCarousel(["card1", "card2", "card3"])}>
                        <p>разработать сайт</p>
                        <div className="card">
                            <div className="styled-input-container styled-input--square">
                                <CheckBox
                                    id="check1" disabled checked readOnly >687</CheckBox>
                                <CheckBox
                                    id={"check2"} checked={photos}
                                    onChange={e => {setPhotos(e.target.checked)}}>7865</CheckBox>
                                <CheckBox
                                    id={"check3"} checked={cart}
                                    onChange={e => {setCart(e.target.checked)}}>7865</CheckBox>
                                <CheckBox
                                    id={"check4"} checked={networks}
                                    onChange={e => {setNetworks(e.target.checked)}}>7865</CheckBox>
                            </div>
                        </div>
                    </div>
                    <div className={"card-inner " + carousel[2]}
                         onClick={() => setCarousel(["card1", "card3", "card2"])}>
                        <p>добавить данные</p>
                        <div className="card half-height"></div>
                        <div className="card half-height"></div>
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
