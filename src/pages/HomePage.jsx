import React, {useContext, useState} from 'react';
import NavCircles from "../components/NavCircles";
import {ReactComponent as ArrowBottom} from "../svg/arrow-bottom.svg";
import {useNavigate} from "react-router-dom";
import {VisibleContext} from "../context";
import NavArrows from "../components/UI/NavArrows";
import {cards} from "../consts/consts";
import Stories from 'stories-react';
import 'stories-react/dist/index.css';

import {ReactComponent as CafeIcon} from "../svg/circles/food.svg";
import {ReactComponent as ProductsIcon} from "../svg/circles/products.svg";
import {ReactComponent as CosmeticIcon} from "../svg/circles/cosmetic.svg";
import {ReactComponent as ClothesIcon} from "../svg/circles/clothes.svg";
import {ReactComponent as ClinicIcon} from "../svg/circles/clinic.svg";
import {ReactComponent as EstateIcon} from "../svg/circles/estate.svg";
import {ReactComponent as GymIcon} from "../svg/circles/gym.svg";
import {ReactComponent as GiftsIcon} from "../svg/circles/gifts.svg";
import {ReactComponent as AutoIcon} from "../svg/circles/auto.svg";
import {ReactComponent as RepairIcon} from "../svg/circles/repair.svg";
export default function HomePage () {

    const { heading, textColor, setCurrentTheme, currentTheme, indexes} = useContext(VisibleContext)

    const [isModalActive, setIsModalActive] = useState("y")
    const stories = [
        {

            type: 'image',
            url: 'https://lh3.googleusercontent.com/_X4oEpRu4O-nv0KuFwJQV2zX5SLuwRg9fIM1_-Q29L50zDgRd2eLdEr0ZmLVk_cPLA4',
            duration: 1500,
        },
        {

            type: 'image',
            url: "https://www.soccerex.com/media/8004/img.jpg?anchor=center&mode=crop&width=750&height=422&rnd=131660981050000000",
            duration: 1500,
        }
    ]

    const navigate = useNavigate();
    return (
        <>
            <header>
                <div className="buttons-inner">
                    <div className={"modal " + isModalActive} id="stories1">
                        <Stories
                            onAllStoriesEnd={() => {
                                setIsModalActive("y")
                                this.forceUpdate()
                            }}
                            width="500px"
                            height="800px"
                            stories={stories}
                        />
                    </div>
                    <div onClick={() => setIsModalActive("modal-active")} style={{backgroundColor: "#fff", border: "2px solid #fff"}} className="circle-button">
                        О НАС
                    </div>
                    <div style={{backgroundColor: "#FF9A76", border: "2px solid #FF9A76"}} className="circle-button">
                        <CafeIcon className="svg"/>
                    </div>
                    <div style={{backgroundColor: "#FBD46D", border: "2px solid #FBD46D"}} className="circle-button">
                        <ProductsIcon style={{fill:"#935353"}} className="svg"/>
                    </div>
                    <div style={{backgroundColor: "#E8445F", border: "2px solid #E8445F"}} className="circle-button">
                        <CosmeticIcon className="svg"/>
                    </div>
                    <div style={{backgroundColor: "#9D65C9", border: "2px solid #9D65C9"}} className="circle-button">
                        <ClothesIcon className="svg"/>
                    </div>
                    <div style={{backgroundColor: "#14B1AB", border: "2px solid #14B1AB"}} className="circle-button">
                        <GiftsIcon className="svg"/>
                    </div>
                    <div style={{backgroundColor: "#EFB7B7", border: "2px solid #EFB7B7"}} className="circle-button">
                        <GymIcon style={{fill:"#9D65C9"}} className="svg"/>
                    </div>
                    <div style={{backgroundColor: "#669B9C", border: "2px solid #669B9C"}} className="circle-button">
                        <ClinicIcon className="svg"/>
                    </div>
                    <div style={{backgroundColor: "#D7E1F1", border: "2px solid #D7E1F1"}} className="circle-button">
                        <RepairIcon style={{fill:"#E8505B"}} className="svg"/>
                    </div>
                    <div style={{backgroundColor: "#99B898", border: "2px solid #99B898"}} className="circle-button">
                        <EstateIcon className="svg"/>
                    </div>
                    <div style={{backgroundColor: "#125374", border: "2px solid #125374"}} className="circle-button">
                        <AutoIcon className="svg"/>
                    </div>

                </div>
                <p className="heading" onClick={() => navigate("/setup")}>О нас</p>
            </header>
            <main>
                <div className="link-heading">
                    <p className="heading">{heading}</p>
                    <NavArrows />
                </div>
                <div className="cards-inner">
                    {cards[currentTheme].slice(indexes[0],indexes[1]).map(({image}) => (
                        <button
                            key={image}
                            style={{
                                background: image
                            }}
                            className="card card-cafe">
                        </button>
                    ))}
                </div>

            </main>
            <footer>
                <NavCircles textColor={textColor} setCurrentTheme={setCurrentTheme}/>
                <div className="arrow-inner link" onClick={() => navigate("/all")}>
                    <p className="heading">Все</p>
                    <ArrowBottom
                        style={textColor === "#ffffff" ? {
                            filter: "invert(100%) sepia(99%) saturate(0%) hue-rotate(282deg) brightness(113%) contrast(100%)",
                            transition: "1s"
                        } : {
                            filter: "invert(0%) sepia(62%) saturate(16%) hue-rotate(267deg) brightness(86%) contrast(100%)",
                            transition: "1s"
                        }
                        }
                        className="arrow m-left m-right"/>
                </div>
            </footer>
        </>
    );
};