import React, {useContext} from 'react';
import {ReactComponent as ArrowBack} from "../svg/arrow-back.svg";
import NavArrows from "../components/UI/NavArrows";
import {VisibleContext} from "../context";
import {useNavigate} from "react-router-dom";

export const Setup = ({funcPrev}) => {
    const { textColor } = useContext(VisibleContext)

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
            <main>
                <div className="cards-wrapper">
                    <div className="card-inner">
                        <p>продвижение в вк</p>
                        <div className="card"></div>
                    </div>
                    <div className="card-inner">
                        <p>разработать сайт</p>
                        <div className="card"></div>
                    </div>
                    <div className="card-inner">
                        <p>добавить данные</p>
                        <div className="card half-height"></div>
                        <div className="card half-height"></div>
                    </div>
                </div>
            </main>
            <footer>

            </footer>
        </>
    );
};
