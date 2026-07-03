import { useState } from "react";
import "./App.css";
import BootWindow from "./components/BootWindow";
import Desktop from "./components/Desktop";

function App() {
  const [currentScreen, setCurrentScreen] = useState("boot");

  switch (currentScreen) {
    case "boot":
      return (
        <div className='h-screen w-screen bg-[url("./assets/Boot-bg.png")] bg-cover bg-center bg-no-repeat'>
          <div className="h-screen w-screen flex justify-center items-center">
            <BootWindow
              currentScreen={currentScreen}
              changeScreen={setCurrentScreen}
            />
          </div>
        </div>
      );
      break;

    case "desktop":
      return (
        <div>
          <Desktop />
        </div>
      );

    default:
      break;
  }
}

export default App;
