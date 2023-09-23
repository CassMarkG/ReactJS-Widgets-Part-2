import React, { useState } from "react";
import "../sideNav.css";
import AccountForm from "./AccountForm";
import CenterTabs from "./CenterTabs.jsx";
import PersonalInfoForm from "./PersonalInfoForm";


function Profile(){

    const [toggleState,setToggleState] = useState(1);
        const toggleTab = (index) => {
            setToggleState(index);
        }

    return(
        <section className="main">
            <div className="block-tabs">
                <button 
                    className={toggleState === 1 ? "tabs2 active-tabs2" : "block-tabs"}
                    onClick={() => toggleTab(1)}
                >Profile</button>
                <button 
                    className={toggleState === 2 ? "tabs2 active-tabs2" : "block-tabs"}
                    onClick={() => toggleTab(2)}
                >Account Info</button>
                <button 
                    className={toggleState === 3 ? "tabs2 active-tabs2" : "block-tabs"}
                    onClick={() => toggleTab(3)}
                >Personal Info</button>

            </div>
            <div className="content-tabs2">
                <div 
                    className={toggleState === 1 ? "content2 active-content2" : "content2"}
                >
                    <CenterTabs />
                
                </div>
                <div 
                    className={toggleState === 2 ? "content2 active-content2" : "content2"}
                >
                    <AccountForm />
                </div>
                <div 
                    className={toggleState === 3 ? "content2 active-content2" : "content2"}
                >
                   <PersonalInfoForm />
                   
                </div>
            </div>
        </section>
    )
}

export default Profile;