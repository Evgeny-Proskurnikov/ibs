import React, { useState } from 'react';

function Wheather() {
  const [ data, setData ] = useState({});
  
  return (
    <>
      <p>City</p>
      <p>Description</p>
      <p>Degrees</p>
      <p>Today: ...</p>
    </>
  );
}
  
export default Wheather;
