import React from "react";
import pika from "../assets/pikachu.jpeg";

function AccountForm(){
    return(
        <>
            <form className="accountForm">
                <div className="avatar">
                    <img src={pika} alt="" />
                    {/* <button>Edit</button> */}
                    <h1>Account name</h1>
                </div>
                <div className="boxText">
                <div className="textbox">
                    {/* <label htmlFor="">Email</label> */}
                    <input type="email" placeholder="Email" />
                    {/* <label htmlFor="">Username</label> */}
                    <input type="text" placeholder="Username" />
                </div>
                <div className="textbox">
                    {/* <label htmlFor="">Country</label> */}
                    <input type="text" placeholder="Country" />
                    {/* <label htmlFor="">City</label> */}
                    <input type="text" placeholder="City" />
                </div>
                </div>
                {/* <div className="accBTN">
                    <button id="save">Save</button>
                    <button id="delete">Delete</button>
                </div> */}
            </form>
        </>
    )
}


export default AccountForm;