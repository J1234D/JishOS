import { useState } from "react";
import "./App.css";
import BootWindow from "./components/BootWindow";
import Desktop from "./components/Desktop";

function App() {
  const [booted, setBooted] = useState(false);
  if (!booted) {
    return (
      <div
        className='h-screen w-screen bg-[url("./assets/Boot-bg.png")] bg-cover bg-center bg-no-repeat'
      >
        <div className="h-screen w-screen flex justify-center items-center">
          <BootWindow bootedState={booted} bootedChange={setBooted} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Desktop />
      </div>
    );
  }
}

export default App;
