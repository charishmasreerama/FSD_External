import React from 'react';
function ButtonClick(){
const handleClick=()=>{
    alert('Buttonclicked!');
    };
    return(
        <div>
        <button onClick={handleClick}>ClickMe!</button>
        </div>
        );
}
export default ButtonClick;