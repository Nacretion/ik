import React from 'react';
import classes from "./Vysota.module.scss";
import {ReactComponent as ArrowBottom} from "../../svg/arrow-bottom.svg";
import {ReactComponent as ArrowTop} from "../../svg/arrow-top.svg";
import {ReactComponent as Vysota} from "./images/vysota.svg";

import {ReactComponent as WhatsAppIcon} from "../../svg/socNetworks/WhatsApp.svg";
import {ReactComponent as TelegramIcon} from "../../svg/socNetworks/Telegram.svg";
import png1 from "./images/1.png"
import png2 from "./images/2.png"
import png3 from "./images/3.png"
import png4 from "./images/4.png"
import png5 from "./images/5.png"
import png6 from "./images/6.png"
import png7 from "./images/7.png"

const Vysota89 = () => {
    document.title = "Высота89"
    return (
        <div className={classes.Vysota} id={"slide0"}>
            <header className={classes.header}>
                <Vysota/>
                <div className={classes.inRow}>
                    <WhatsAppIcon className={classes.svg}/>
                    <TelegramIcon className={classes.svg}/>
                    <p className={classes.heading}>+7-922-452-26-74</p>
                </div>
            </header>
            <main className={classes.main}>
                <div className={classes.container}>
                        <p className={classes.heading}>
                            ВЫСОТНЫЕ<br/> РАБОТЫ<br/> ЛЮБОЙ<br/> СЛОЖНОСТИ <br/> В НАДЫМЕ
                        </p>
                        <img alt="ВЫСОТНЫЕ РАБОТЫ ЛЮБОЙ СЛОЖНОСТИ В НАДЫМЕ"
                             className={classes.heading + " " + classes.image} src={png1}/>
                </div>
                <nav className={classes.inRow}>
                    <p onClick={()=> {
                        document.getElementById("slide0").scrollTop = window.innerHeight
                    }} className={classes.heading}>Прайс услуг</p>
                    <ArrowBottom className={classes.svg}/>
                </nav>
                <div className={classes.container} style={{flexDirection: "row-reverse"}} id={"slide1"}>
                    <p className={classes.heading}>
                        Гидроизоляция окон<br/>и балкона<br/><br/>
                        <span> 5000 &#8381;./м2</span>
                    </p>
                    <img alt="Гидроизоляция окон и балкона" src={png2}
                         className={classes.heading + " " + classes.image}/>
                </div>
                <div className={classes.container}>
                    <p className={classes.heading}>
                        Утепление межпанельных швов<br/><br/>
                        <span>2500 &#8381;./м2</span>
                    </p>
                    <img alt="Утепление межпанельных швов" src={png3}
                         className={classes.heading + " " + classes.image}/>
                </div>
                <div className={classes.container}
                     style={{flexDirection: "row-reverse"}}>
                    <p className={classes.heading}>
                        Монтаж кондиционера<br/><br/>
                        <span>5000 &#8381;./м2</span>
                    </p>
                    <img alt="Монтаж кондиционера" src={png4}
                         className={classes.heading + " " + classes.image} />
                </div>
                <div className={classes.container}>
                    <p className={classes.heading}>
                        Ремонт кровли<br/><br/>
                        <span>1750 &#8381;./м2</span>
                    </p>
                    <img alt="Ремонт кровли" src={png5}
                         className={classes.heading + " " + classes.image} />
                </div>
                <div className={classes.container} style={{flexDirection: "row-reverse"}}>
                    <p className={classes.heading}>
                        Монтаж баннера<br/><br/>
                        <span>750 &#8381;./м2</span>
                    </p>
                    <img alt="Монтаж баннера" className={classes.heading + " " + classes.image} src={png6}/>
                </div>
                <div className={classes.container + " " + classes.lastContainer}>
                    <div className={classes.heading}>
                        Контакты
                        <label htmlFor="email">ПОЧТА</label>
                        <p id="email">romero_omsk@mail.ru</p>
                        <label htmlFor="group">группа ВК</label>
                        <p id="group">vk.com/club204496179</p>
                        <label htmlFor="call">ПОЗВОНИТЬ</label>
                        <p id="call">+7-922-452-26-74</p>
                        <label htmlFor={classes.soc}>ПИШИТЕ НАМ  В  МЕССЕНДЖЕРЫ</label>
                        <p className={classes.soc}>
                            <WhatsAppIcon className={classes.svg}/>
                            <TelegramIcon className={classes.svg}/>
                        </p>

                    </div>
                    <img alt="Монтаж баннера" className={classes.heading + " " + classes.image} src={png7}/>
                </div>
            </main>
            <footer className={classes.footer}>
                <p>ИП Карелин Р.С.</p>
                <div onClick={() => {
                    document.getElementById("slide0").scrollTop = 0
                }} className={classes.inRow}>
                    <p>ГЛАВНАЯ</p>
                    <ArrowTop className={classes.svg}/>
                </div>
            </footer>
        </div>
    );
};

export default Vysota89;