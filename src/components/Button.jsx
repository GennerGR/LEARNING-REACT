import React from "react";
import {Link} from "react-router-dom";
import '../stylessheets/Button.css'

function Button () {
    return (
        <>
            <Link className="Button" to = '/Seccion1'><p>Button1</p></Link>
            <Link className="Button" to = '/Seccion2'><p>Button2</p></Link>
            <Link className="Button" to = '/Seccion3'><p>Button3</p></Link>
        </>
    )
}


export default Button