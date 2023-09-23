import React from "react";

function PersonalInfoForm(){
    return(
        <>
            <form className="personalForm">
                <div className="boxText1">
                <div className="textbox1">
                    <input type="text" placeholder="Account ID"/>
                    <input type="text" placeholder="Account Posts" />
                </div>
                <div className="textbox1">
                    <input type="text" placeholder="Account images" />
                    <input type="text" placeholder="Account Create Date"/>
                </div>
                </div>
            </form>
        </>
    )
}

export default PersonalInfoForm;