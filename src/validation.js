import React, { useState } from "react";

function Validation() {
    const [nameErr, setNameErr] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [mobileNoErr, setMobileNoErr] = useState("");
   
    
    
    
function handleNameErr(e){
    const letters = /^[A-Za-z]+$/;
    (e.target.value.match(letters))?setNameErr(""):setNameErr("Invalid name")
}
function handleEmailErr(e){
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    (e.target.value.match(mailformat))?setEmailErr(""):setEmailErr("Invalid email")
}
function handleMobileNoErr(e){
    var numbers = /^[0-9]{10}$/;
    (e.target.value.match(numbers))?setMobileNoErr(""):setMobileNoErr("Invalid mobile number")
}

    return (
        <>
            
            <input
                className="name"
                type="text"
                placeholder="Enter name..."
                onChange={handleNameErr}
            />
           <span className={{color:"red"}}>{nameErr}</span>
            <br/><br/>
            <input
                className="email"
                type="email"
                placeholder="Enter email..."
                onChange={handleEmailErr}
            />
            <span className={{color:"red"}}>{emailErr}</span>
            <br/><br/>
            <input
                className="mblNo"
                type="text"
                placeholder="Enter mobile number..."
                onChange={handleMobileNoErr}
            />
            <span className={{color:"red"}}>{mobileNoErr}</span>
        </>
    )


}
export default Validation;