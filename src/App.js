import "./App.css";
import Nav from "./commponents/common/Nav";
import React, { useState } from "react";
import Sidebar from "./commponents/common/Sidebar";
import Hero from "./commponents/homepage/Hero";

function App() {
  const [open, setopen] = useState(false);
  const onHandleClick = () => {
    setopen(!open);
  };
  // console.log(open);
  return (
    <>
      {/* <div classNameName="text-red-600" onClick={onHandleClick}>
        abc
      </div> */}
      <Nav click={onHandleClick} open={open} />
      <Hero />
      <Sidebar open={open} />
      <div
        onClick={onHandleClick}
        classNameName={`overlay ${
          open
            ? "fixed top-0 left-0 z-40 overflow-hidden w-screen h-screen "
            : ""
        }`}
      ></div>
    </>
  );
}

export default App;
