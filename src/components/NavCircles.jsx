import React, {useContext} from 'react';
import {VisibleContext} from "../context";
import Tooltip from '@mui/material/Tooltip';
import {styled, tooltipClasses} from "@mui/material";

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
    const LightTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(() => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: "#000",
            color: {textColor},
            fontSize: 11,
        },
    }));
    return (
            <div className="buttons-inner">
                {buttons.map(({title, theme}) => (
                    <LightTooltip sx={{zIndex:1}} key={theme} title={title}>
                        <button
                            style={{
                                backgroundColor: themes[theme].backgroundColor,
                                color: textColor
                            }}
                            className={ currentTheme === theme ? "button circle-button active-circle" : "button circle-button"}
                            onClick={() => setCurrentTheme(theme)}/>
                    </LightTooltip>
                ))}
            </div>
    );
};

export default NavCircles;