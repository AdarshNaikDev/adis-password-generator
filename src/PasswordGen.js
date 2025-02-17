import React from 'react'
import Button from './Componenets/Button'

function PasswordGen() {



    return (
        <div className='main-div' style={{ backgroundColor: "#e0e5eb" }}>
            <div className='sec-one'>
                <div className='header-div'>
                    <span className="main-title">ADI's PASSWORD </span>
                </div>
                <div className='input-text'>
                    <input type='text' placeholder='Click the button to generate a strong password' className='text-pswd' readOnly />
                </div>
            </div>

            <div className='btn-position'>
                <Button btnName="Generate Random Password" />
            </div>
            <div className='legend-style'>
            <fieldset>
            <legend>Settings</legend>
            </fieldset>
            </div>
            
           

        </div>
    )
}

export default PasswordGen