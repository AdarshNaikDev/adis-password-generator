import React, { useState, useEffect, useRef } from 'react'
import Button from './Componenets/Button'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PasswordGen() {

    const inputRef = useRef(null); 

    const otpLen = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65]

    const [selectedPswdLen, setSelectedPswdLen] = useState(otpLen[4]);
    const [allowNumbers, setallowNumbers] = useState(true);
    const [allowUpperCase, setallowUpperCase] = useState(true);
    const [allowLowerCase, setallowLowerCase] = useState(true);
    const [allowSymbols, setAllowSymbols] = useState(true);
    const [generatedPswd, setGeneratedPswd] = useState("Click the button to generate a strong password");
    const [passwordGenerated, setPasswordGenerated] = useState(false);


    function handleCheckboxChange(e) {
        if (e.target.id === "allowNumbers") {
            //console.log("allow numbers")
            setallowNumbers(e.target.checked)
        }
        else if (e.target.id === "allowUpperCase") {
            //console.log("allow upper case")
            setallowUpperCase(e.target.checked);
        }
        else if (e.target.id === "allowLowerCase") {
            //console.log("allow lower case")
            setallowLowerCase(e.target.checked);
        }
        else if (e.target.id === "allowSymbols") {
            //console.log("allow symbols")
            setAllowSymbols(e.target.checked);
        }


    }


    function genPassword() {

        const numbers = "0123456789";
        const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const symbols = "!@#$%^&*()_+-=[]{}|;:<>?";

        let allowedChars = "";
        if (allowNumbers) allowedChars += numbers;
        if (allowUpperCase) allowedChars += uppercase;
        if (allowLowerCase) allowedChars += lowercase;
        if (allowSymbols) allowedChars += symbols;

        if (allowedChars.length === 0) {
            //alert("Unable to create a password with 1 or fewer available characters");
            setGeneratedPswd("Unable to create a password with 1 or fewer available characters");
        }

        let password = "";
        for (let i = 0; i < selectedPswdLen; i++) {
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }
        console.log("Your Password : ", password);
        if(password.includes("undefined"))
        {
            setGeneratedPswd("Unable to create a password with 1 or fewer available characters");
            setPasswordGenerated(false);
        }
        else{
            
            setGeneratedPswd(password)
            setPasswordGenerated(true);
        }
        
       

    }

    useEffect(() => {
        if (generatedPswd && inputRef.current && passwordGenerated) {
          inputRef.current.select(); // Select the input field text

          navigator.clipboard.writeText(generatedPswd) // Copy to clipboard
        .then(() => {

            
                toast.success("Password copied to clipboard! 🎉", {
                    position: "top-right",
                    autoClose: 800, // Close af 2 seconds
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    theme: "light",
                  });
            
          
        })
        .catch(err => console.error("Failed to copy:", err));
        }
      }, [generatedPswd,passwordGenerated]);


    return (
        <div className='main-div' >
            <div className='sec-one'>
                <div className='header-div'>
                    <span className="main-title">ADI's PASSWORD </span>
                </div>
                <div className='input-text'>
                    <input type='text'
                     placeholder='Click the button to generate a strong password' 
                     className='text-pswd' 
                        readOnly
                        value={generatedPswd}
                        ref={inputRef}
                     />
                </div>
            </div>

            <div className='btn-position'>
                <Button btnName="Generate Random Password" genPassword={genPassword} />
            </div>
            <div className='legend-style'>
                <fieldset>
                    <legend>Settings</legend>


                    <div className="settings-container">
                        {/* First Row */}
                        <div className="settings-row">
                            <div className="setting-item ">
                                Password length
                                <div className='neumorphic-dropdown'>
                                    <select className=" cursoor drop-down" value={selectedPswdLen}
                                        onChange={(e) => setSelectedPswdLen(Number(e.target.value))}
                                    >
                                        {
                                            otpLen.map((item, ind) => {
                                                return <option key={ind}>{item}</option>
                                            })
                                        }

                                    </select>
                                </div>

                            </div>
                            <div className="setting-item ">
                                Allow Numbers (123)
                                <input type="checkbox"
                                    className="checkbox"
                                    id="allowNumbers"
                                    onChange={handleCheckboxChange}
                                    checked={allowNumbers}
                                />
                                <label htmlFor="allowNumbers" className="custom-checkbox"></label>
                            </div>
                        </div>

                        {/* Second Row */}
                        <div className="settings-row">
                            <div className="setting-item ">
                                Allow Uppercase (ABC)

                                <input type="checkbox"
                                    className="checkbox"
                                    id="allowUpperCase"
                                    onChange={handleCheckboxChange}
                                    checked={allowUpperCase}
                                />
                                <label htmlFor="allowUpperCase" className="custom-checkbox"></label>
                            </div>
                            <div className="setting-item ">
                                Allow Lowercase (abc)

                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    id="allowLowerCase"
                                    onChange={handleCheckboxChange}
                                    checked={allowLowerCase} />
                                <label htmlFor="allowLowerCase" className="custom-checkbox"></label>
                            </div>
                        </div>

                        {/* Third Row */}
                        <div className="settings-row">
                            <div className="setting-item">
                                Allow Special characters (!@#)

                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    id="allowSymbols"
                                    onChange={handleCheckboxChange}
                                    checked={allowSymbols} />
                                <label htmlFor="allowSymbols" className="custom-checkbox"></label>
                            </div>

                        </div>
                    </div>


                </fieldset>
            </div>
            <ToastContainer />


        </div>
    )
}

export default PasswordGen