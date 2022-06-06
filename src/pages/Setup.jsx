import React, {useContext, useEffect, useState} from 'react';
import {ReactComponent as ArrowBack} from "../svg/arrow-back.svg";
import {ReactComponent as ArrowForward} from "../svg/arrow-forward.svg";
import NavArrows from "../components/UI/NavArrows";
import {VisibleContext} from "../context";
import {useNavigate} from "react-router-dom";
import NavCircles from "../components/NavCircles";
import CheckBox from "../components/UI/CheckBox";
import {prices} from "../consts/consts";
import {alpha, Button, InputAdornment, Modal, TextField, ToggleButton, ToggleButtonGroup} from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import {ReactComponent as VKIcon} from "../svg/socNetworks/VK.svg";
import {ReactComponent as WhatsAppIcon} from "../svg/socNetworks/WhatsApp.svg";
import {ReactComponent as TelegramIcon} from "../svg/socNetworks/Telegram.svg";
import {useSwipeable} from "react-swipeable";


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

            setCurrentPrice(handleOptionsChanged(0))
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
    const handleOptionsChanged = (period) => {
        return prices.default[period] +
            photos * prices.photos[period] +
            cart * prices.cart[period] +
            menu * prices.services[period] +
            networks * prices.socNetworks[period]
    }

    const [modalOpen, setModalOpen] = React.useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    return (
        <>
            <Modal
                open={modalOpen}
                onClose={handleModalClose}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                {carousel[1] === "card3" ? <Card3Modal feedBack={feedback} toHomePage={toHomePage}/> :
                    carousel[1] === "card2" ? <Card2Modal currentPrice={(period) => handleOptionsChanged(period)}/> : <Card1Modal/>

                }
            </Modal>
            <header style={{backgroundColor: bgColor}}>
                <div className="linkHeading">
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
            <main {...handlers} style={{backgroundColor: (bgColor + "B3")}}>
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
                            <div className="preview" id="site--preview">
                            </div>
                            <div className="styled-input-container styled-input--square">
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
            <footer style={{marginTop: "70px", backgroundColor: bgColor}}>
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
                        <p style={{fontSize: "18pt"}}>Выберите категорию</p>
                    </div>
                    <NavCircles/>
                </div>
                <button style={{borderColor: textColor, color: textColor}} className="submit" onClick={handleModalOpen}>
                    <p>Отправить запрос</p>
                </button>
            </footer>
        </>
    );
};
const Card3Modal = ({toHomePage, feedBack,}) => {

    const {textColor, bgColor} = useContext(VisibleContext)
    const [vk, setVk] = useState(false)
    const [whatsUp, setWhatsUp] = useState(false)
    const [telegram, setTelegram] = useState(false)


    return (
        <>
            <div style={{
                backgroundColor: alpha(bgColor, .9),
            }} className="modalCard">
                <TextField
                    label="Имя"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircleIcon/>
                            </InputAdornment>
                        ),
                    }}
                    size="small"
                    variant="filled"
                    sx={{transform: "scale(.8)"}}
                />
                <TextField
                    label="Телефон"
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
                {toHomePage ?
                    <TextField
                        label="Адрес сайта"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LocationOnIcon/>
                                </InputAdornment>
                            ),
                        }}
                        size="small"
                        variant="filled"
                        sx={{transform: "scale(.8)"}}
                    /> : ""
                }
                {feedBack ?
                    <>
                        <p className="heading">мессенджер в каталог</p>
                        <div style={{display: "flex", gap: "10px", transform: "scale(1.3)"}}>
                            <CheckBox
                                id={"check12"} checked={vk}
                                onChange={e => {
                                    setVk(e.target.checked)
                                }}><VKIcon/></CheckBox>
                            <CheckBox
                                id={"check13"} checked={whatsUp}
                                onChange={e => {
                                    setWhatsUp(e.target.checked)
                                }}><WhatsAppIcon/></CheckBox>
                            <CheckBox
                                id={"check14"} checked={telegram}
                                onChange={e => {
                                    setTelegram(e.target.checked)
                                }}><TelegramIcon/></CheckBox>
                        </div>
                    </> : ""
                }

                <Button style={{
                    color: textColor,
                    borderBottom: "1px solid " + textColor,
                    paddingBottom: "1px",
                    marginTop: "10px"
                }}>Отправить заявку</Button>
            </div>
        </>
    )
}

const Card2Modal = ({currentPrice}) => {

    const {textColor, bgColor} = useContext(VisibleContext)

    const [alignment, setAlignment] = React.useState('0');
    const [pageOnOurSite, setPageOnOurSite] = React.useState(false);
    const [domain, setDomain] = React.useState(false);

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (

        <div style={{
            backgroundColor: alpha(bgColor, .9),
        }} className="modalCard">
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                size="small"
            >
                <ToggleButton value="0">Месяц</ToggleButton>
                <ToggleButton value="1">Квартал</ToggleButton>
                <ToggleButton value="2">Год</ToggleButton>
            </ToggleButtonGroup>
            <div className="preview" id="price--preview">
                <p>{currentPrice(parseInt(alignment))} &#8381;</p>
            </div>
            <div className="styled-input--square">
                <CheckBox
                    id={"check15"} checked={pageOnOurSite}
                    onChange={e => {
                        setPageOnOurSite(e.target.checked)
                    }}>
                    Ваша страница на нашем сайте <br/>
                    <span style={{color: "#fff"}}>k89.ru/имя сайта</span>
                </CheckBox>
                <CheckBox
                    id={"check16"} checked={domain}
                    onChange={e => {
                        setDomain(e.target.checked)
                    }}>Отдельный адрес сайта, <br/>домен, размещение</CheckBox>
            </div>

            <TextField
                fullWidth
                label="Название компании"
                size="small"
                variant="filled"
                sx={{transform: "scale(.8)"}}/>
            <TextField
                fullWidth
                label="Имя"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircleIcon/>
                        </InputAdornment>
                    ),
                }}
                size="small"
                variant="filled"
                sx={{transform: "scale(.8)"}}
            />
            <TextField
                fullWidth
                label="Телефон"
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
            <button style={{borderColor: textColor, color: textColor, width: "80%", marginTop: "5px"}} className="submit">
                <p style={{margin:"0"}}>Отправить запрос</p>
            </button>
        </div>
    )
}
const Card1Modal = () => {
    return (
        <>
        </>
    )
}