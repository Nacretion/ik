import React, {useContext, useState} from 'react';
import NavCircles from "../components/NavCircles";
import {ReactComponent as ArrowBottom} from "../svg/arrow-bottom.svg";
import {useNavigate} from "react-router-dom";
import {VisibleContext} from "../context";
import NavArrows from "../components/UI/NavArrows";
import {cards} from "../consts/consts";
import 'stories-react/dist/index.css';
import {useSwipeable} from 'react-swipeable';
import {alpha, Button, Menu, MenuItem, styled} from "@mui/material";
import StoriesContainer from "../components/StoriesContainer";
import MenuIcon from '@mui/icons-material/Menu';
import {RiSeparator} from "react-icons/all";

const stories = [
    {

        type: 'image',
        url: 'https://lh3.googleusercontent.com/_X4oEpRu4O-nv0KuFwJQV2zX5SLuwRg9fIM1_-Q29L50zDgRd2eLdEr0ZmLVk_cPLA4',
        duration: 1500,
    },
    {

        type: 'image',
        url: "https://www.soccerex.com/media/8004/img.jpg?anchor=center&mode=crop&width=750&height=422&rnd=131660981050000000",
        duration: 1500,
    }
]

export default function HomePage(options) {

    const [rotated, setRotated] = useState(false)
    const {
        heading, textColor, setCurrentTheme,
        currentTheme, indexes, toNextTheme,
        toPrevTheme, setCarousel, bgColor,
        initialStateSwipeable
    } = useContext(VisibleContext)

    const handlers = useSwipeable({
            onSwiped: (eventData) => {
                if (eventData.dir === "Left") toNextTheme()
                if (eventData.dir === "Right") toPrevTheme()
            }
        },
        initialStateSwipeable)



    const [modalOpen, setModalOpen] = React.useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    const handleStoriesEnd = () => {
        handleModalClose()
        this.forceUpdate()
    }


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl)
    const navigate = useNavigate()


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const StyledMenu = styled((props) => (
        <Menu
            elevation={0}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            {...props}

        />
    ))(({theme}) => ({
        '& .MuiPaper-root': {
            borderRadius: 6,
            marginTop: theme.spacing(1),
            minWidth: 180,
            color: textColor,
            backgroundColor: bgColor,
            boxShadow:
                'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            '& .MuiMenu-list': {},
            '& .MuiMenuItem-root': {
                '& .MuiSvgIcon-root': {
                    fontSize: 18,
                    color: theme.palette.text.secondary,
                    marginRight: theme.spacing(1.5),
                },
                '&:active': {
                    backgroundColor: alpha(
                        theme.palette.primary.main,
                        theme.palette.action.selectedOpacity,
                    ),
                },
                '&:hover': {
                    backgroundColor: alpha(textColor === "#ffffff" ? "#000" : "#fff", 0.3),
                },
            },
        },
    }));
    return (
        <>
            <header className="link-heading" style={{backgroundColor: bgColor}}>
                <p style={{marginLeft: "5px", textTransform: "none"}} className="heading">ik-Catalog</p>
                <div className="storiesContainer link-heading" >
                    <StoriesContainer modalOpen={modalOpen}
                             handleModalOpen={handleModalOpen}
                             handleModalClose={handleModalClose}
                             handleStoriesEnd={handleStoriesEnd}/>
                    <Button
                        sx={{border: "1px solid #fff", width: "60px", height: "60px"}}
                        onClick={handleClick}
                    ><MenuIcon style={{fill: textColor}}/></Button>
                    <StyledMenu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => {
                            setCarousel(["card1", "card2", "card3"])
                            navigate("/setup")
                        }} disableRipple>Создать сайт</MenuItem>
                        <MenuItem onClick={() => {
                            setCarousel(["card1", "card3", "card2"])
                            navigate("/setup")
                        }} disableRipple>Реклама на портале</MenuItem>
                        <MenuItem onClick={handleClose} disableRipple>Наши услуги</MenuItem>
                        {/*<MenuItem onClick={handleClose} disableRipple>Город</MenuItem>*/}
                    </StyledMenu>
                </div>
                <RiSeparator/>
                <div className="link-heading">
                    <p className="heading">{heading}</p>
                    <NavArrows/>
                </div>
            </header>
            <main style={{backgroundColor: (bgColor + "B3")}}>
                <div {...handlers}
                     className="cards-inner">
                    {cards[currentTheme].slice(indexes[0], indexes[1]).map(({image}) => (
                        <button
                            key={image}
                            style={{
                                background: image,
                                transform: rotated? "scaleX(-1)": ""
                            }}
                            className="card card-cafe" onClick={()=> {setRotated(!rotated)}}>
                            <div style={{
                                border: "1px solid #fff",
                                color: "rgb(255,255,255)",
                                backgroundColor: "rgba(0,0,0,0.54)",
                                textTransform: "uppercase"
                            }} className="circle-button">Лого
                            </div>
                        </button>
                    ))}
                </div>

            </main>
            <footer style={{backgroundColor: bgColor}}>
                <NavCircles textColor={textColor} setCurrentTheme={setCurrentTheme}/>
                <div className="arrow-inner link" onClick={() => navigate("/all")}>
                    <p className="heading">Каталог</p>
                    <ArrowBottom
                        style={textColor === "#ffffff" ? {
                            filter: "invert(100%) sepia(99%) saturate(0%) hue-rotate(282deg) brightness(113%) contrast(100%)",
                            transition: "1s"
                        } : {
                            filter: "invert(0%) sepia(62%) saturate(16%) hue-rotate(267deg) brightness(86%) contrast(100%)",
                            transition: "1s"
                        }
                        }
                        className="arrow"/>
                </div>
            </footer>
        </>
    );
};