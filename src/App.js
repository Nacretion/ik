import React, {useEffect, useState} from "react";
import './App.css';
import HomePage from "./pages/HomePage";
import {VisibleContext} from "./context";
import {Route, Routes, useLocation} from "react-router-dom";
import {themes} from "./themes/themes"
import All from "./pages/All";
import {Setup} from "./pages/Setup";
// import Stories from 'stories-react';
// import 'stories-react/dist/index.css';



export default function App() {
    const [currentTheme, setCurrentTheme] = useState(0)
    const [textColor, changeTextColor] = useState("")
    const [bgColor, changeBgColor] = useState("")
    const [heading, changeHeading] = useState("")
    const [firstImage, setFirstImage] = useState("")
    const [secondImage, setSecondImage] = useState("")

    // const navigate = useNavigate();

    // const stories = [
    //     {
    //
    //         type: 'image',
    //         url: 'https://lh3.googleusercontent.com/_X4oEpRu4O-nv0KuFwJQV2zX5SLuwRg9fIM1_-Q29L50zDgRd2eLdEr0ZmLVk_cPLA4',
    //         duration: 1500,
    //     },
    //     {
    //
    //         type: 'image',
    //         url: "https://www.soccerex.com/media/8004/img.jpg?anchor=center&mode=crop&width=750&height=422&rnd=131660981050000000",
    //         duration: 1500,
    //     }
    // ]

    const changeTheme = (color, bgColor, heading, fImage, sImage) => {
        changeTextColor(color)
        changeBgColor(bgColor)
        changeHeading(heading)
        setFirstImage(fImage)
        setSecondImage(sImage)
    }

    useEffect(() => {
        const {color, backgroundColor, heading, fImage, sImage} = themes[currentTheme]
        changeTheme(color, backgroundColor, heading, fImage, sImage)
    }, [currentTheme, setCurrentTheme])


    const toPrevTheme = () => {
        if (currentTheme > 0) setCurrentTheme(currentTheme - 1)
        else setCurrentTheme(10)
    }
    const toNextTheme = () => {
        if (currentTheme < 10) setCurrentTheme(currentTheme + 1)
        else setCurrentTheme(0)
    }

    function listenWheelEvent(event) {
        // eslint-disable-next-line no-unused-expressions
        event.deltaY > 0 ?
            toNextTheme()
            : toPrevTheme()
    }

    return (

        <div onWheel={listenWheelEvent.bind(this)} className="App" style={{color: textColor, backgroundColor: bgColor}}>
            <VisibleContext.Provider value={{
                heading,
                textColor,
                firstImage,
                secondImage,
                toPrevTheme,
                toNextTheme,
                setCurrentTheme,
                themes,
                currentTheme,
                bgColor
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
            }}
        >
            <Routes location={displayLocation}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/all" element={<All/>}/>
                <Route path="/setup" element={<Setup/>}/>
            </Routes>
        </div>
    );
}
