import React, {useEffect, useState} from "react";
import './styles/App.scss';
import './styles/rootAnimation.css';
import {VisibleContext} from "./context";
import {Route, Routes, useLocation} from "react-router-dom";
import {themes} from "./consts/consts"
import HomePage from "./pages/HomePage";
import All from "./pages/All";
import Setup from "./pages/Setup";
import Error from "./pages/Error";
import Vysota89 from "./sites/Vysota/Vysota89";


export default function App() {
    const [currentTheme, setCurrentTheme] = useState(0)
    const [textColor, changeTextColor] = useState("")
    const [bgColor, changeBgColor] = useState("")
    const [heading, changeHeading] = useState("")
    const [carousel, setCarousel] = useState(["card1", "card2", "card3"])


    const initialStateSwipeable = {
        delta: '100',
        preventScrollOnSwipe: false,
        trackMouse: false,
        trackTouch: true,
        rotationAngle: 0,
        swipeDuration: "200",
    };

    const changeTheme = (color, bgColor, heading) => {
        changeTextColor(color)
        changeBgColor(bgColor)
        changeHeading(heading)
    }

    useEffect(() => {
        const {color, backgroundColor, heading} = themes[currentTheme]
        changeTheme(color, backgroundColor, heading)
    }, [currentTheme, setCurrentTheme])


    const toPrevTheme = () => {
        if (currentTheme > 0) setCurrentTheme(currentTheme - 1)
        else setCurrentTheme(11)
    }
    const toNextTheme = () => {
        if (currentTheme < 11) setCurrentTheme(currentTheme + 1)
        else setCurrentTheme(0)
    }


    return (
        <div className="App" style={{color: textColor}}>
            <VisibleContext.Provider value={{
                heading,
                textColor,
                toPrevTheme,
                toNextTheme,
                setCurrentTheme,
                themes,
                currentTheme,
                bgColor,
                carousel,
                setCarousel,
                initialStateSwipeable
            }}>
                <Content/>
            </VisibleContext.Provider>
        </div>
    );
}

function Content() {
    const location = useLocation();

    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState("fadeIn");

    useEffect(() => {
        if (location !== displayLocation) setTransitionStage("fadeOut");
    }, [location, displayLocation]);

    return (
        <div
            className={`${transitionStage}`}
            onAnimationEnd={() => {
                if (transitionStage === "fadeOut") {
                    setTransitionStage("fadeIn");
                    setDisplayLocation(location);
                }
            }}>
            <Routes location={displayLocation}>
                <Route path="/dev" element={<HomePage/>}/>
                <Route path="/dev/all" element={<All/>}/>
                <Route path="/dev/setup" element={<Setup/>}/>
                <Route path="/vysota89" element={<Vysota89/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </div>
    );
}
