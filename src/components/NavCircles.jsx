import React, {useContext} from 'react';
import {VisibleContext} from "../context";

const NavCircles = () => {

    const { textColor, setCurrentTheme, themes, currentTheme} = useContext(VisibleContext)

    const buttons = [
        { title: "Кафетерии", theme: 0 },
        { title: "Магазины одежды", theme: 1 },
        { title: "Магазины косметики", theme: 2 },
        { title: "Медицинские учереждения", theme: 3 },
        { title: "Автоуслуги", theme: 4 },
        { title: "Спортивные учереждения", theme: 5 },
        { title: "Образовательные учереждения", theme: 6 },
        { title: "Юридические услуги", theme: 7 },
        { title: "Услуги ремонта", theme: 8 },
        { title: "Недвижимость", theme: 9 },
        { title: "Продукты", theme: 10 },
    ]

    return (
            <div className="buttons-inner">
                {buttons.map(({title, theme}) => (
                    <button
                        key={theme}
                        style={{
                            backgroundColor: themes[theme].backgroundColor,
                            color: textColor
                        }}
                        title={title}
                        className={ currentTheme === theme ? "button circle-button active-circle" : "button circle-button"}
                        onClick={() => setCurrentTheme(theme)}/>
                ))}
            </div>
    );
};

export default NavCircles;