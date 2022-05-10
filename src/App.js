import React, {useEffect, useState} from "react";
import './App.css';
import HomePage from "./pages/HomePage";
import {VisibleContext} from "./context";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {
    automobileTheme,
    cafeTheme,
    clothTheme,
    cosmeticsTheme,
    educationTheme,
    estateTheme,
    lawTheme,
    medicineTheme,
    productsTheme,
    repairTheme,
    sportTheme
} from "./themes/themes";
import All from "./pages/All";
// import Stories from 'stories-react';
// import 'stories-react/dist/index.css';


export default function App() {
    const [currentTheme, setCurrentTheme] = useState(0)
    const [textColor, changeTextColor] = useState("")
    const [bgColor, changeBgColor] = useState("")
    const [heading, changeHeading] = useState("")
    const [firstImage, setFirstImage] = useState("")
    const [secondImage, setSecondImage] = useState("")

    const navigate = useNavigate();

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
        switch (currentTheme) {
            case 1:
                changeTheme(
                    clothTheme.color,
                    clothTheme.backgroundColor,
                    clothTheme.heading,
                    "url('./images/1clothes.jpg') center",
                    "url('./images/2clothes.jpg') center")
                break;
            case 2:
                changeTheme(
                    cosmeticsTheme.color,
                    cosmeticsTheme.backgroundColor,
                    cosmeticsTheme.heading,
                    "url('./images/1cosmetic.jpg') center",
                    "url('./images/2cosmetic.jpg') center")
                break;
            case 3:
                changeTheme(
                    medicineTheme.color,
                    medicineTheme.backgroundColor,
                    medicineTheme.heading,
                    "url('./images/1clinic.jpg') center",
                    "url('./images/2clinic.jpg') center")
                break;
            case 4:
                changeTheme(
                    automobileTheme.color,
                    automobileTheme.backgroundColor,
                    automobileTheme.heading,
                    "url('./images/1auto.jpg') center",
                    "url('./images/2auto.jpg') center")
                break;
            case 5:
                changeTheme(
                    sportTheme.color,
                    sportTheme.backgroundColor,
                    sportTheme.heading,
                    "url('./images/1gym.jpeg') center",
                    "url('./images/2gym.jpg') center")
                break;
            case 6:
                changeTheme(
                    educationTheme.color,
                    educationTheme.backgroundColor,
                    educationTheme.heading,
                    "url('./images/1school.png') center",
                    "url('./images/2school.jpg') center")
                break;
            case 7:
                changeTheme(
                    lawTheme.color,
                    lawTheme.backgroundColor,
                    lawTheme.heading,
                    "url('./images/1law.jpg') center",
                    "url('./images/2law.jpg') center")
                break;
            case 8:
                changeTheme(
                    repairTheme.color,
                    repairTheme.backgroundColor,
                    repairTheme.heading,
                    "url('./images/1repair.jpg') center",
                    "url('./images/2repair.jpg') center")
                break;
            case 9:
                changeTheme(
                    estateTheme.color,
                    estateTheme.backgroundColor,
                    estateTheme.heading,
                    "url('./images/1estate.jpg') center",
                    "url('./images/2estate.jpg') center")
                break;

            case 10:
                changeTheme(
                    productsTheme.color,
                    productsTheme.backgroundColor,
                    productsTheme.heading,
                    "url('./images/1products.jpg') center",
                    "url('./images/2products.jpg') center")
                break;

            default:
                changeTheme(
                    cafeTheme.color,
                    cafeTheme.backgroundColor,
                    cafeTheme.heading,
                    "url('./images/1cafe.jpg') center",
                    "url('./images/2cafe.jpg') center")
                break;
        }
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
                setCurrentTheme
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
            </Routes>
        </div>
    );
}
