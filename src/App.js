import React, {useEffect, useState} from "react";
import './styles/App.scss';
import './styles/rootAnimation.css';
import {VisibleContext} from "./context";
import {Route, Routes, useLocation} from "react-router-dom";
import {themes, cards} from "./consts/consts"
import HomePage from "./pages/HomePage";
import All from "./pages/All";
import Setup from "./pages/Setup";



export default function App() {
    const [currentTheme, setCurrentTheme] = useState(0)
    const [textColor, changeTextColor] = useState("")
    const [bgColor, changeBgColor] = useState("")
    const [heading, changeHeading] = useState("")
    const [indexes, setIndexes] = useState([0,6])

    // const navigate = useNavigate();


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
        if (indexes[0] !== 0 && cards[currentTheme].length > 6) {
            setIndexes([indexes[0] - 6, indexes[1] - 6])
        }
        else if (currentTheme > 0) setCurrentTheme(currentTheme - 1)
        else setCurrentTheme(10)
    }
    const toNextTheme = () => {
        if (cards[currentTheme].length > indexes[1]) {
            setIndexes([indexes[0] + 6, indexes[1] + 6])
        } else {
            setIndexes([0, 6])
            if (currentTheme < 10) setCurrentTheme(currentTheme + 1)
            else setCurrentTheme(0)
        }
    }

    function listenWheelEvent(event) {
        event.deltaY > 0 ?
            toNextTheme()
            : toPrevTheme()
    }

    return (
        <div onWheel={listenWheelEvent.bind(this)} className="App" style={{color: textColor, backgroundColor: bgColor}}>
            <VisibleContext.Provider value={{
                heading,
                textColor,
                toPrevTheme,
                toNextTheme,
                setCurrentTheme,
                themes,
                currentTheme,
                bgColor,
                indexes
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
                <Route path="/" element={<HomePage/>}/>
                <Route path="/all" element={<All/>}/>
                <Route path="/setup" element={<Setup/>}/>
            </Routes>
        </div>
    );
}
