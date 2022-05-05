import './App.css';
import {IoAddOutline} from "react-icons/io5";
import {useEffect, useState} from "react";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {
    cafeTheme,
    clothTheme,
    cosmeticsTheme,
    medicineTheme,
    automobileTheme,
    sportTheme,
    educationTheme,
    lawTheme,
    repairTheme,
    estateTheme,
    productsTheme
} from "./themes/themes";
import NavCircles from "./components/NavCircles";
import Stories from 'react-insta-stories';


function App() {
    const [currentTheme, setCurrentTheme] = useState(0)
    const [textColor, changeTextColor] = useState("")
    const [bgColor, changeBgColor] = useState("")
    const [heading, changeHeading] = useState("")
    const [firstImage, setFirstImage] = useState("")
    const [secondImage, setSecondImage] = useState("")


    const story = [
        {
            duration: 400,
            content: ({ action, isPaused }) => {
                const handleClick = e => {
                    e.preventDefault();
                    action(isPaused ? "play" : "pause");
                };
                return (
                    <div onClick={handleClick}>
                        <h2>Hi</h2>
                        <span>{isPaused ? "Paused" : "Playing"}</span>
                    </div>
                );
            },
        },
        {
            duration: 400,
            content: ({ action, isPaused }) => {
                const handleClick = e => {
                    e.preventDefault();
                    action(isPaused ? "play" : "pause");
                };
                return (
                    <div onClick={handleClick}>
                        <h2>Hi</h2>
                        <span>{isPaused ? "Paused" : "Playing"}</span>
                    </div>
                );
            },
        },
    ];

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


    return (
        <div className="App" style={{color: textColor, backgroundColor: bgColor}}>
            <main>
                <div className="about">
                    <h1>О нас</h1>
                    <div className="buttons-inner">
                        <Stories
                            stories={story}
                            defaultInterval={1500}
                            width={432}
                            height={768}/>
                        <button className="button circle-button"></button>
                    </div>
                </div>
                <div className="cafe">
                    <div className="link-heading">
                        <h1>{heading}</h1>

                        <div>
                            <IoIosArrowBack onClick={toPrevTheme} className="arrow" size={44}/>
                            <IoIosArrowForward onClick={toNextTheme} className="arrow" size={44}/>
                        </div>
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

                        <button className="card card-add">
                            <div className="icon-contain">
                                <IoAddOutline size={24} style={{margin: "1vh"}}/>
                                Добавить сайт
                            </div>
                        </button>
                    </div>
                    <NavCircles textColor={textColor} setCurrentTheme={setCurrentTheme}/>
                </div>
            </main>
        </div>
    );
}

export default App;
