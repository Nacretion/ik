import React, {useContext} from 'react';
import {ReactComponent as ArrowBack} from "../../svg/arrow-back.svg";
import {ReactComponent as ArrowForward} from "../../svg/arrow-forward.svg";
import {VisibleContext} from "../../context";

const NavArrows = ({funcNext, funcPrev}) => {
    const {toPrevTheme, toNextTheme, textColor} = useContext(VisibleContext)
    return (
        <div className="arrow-inner">
            <ArrowBack
                style={textColor === "#ffffff" ? {
                    filter: "invert(100%) sepia(99%) saturate(0%) hue-rotate(282deg) brightness(113%) contrast(100%)",
                    transition: ".5s"
                } : {
                    filter: "invert(0%) sepia(62%) saturate(16%) hue-rotate(267deg) brightness(86%) contrast(100%)",
                    transition: ".5s"
                }
                }
                onClick={funcPrev || toPrevTheme} className="arrow m-right"/>
            <ArrowForward
                style={textColor === "#ffffff" ? {
                    filter: "invert(100%) sepia(99%) saturate(0%) hue-rotate(282deg) brightness(113%) contrast(100%)",
                    transition: ".5s"
                } : {
                    filter: "invert(0%) sepia(62%) saturate(16%) hue-rotate(267deg) brightness(86%) contrast(100%)",
                    transition: ".5s"
                }
                }
                onClick={funcNext || toNextTheme} className="arrow m-right"/>
        </div>
    );
};

export default NavArrows;