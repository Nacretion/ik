import React from 'react';
import "./models/Loader.module.css";

const Loader = () => {
    const carousel = [" circle1", " circle2", " circle3", " circle4"]
    return (
        <div className="loader">
            <div className={"loader--circle" + carousel[0]}></div>
            <div className={"loader--circle" + carousel[1]}></div>
            <div className={"loader--circle" + carousel[2]}></div>
            <div className={"loader--circle" + carousel[3]}></div>
        </div>
    );
};

export default Loader;