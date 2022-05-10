import React, {useContext} from 'react';
import {IoAddOutline} from "react-icons/io5";
import NavCircles from "../components/NavCircles";
import {ReactComponent as ArrowBottom} from "../svg/arrow-bottom.svg";
import {useNavigate} from "react-router-dom";
import {VisibleContext} from "../context";
import NavArrows from "../components/UI/NavArrows";

const HomePage = () => {

    const { heading, textColor, firstImage, secondImage, setCurrentTheme, bgColor } = useContext(VisibleContext)


    const navigate = useNavigate();
    return (
        <>
            <header>
                <div className="buttons-inner">
                    {/*<Stories*/}
                    {/*    width="400px"*/}
                    {/*    height="600px"*/}
                    {/*    stories={stories}*/}
                    <section className="svg-container">
                        <svg style={{backgroundColor: bgColor}} className="circle" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <ellipse className="background" ry="60" rx="60" cy="62.5" cx="62.5" strokeWidth="2"/>
                                <ellipse className="foreground" ry="60" rx="60" cy="62.5" cx="62.5" strokeWidth="2"/>
                            </g>
                        </svg>
                    </section>
                    <section className="svg-container">
                        <svg className="circle" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <ellipse className="background" ry="60" rx="60" cy="62.5" cx="62.5" strokeWidth="2"/>
                                <ellipse className="foreground" ry="60" rx="60" cy="62.5" cx="62.5" strokeWidth="2"/>
                            </g>
                        </svg>
                    </section>
                    <section className="svg-container">
                        <svg className="circle" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <ellipse className="background" ry="60" rx="60" cy="62.5" cx="62.5" strokeWidth="2"/>
                                <ellipse className="foreground" ry="60" rx="60" cy="62.5" cx="62.5" strokeWidth="2"/>
                            </g>
                        </svg>
                    </section>
                    <section className="svg-container">
                        <svg className="circle" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <ellipse className="background" ry="60" rx="60" cy="62.5" cx="62.5" strokeWidth="2"/>
                                <ellipse className="foreground" ry="60" rx="60" cy="62.5" cx="62.5" strokeWidth="2"/>
                            </g>
                        </svg>
                    </section>
                    <section className="svg-container">
                        <svg className="circle" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <ellipse className="background" ry="60" rx="60" cy="62.5" cx="62.5" strokeWidth="2"/>
                                <ellipse className="foreground" ry="60" rx="60" cy="62.5" cx="62.5" strokeWidth="2"/>
                            </g>
                        </svg>
                    </section>
                    <section className="svg-container">
                        <svg className="circle" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <ellipse className="background" ry="60" rx="60" cy="62.5" cx="62.5" strokeWidth="2"/>
                                <ellipse className="foreground" ry="60" rx="60" cy="62.5" cx="62.5" strokeWidth="2"/>
                            </g>
                        </svg>
                    </section>
                    <section className="svg-container">
                        <svg className="circle" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <ellipse className="background" ry="60" rx="60" cy="62.5" cx="62.5" strokeWidth="2"/>
                                <ellipse className="foreground" ry="60" rx="60" cy="62.5" cx="62.5" strokeWidth="2"/>
                            </g>
                        </svg>
                    </section>
                    <section className="svg-container">
                        <svg className="circle" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <ellipse className="background" ry="60" rx="60" cy="62.5" cx="62.5" strokeWidth="2"/>
                                <ellipse className="foreground" ry="60" rx="60" cy="62.5" cx="62.5" strokeWidth="2"/>
                            </g>
                        </svg>
                    </section>
                    <section className="svg-container">
                        <svg className="circle" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <ellipse className="background" ry="60" rx="60" cy="62.5" cx="62.5" strokeWidth="2"/>
                                <ellipse className="foreground" ry="60" rx="60" cy="62.5" cx="62.5" strokeWidth="2"/>
                            </g>
                        </svg>
                    </section>
                    <section className="svg-container">
                        <svg className="circle" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <ellipse className="background" ry="60" rx="60" cy="62.5" cx="62.5" strokeWidth="2"/>
                                <ellipse className="foreground" ry="60" rx="60" cy="62.5" cx="62.5" strokeWidth="2"/>
                            </g>
                        </svg>
                    </section>
                </div>
                <p className="heading" onClick={() => navigate("/setup")}>ik-Market</p>
            </header>
            <main className="cafe">
                <div className="link-heading">
                    <p className="heading">{heading}</p>
                    <NavArrows />
                </div>
                <div className="cards-inner">
                    <button
                        style={{
                            background: firstImage
                        }}
                        className="card card-cafe"
                        id="card1">
                    </button>
                    <button
                        style={{
                            background: secondImage
                        }}
                        className="card card-cafe"
                        id="card2">
                    </button>
                    <button
                        className="card card-cafe"
                        id="card2">
                    </button>
                    <button
                        className="card card-cafe"
                        id="card2">
                    </button>
                    <button
                        className="card card-cafe"
                        id="card2">
                    </button>
                </div>

            </main>
            <footer className="circles link-heading">
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

export default HomePage;