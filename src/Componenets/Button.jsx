import React from 'react';


const Button = ({btnName, genPassword }) => {
  return (
    
      <button className="button" onClick={genPassword} >
        <div className="wrap">
          <p>
            <span>✧</span>
            <span>✦</span>
            {btnName}
          </p>
        </div>
      </button>
   
  );
}



export default Button;
