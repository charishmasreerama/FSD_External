import React, { useState } from 'react'; 

function FormExample() { 
  const [name, setName] = useState(''); 

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    alert(`Submitted: ${name}`); 
  }; 

  return ( 
    <form onSubmit={handleSubmit}> 
      <label> 
        Name: 
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        /> 
      </label> 
      <button type="submit">Submit</button> 
    </form> 
  );
} 

export default FormExample;