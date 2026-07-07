import { useState } from "react";
import "./App.css";
import BootWindow from "./components/BootWindow";
import Desktop from "./components/Desktop";
import PrismaticBurst from "./components/PrismaticBurst";
import { Analytics } from "@vercel/analytics/next"

function App() {
  const [currentScreen, setCurrentScreen] = useState("boot");

  switch (currentScreen) {
    case "boot":
      return (
        <div className="relative h-screen w-screen">
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              transform: "scale(1.2)",
            }}
          >
            <PrismaticBurst
              animationType="rotate3d"
              intensity={2}
              speed={0.5}
              distort={0}
              paused={false}
              offset={{ x: 0, y: 0 }}
              hoverDampness={0.25}
              rayCount={0}
              mixBlendMode="none"
              colors={["#00D4FF", "#6C63FF", "#C026FF"]}
              color0="#00D4FF"
              color1="#6C63FF"
              color2="#C026FF"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-10">
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
          <Analytics/>
        </div>
      );

    default:
      break;
  }
}

export default App;
