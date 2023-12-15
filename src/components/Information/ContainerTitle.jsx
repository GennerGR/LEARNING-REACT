import React from "react";
import MainTitle from "./MainTitle";
import '../../stylessheets/Information/ContainerTitle.css'

function ContainerTitleText () {
    return (
        <div className="container-title">
            <MainTitle 
                Maintitle = {'This is a Title'}
            />
        </div>
    )
}

export default ContainerTitleText
