import React, { useState } from "react";
import pika from "../assets/pikachu.jpeg";
import smudge from "../assets/smudge.jpeg";
import dat from "../assets/datcat.jpeg";
import bonk from "../assets/bonk.jpg";
import sideeye from "../assets/sideeye.jpg";
import potato from "../assets/potato.png";
import "../sideNav.css";

function CenterTabs(){
    const [toggleState2,setToggleState2] = useState(1);
        const toggleTab2 = (index) => {
            setToggleState2(index);
        }
    return(
        <>
            <div className="bloc-tabs3">
                <button 
                    className={toggleState2 === 1 ? "tabs3 active-tabs3" : "bloc-tabs3"}
                    onClick={() => toggleTab2(1)}
                >Posts</button>
                <button 
                    className={toggleState2 === 2 ? "tabs3 active-tabs3" : "bloc-tabs3"}
                    onClick={() => toggleTab2(2)}
                >Images</button>
                <button 
                    className={toggleState2 === 3 ? "tabs3 active-tabs3" : "bloc-tabs3"}
                    onClick={() => toggleTab2(3)}
                >Saved</button>
            </div>
            <div className="content-tabs3">
                <div 
                    className={toggleState2 === 1 ? "content3 active-content3" : "content3"}
                >
                    <div className="imageContainer">
                        <img src={pika} alt="" />
                        <img src={smudge} alt="" />
                        <img src={dat} alt="" />
                        <img src={pika} alt="" />
                        <img src={smudge} alt="" />
                        <img src={dat} alt="" />
                    </div>
                </div>
                <div 
                        className={toggleState2 === 2 ? "content3 active-content3" : "content3"}
                    >
                        
                        <div className="imageContainer">
                            <img src={bonk} alt="" />
                            <img src={sideeye} alt="" />
                            <img src={potato} alt="" />
                            <img src={bonk} alt="" />
                            <img src={sideeye} alt="" />
                            <img src={potato} alt="" />
                            <img src={bonk} alt="" />
                            <img src={sideeye} alt="" />
                            <img src={potato} alt="" />
                           
                        </div>
                    </div>
                    <div 
                        className={toggleState2 === 3 ? "content3 active-content3" : "content3"}
                    >
                        <div className="imageContainer">
                            <img src={pika} alt="" />
                            <img src={smudge} alt="" />
                            <img src={dat} alt="" />
                            <img src={pika} alt="" />
                            <img src={smudge} alt="" />
                            <img src={dat} alt="" />
                        </div>
                    </div>
            </div>
        </>
    )
}

export default CenterTabs;