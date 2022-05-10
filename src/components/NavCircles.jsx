import React, {useContext} from 'react';
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
} from "../themes/themes";
import {VisibleContext} from "../context";

const NavCircles = () => {

    const { textColor, setCurrentTheme } = useContext(VisibleContext)
    return (
            <div className="buttons-inner">
                <button
                    style={{
                        backgroundColor: cafeTheme.backgroundColor,
                        borderColor: textColor
                    }}
                    title="Кафетерии"
                    onClick={() => setCurrentTheme(0)}
                    className="button circle-button" id="theme1"></button>
                <button
                    style={{
                        backgroundColor: clothTheme.backgroundColor,
                        borderColor: textColor
                    }}
                    title="Магазины одежды"
                    onClick={() => setCurrentTheme(1)}
                    className="button circle-button" id="theme2"></button>
                <button
                    style={{
                        backgroundColor: cosmeticsTheme.backgroundColor,
                        borderColor: textColor
                    }}
                    title="Магазины косметики"
                    onClick={() => setCurrentTheme(2)}
                    className="button circle-button" id="theme3"></button>
                <button
                    style={{
                        backgroundColor: medicineTheme.backgroundColor,
                        borderColor: textColor
                    }}
                    title="Медицинские учереждения"
                    onClick={() => setCurrentTheme(3)}
                    className="button circle-button" id="theme4"></button>
                <button
                    style={{
                        backgroundColor: automobileTheme.backgroundColor,
                        borderColor: textColor
                    }}
                    title="Автоуслуги"
                    onClick={() => setCurrentTheme(4)}
                    className="button circle-button" id="theme5"></button>
                <button
                    style={{
                        backgroundColor: sportTheme.backgroundColor,
                        borderColor: textColor
                    }}
                    title="Спортивные учереждения"
                    onClick={() => setCurrentTheme(5)}
                    className="button circle-button" id="theme6"></button>
                <button
                    style={{
                        backgroundColor: educationTheme.backgroundColor,
                        borderColor: textColor
                    }}
                    title="Образовательные учереждения"
                    onClick={() => setCurrentTheme(6)}
                    className="button circle-button" id="theme7"></button>
                <button
                    style={{
                        backgroundColor: lawTheme.backgroundColor,
                        borderColor: textColor
                    }}
                    title="Юридические услуги"
                    onClick={() => setCurrentTheme(7)}
                    className="button circle-button" id="theme8"></button>
                <button
                    style={{
                        backgroundColor: repairTheme.backgroundColor,
                        borderColor: textColor
                    }}
                    title="Услуги ремонта"
                    onClick={() => setCurrentTheme(8)}
                    className="button circle-button" id="theme9"></button>
                <button
                    style={{
                        backgroundColor: estateTheme.backgroundColor,
                        borderColor: textColor
                    }}
                    title="Недвижимость"
                    onClick={() => setCurrentTheme(9)}
                    className="button circle-button" id="theme10"></button>
                <button
                    style={{
                        backgroundColor: productsTheme.backgroundColor,
                        borderColor: textColor
                    }}
                    title="Продукты"
                    onClick={() => setCurrentTheme(10)}
                    className="button circle-button" id="theme11"></button>
            </div>
    );
};

export default NavCircles;