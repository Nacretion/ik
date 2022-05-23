import React, {useState} from 'react';
import classes from "./models/Loader.models.css"
import "./models/Loader.models.css";

const Loader = () => {
    const [carousel, setCarousel] = useState([" circle1", " circle2", " circle3", " circle4"])
    return (
        <div className="loader">
            <div className={"loader--circle" + carousel[0]}> </div>
            <div className={"loader--circle" + carousel[1]}> </div>
            <div className={"loader--circle" + carousel[2]}> </div>
            <div className={"loader--circle" + carousel[3]}> </div>
        </div>
    );
};

export default Loader;