import React from "react";
import TopBar from "./TopBar";

function Desktop() {
  return (
    <div
      className='h-screen w-screen bg-[url("./assets/Desktop-bg.png")]
     bg-cover bg-center bg-no-repeat flex'
    >
        <TopBar/>
    </div>
  );
}

export default Desktop;
