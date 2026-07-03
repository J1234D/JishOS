import React, { useState } from "react";
import TopBar from "./TopBar";
import Notes from "./Notes";
import DesktopIcon from "./DesktopIcon";
import notesIcon from "../assets/Notes-icon.png";
import WindowGUI from "./WindowGUI";

function Desktop() {
  const [openWindows, setOpenWindows] = useState([]);
  const closeWindowByName = (nameToRemove) => {
    setOpenWindows((prevWindows) => {
      return prevWindows.filter((app) => app !== nameToRemove);
    });
  };
  const windows = openWindows.map((app) => {
    if (app === "notes") {
      return (
        <WindowGUI key={app} title="Notes" onClose={() => closeWindowByName("notes")}>
          <Notes />
        </WindowGUI>
      );
    }
  });
  return (
    <div
      className='h-screen w-screen bg-[url("./assets/Desktop-bg.png")]
     bg-cover bg-center bg-no-repeat relative'
    >
      <TopBar />
      <DesktopIcon
        icon={notesIcon}
        name="Notes"
        onClick={() => {
          if (!openWindows.includes("notes")) {
            setOpenWindows([...openWindows, "notes"]);
          }
        }}
      />
      {windows}
    </div>
  );
}

export default Desktop;
