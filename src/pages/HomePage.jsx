import React, {useContext} from 'react';
import NavCircles from "../components/NavCircles";
import {ReactComponent as ArrowBottom} from "../svg/arrow-bottom.svg";
import {useNavigate} from "react-router-dom";
import {VisibleContext} from "../context";
import NavArrows from "../components/UI/NavArrows";
import {stories, cards} from "../consts/consts";

export default function HomePage () {

    const { heading, textColor, setCurrentTheme, currentTheme, indexes} = useContext(VisibleContext)

    const navigate = useNavigate();
    return (
        <>
            <header>
                <div className="buttons-inner">
                    {/*<Stories*/}
                    {/*    width="400px"*/}
                    {/*    height="600px"*/}
                    {/*    consts={consts}*/}
                    {stories.map(({bgColor}) => (
                        <div style={{backgroundColor: bgColor}} className="circle-button"></div>
                    ))}
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