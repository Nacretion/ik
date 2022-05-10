import React from "react"
import {Navigate, Route} from "react-router-dom";
import Homepage from "../pages/HomePage";


export const routes = [
    <Route exact path="/" element={<Homepage/>}/>,
    <Route exact path="/HomePage" element={<Navigate to="/"/>}/>,
]