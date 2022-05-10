import React, {useContext} from 'react';
import NavArrows from "../components/UI/NavArrows";
import {VisibleContext} from "../context";
import NavCircles from "../components/NavCircles";
import {ReactComponent as ArrowTop} from "../svg/arrow-top.svg";
import {useNavigate} from "react-router-dom";

export default function All() {

    const { heading, textColor } = useContext(VisibleContext)

    const navigate = useNavigate()

    return (
        <>
            <header>
                <div className="link-heading">
                    <p className="heading">{heading}</p>
                    <NavArrows />
                </div>
            </header>
            <main style={{height: "50vh"}}>

            </main>
            <footer className="circles link-heading">
                <NavCircles/>
                <div className="arrow-inner link" onClick={() => navigate("/")}>
                    <ArrowTop
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