import React, {useContext, useEffect, useState} from 'react';
import {ReactComponent as ArrowBack} from "../svg/arrow-back.svg";
import {ReactComponent as ArrowForward} from "../svg/arrow-forward.svg";
import NavArrows from "../components/UI/NavArrows";
import {VisibleContext} from "../context";
import {useNavigate} from "react-router-dom";
import NavCircles from "../components/NavCircles";
import CheckBox from "../components/UI/CheckBox";
import {prices} from "../consts/consts";
import {InputAdornment, TextField} from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';


import {ReactComponent as VKIcon} from "../svg/socNetworks/VK.svg";
import {ReactComponent as WhatsAppIcon} from "../svg/socNetworks/WhatsApp.svg";
import {ReactComponent as TelegramIcon} from "../svg/socNetworks/Telegram.svg";
import {useSwipeable} from "react-swipeable";
import * as emailjs from "emailjs-com";


export default function Setup({funcPrev}) {
    const {textColor, bgColor, carousel, setCarousel, initialStateSwipeable} = useContext(VisibleContext)
    const [currentPrice, setCurrentPrice] = useState(0)

    const [photos, setPhotos] = useState(false);
    const [cart, setCart] = useState(false);
    const [menu, setMenu] = useState(false);
    const [networks, setNetworks] = useState(false);

    const [catalog, setCatalog] = useState(false);
    const [feedback, setFeedback] = useState(false);
    const [stories, setStories] = useState(false);
    const [toHomePage, setToHomePage] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        if (carousel[1] === "card2") {
            setCurrentPrice(
                prices.default[0] +
                photos * prices.photos[0] +
                cart * prices.cart[0] +
                menu * prices.services[0] +
                networks * prices.socNetworks[0])
        }
    }, [photos, cart, menu, networks, carousel])

    const labelStyle = {
        color: textColor,
        marginLeft: "5px",
        textShadow: "1px 1px " + (textColor === "#ffffff" ? "#000" : "#fff")
    }
    const hiddenCardStyle = {backgroundColor: bgColor, opacity: "1"}
    const hiddenTextStyle = {opacity: "0"}

    const handlers = useSwipeable({
            onSwiped: (eventData) => {
                if (eventData.dir === "Left") setCarousel([carousel[2], carousel[0], carousel[1]])
                if (eventData.dir === "Right") setCarousel([carousel[1], carousel[2], carousel[0]])
            }
        },
        initialStateSwipeable);


    const sendEmail = () => {
        emailjs.send("service_wtoob9m", "template_k3gucfa", {
            from_name: "Никита Ананев",
            to_name: "Игорь Т",
            message: "Дарова",
            reply_to: "хз че сюда писать ",
        }).then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
    }
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
                    <NavArrows funcNext={() => setCarousel([carousel[2], carousel[0], carousel[1]])}
                               funcPrev={() => setCarousel([carousel[1], carousel[2], carousel[0]])}/>
                </div>
            </header>
            <main {...handlers} style={{height: "500px"}}>
                <div className="cards-wrapper">
                    <div className={"card-inner " + carousel[0]}>
                        <p style={hiddenTextStyle}>&nbsp;</p>
                        <div style={hiddenCardStyle} className="card"></div>
                    </div>
                    <div className={"card-inner " + carousel[1]}>
                        <p style={hiddenTextStyle}>&nbsp;</p>
                        <div style={hiddenCardStyle} className="card"></div>
                    </div>
                    <div className={"card-inner " + carousel[2]}>
                        <p style={hiddenTextStyle}>&nbsp;</p>
                        <div style={hiddenCardStyle} className="card"></div>
                    </div>
                    <div className={"card-inner " + carousel[0]}
                         onClick={() => setCarousel(["card2", "card1", "card3"])}>
                        <p>продвижение в вк</p>
                        <div className="card"></div>
                    </div>
                    <div className={"card-inner " + carousel[1]}
                         onClick={() => setCarousel(["card1", "card2", "card3"])}>
                        <p>разработать сайт</p>
                        <div className="card">
                            <div className="styled-input-container styled-input--square">
                                <div className="">
                                    ioooo
                                </div>
                                <CheckBox
                                    id="check1" disabled checked readOnly>Стилизация сайта под
                                    дизайн компании</CheckBox>
                                <CheckBox
                                    id={"check2"} checked={photos}
                                    onChange={e => {
                                        setPhotos(e.target.checked)
                                    }}>Фотографии заведения</CheckBox>
                                <CheckBox
                                    id={"check3"} checked={menu}
                                    onChange={e => {
                                        setMenu(e.target.checked)
                                    }}>Меню с фотографиями,
                                    описанием и ценой</CheckBox>
                                <CheckBox
                                    id={"check4"} checked={cart}
                                    onChange={e => {
                                        setCart(e.target.checked)
                                    }}>Функция корзины с
                                    выбором товара и отправки заявки</CheckBox>
                                <CheckBox
                                    id={"check5"} checked={networks}
                                    onChange={e => {
                                        setNetworks(e.target.checked)
                                    }}>обратная связь через
                                    мессенджеры <VKIcon/><TelegramIcon/><WhatsAppIcon/></CheckBox>
                                <label style={{color: "#000", fontSize: "12pt"}}>
                                    Оплата в месяц:
                                    <span style={labelStyle}>
                                            {currentPrice} &#8381;</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={"card-inner " + carousel[2]}
                         onClick={() => setCarousel(["card1", "card3", "card2"])}>
                        <p>добавить данные</p>
                        <div className="card">
                            <div className="styled-input-container styled-input--square">
                                <CheckBox
                                    id={"check6"} checked={catalog}
                                    onChange={e => {
                                        setCatalog(e.target.checked)
                                    }}>В КАТАЛОГ НА САЙТЕ</CheckBox>
                                <TextField
                                    size="small" fullWidth label="название компании" variant="filled"
                                    sx={{transform: "scale(.8)"}}/>
                                <TextField
                                    fullWidth
                                    label="телефон"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LocalPhoneIcon/>
                                            </InputAdornment>
                                        ),
                                    }}
                                    size="small"
                                    variant="filled"
                                    sx={{transform: "scale(.8)"}}
                                />
                                <TextField
                                    label="адрес"
                                    fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LocationOnIcon/>
                                            </InputAdornment>
                                        ),
                                    }}
                                    sx={{display: "flex", transform: "scale(.8)"}}
                                    size="small"
                                    variant="filled"
                                />
                                <CheckBox
                                    id={"check7"} checked={feedback}
                                    onChange={e => {
                                        setFeedback(e.target.checked)
                                    }}>обратная связь из каталога
                                    сайта через мессенджеры:<br/>
                                    <span style={labelStyle}>100&#8381;</span>
                                </CheckBox>
                                <CheckBox
                                    id={"check8"} checked={stories}
                                    onChange={e => {
                                        setStories(e.target.checked)
                                    }}>доступ к рекламе
                                    на сайте в историях<br/>
                                    <span style={labelStyle}>99&#8381;/мес</span>
                                </CheckBox>
                                <CheckBox
                                    id={"check9"} checked={toHomePage}
                                    onChange={e => {
                                        setToHomePage(e.target.checked)
                                    }}>добавить ваш сайт
                                    на главную страницу<br/>
                                    <span style={labelStyle}>890&#8381;/мес</span>
                                </CheckBox>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
            <footer style={{marginTop: "70px"}}>
                <div>
                    <div className="heading arrow-inner" style={{marginBottom: "10px"}}>
                        <ArrowForward
                            style={
                                textColor === "#ffffff" ? {
                                    filter: "invert(100%) sepia(99%) saturate(0%) hue-rotate(282deg) brightness(113%) contrast(100%)",
                                    transition: ".5s"
                                } : {
                                    filter: "invert(0%) sepia(62%) saturate(16%) hue-rotate(267deg) brightness(86%) contrast(100%)",
                                    transition: ".5s"
                                }
                            } className="arrow m-right"/>
                        <p>Выберите категорию</p>
                    </div>
                    <NavCircles/>
                </div>
                <button style={{borderColor: textColor, color: textColor}} className="submit"><p>Отправить запрос</p>
                </button>
            </footer>
        </>
    );
};
