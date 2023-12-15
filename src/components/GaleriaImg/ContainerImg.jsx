import React from "react";
import { Route, Routes } from "react-router-dom";
import '../../stylessheets/GaleriaImg/ContainerImg.css'

function ContainerImg () {
    return (
        <Routes>
            <Route path="/seccion2" element = {
                <div className="ContainerImg">
                    <></>
                </div>
            }
            />
        </Routes>
    )
}

export default ContainerImg