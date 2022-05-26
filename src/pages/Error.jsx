import React, {useState} from 'react';
import {ReactComponent as Squidward} from "../svg/404/Squidward.svg";
import {useNavigate} from "react-router-dom";
import classes from "../styles/Error.module.scss"


const Error = () => {
    const navigate = useNavigate()
    const [buttonPressed, setButtonPressed] = useState(false)

    setTimeout(() => {
        if(buttonPressed) {
            setButtonPressed(false)
        }
    }, 2000)

    return (
        <main style={{fontFamily: "AnimeAce"}}>
            <div className={classes.svgContainer}>
                <Squidward className={classes.svg} />
                <div>
                    <p className="heading" style={{fontSize: "30pt"}}>404</p>
                    <p  style={{fontSize: "26pt", marginBottom: "10px"}}>Not Found</p>
                    <p style={{fontSize: "16pt", color: "#00ffc0"}}>такой страницы не существует</p>
                    <div className={classes.buttonContainer} style={{display: "flex",margin: "20px", marginLeft: "0"}}>
                        <button className={classes.button + " " + classes.homeButton} onClick={() => navigate("/")}>
                            <p>
                                домой
                            </p>
                        </button>
                        <button className={classes.button} onClick={() => setButtonPressed(true)}><p>{buttonPressed? "Упс... Не получится": "сообщить об ошибке"}</p></button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Error;