import React from "react";
import { Routes , Route } from "react-router-dom";
import Card from "./Card";
import '../stylessheets/ContainerCard.css';

function ContainerCard () {
    return (
        <Routes>
            <Route path="/Seccion1" element={
                <div className="ContainerCard">
                        <Card 
                            title = 'PROGRAMADOR 0' 
                            p1 = 'Programador:' 
                            p2 = 'Nivel de poder: 0'
                        />
                        <Card 
                            title = 'PROGRAMADOR 1' 
                            p1 = 'Programador:' 
                            p2 = 'Nivel de poder: ∞'
                        />
                        <Card 
                            title = 'PROGRAMADOR 2' 
                            p1 = 'Programador:' 
                            p2 = 'Nivel de poder: ???'
                        />
                        <Card 
                            title = 'PROGRAMADOR ( )' 
                            p1 = 'Tu nombre aquí:' 
                            p2 = 'Nivel de poder: no-definido'
                        />
                </div>
            }/>
        </Routes>
    );
}

export default ContainerCard;