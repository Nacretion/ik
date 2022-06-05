import React from 'react';
import {Modal} from "@mui/material";
import {ReactComponent as CafeIcon} from "../svg/circles/food.svg";
import {ReactComponent as ProductsIcon} from "../svg/circles/products.svg";
import {ReactComponent as CosmeticIcon} from "../svg/circles/cosmetic.svg";
import {ReactComponent as ClothesIcon} from "../svg/circles/clothes.svg";
import {ReactComponent as GiftsIcon} from "../svg/circles/gifts.svg";
import {ReactComponent as GymIcon} from "../svg/circles/gym.svg";
import {ReactComponent as ClinicIcon} from "../svg/circles/clinic.svg";
import {ReactComponent as RepairIcon} from "../svg/circles/repair.svg";
import {ReactComponent as EstateIcon} from "../svg/circles/estate.svg";
import {ReactComponent as AutoIcon} from "../svg/circles/auto.svg";
import {stories} from "../consts/consts";
import classes from "./models/StoriesContainer.module.css"
import Stories from "stories-react";

const StoriesContainer = ({modalOpen, handleModalOpen, handleModalClose, handleStoriesEnd}) => {
    return (
        <div className={classes.buttonsInner}>
            <Modal
                open={modalOpen}
                onClose={handleModalClose}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center" }}
            >
                <Stories
                    onAllStoriesEnd={() => {
                        handleStoriesEnd()
                    }}
                    onClick={(e) => e.preventDefault()}
                    width="500px"
                    height="800px"
                    stories={stories}
                />
            </Modal>
            <div onClick={() => handleModalOpen()}
                 style={{backgroundColor: "#fff", border: "2px solid #fff", color: "#000"}} className={classes.circleButton}>
                О НАС
            </div>
            <div style={{backgroundColor: "#FF9A76", border: "2px solid #FF9A76"}} className={classes.circleButton}>
                <CafeIcon className={classes.svg}/>
            </div>
            <div style={{backgroundColor: "#FBD46D", border: "2px solid #FBD46D"}} className={classes.circleButton}>
                <ProductsIcon style={{fill: "#935353"}} className={classes.svg}/>
            </div>
            <div style={{backgroundColor: "#E8445F", border: "2px solid #E8445F"}} className={classes.circleButton}>
                <CosmeticIcon className={classes.svg}/>
            </div>
            <div style={{backgroundColor: "#9D65C9", border: "2px solid #9D65C9"}} className={classes.circleButton}>
                <ClothesIcon className={classes.svg}/>
            </div>
            <div style={{backgroundColor: "#14B1AB", border: "2px solid #14B1AB"}} className={classes.circleButton}>
                <GiftsIcon className={classes.svg}/>
            </div>
            <div style={{backgroundColor: "#EFB7B7", border: "2px solid #EFB7B7"}} className={classes.circleButton}>
                <GymIcon style={{fill: "#9D65C9"}} className={classes.svg}/>
            </div>
            <div style={{backgroundColor: "#669B9C", border: "2px solid #669B9C"}} className={classes.circleButton}>
                <ClinicIcon className={classes.svg}/>
            </div>
            <div style={{backgroundColor: "#D7E1F1", border: "2px solid #D7E1F1"}} className={classes.circleButton}>
                <RepairIcon style={{fill: "#E8505B"}} className="svg"/>
            </div>
            <div style={{backgroundColor: "#99B898", border: "2px solid #99B898"}} className={classes.circleButton}>
                <EstateIcon className={classes.svg}/>
            </div>
            <div style={{backgroundColor: "#125374", border: "2px solid #125374"}} className={classes.circleButton}>
                <AutoIcon className={classes.svg}/>
            </div>

        </div>
    );
};

export default StoriesContainer;