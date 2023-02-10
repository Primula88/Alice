import React, { useState } from "react";

export default function ToggleVisibility({ children }) {

  // React state to manage visibility
  const [show, setShow] = useState();

  // function to toggle the boolean value
  function toggleShow() {
    setShow(!show);
  }
  var buttonText = show ? "Hide More" : "Show More";

  return (
    <div className='items-center mx-auto flex'>
      {show && children}
      <button className='bg-pink-400 rounded mx-auto h-20 shadow-md text-white w-48 mt-0' onClick={toggleShow}>{buttonText}</button>
    </div>
  );
}