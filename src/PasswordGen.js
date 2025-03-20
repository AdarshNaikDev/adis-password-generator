import React from 'react'
import Button from './Componenets/Button'


function PasswordGen() {

    function genPassword(){
        console.log("btn clicked")
    }


    return (
        <div className='main-div' >
            <div className='sec-one'>
                <div className='header-div'>
                    <span className="main-title">ADI's PASSWORD </span>
                </div>
                <div className='input-text'>
                    <input type='text' placeholder='Click the button to generate a strong password' className='text-pswd' readOnly />
                </div>
            </div>

            <div className='btn-position'>
                <Button btnName="Generate Random Password"  genPassword={genPassword} />
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
                                <select className=" cursoor drop-down">
                                    <option>10</option>
                                    <option>20</option>
                                </select>
                                </div>
                                
                            </div>
                            <div className="setting-item ">
                                Allow Numbers
                                <input type="checkbox" className="checkbox" id="allowNumbers" />
                                <label htmlFor="allowNumbers" className="custom-checkbox"></label>
                            </div>
                        </div>

                        {/* Second Row */}
                        <div className="settings-row">
                            <div className="setting-item ">
                                Allow Uppercase (ABC)
                                
                                <input type="checkbox" className="checkbox" id="allowUpperCase" />
                                <label htmlFor="allowUpperCase" className="custom-checkbox"></label>
                            </div>
                            <div className="setting-item ">
                                Allow Lowercase (abc)
                                
                                <input type="checkbox" className="checkbox" id="allowLowerCase" />
                                <label htmlFor="allowLowerCase" className="custom-checkbox"></label>
                            </div>
                        </div>

                        {/* Third Row */}
                        <div className="settings-row">
                            <div className="setting-item">
                                 Allow Symbols (!@#$%^&*()+) 
                               
                                 <input type="checkbox" className="checkbox" id="allowSymbols" />
                                <label htmlFor="allowSymbols" className="custom-checkbox"></label>
                            </div>
                           
                        </div>
                    </div>


                </fieldset>
            </div>



        </div>
    )
}

export default PasswordGen