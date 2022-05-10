import React, {useContext} from 'react';
import {ReactComponent as ArrowBack} from "../svg/arrow-back.svg";
import NavArrows from "../components/UI/NavArrows";
import {VisibleContext} from "../context";
import {useNavigate} from "react-router-dom";

export const Setup = ({funcPrev}) => {
    const { textColor, toPrevTheme } = useContext(VisibleContext)

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

            </main>
            <footer>

            </footer>
        </>
    );
};
