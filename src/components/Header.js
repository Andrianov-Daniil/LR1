import React from "react";

export default function Header(){
    return(
        <header>
            <div>
                <span className="logo">GAMER</span>
                <ul className="nav">
                    <li>Про нас</li>
                    <li>Контакты</li>
                </ul>
            </div>
            <div className="presentation"></div>
        </header>
    );
}