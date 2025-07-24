import Weather from "./components/Weather";
import { useEffect, useState } from "react";

const App = () => {
  // Determine background class based on current hour
  const [bgClass, setBgClass] = useState("");

  useEffect(() => {
    function updateBgClass() {
      const hour = new Date().getHours();
      if (hour >= 6 && hour < 18) {
        setBgClass("sunrise-bg");
      } else {
        setBgClass("sunset-bg");
      }
    }
    updateBgClass();
    // Optionally update every minute in case user leaves app open
    const interval = setInterval(updateBgClass, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`app ${bgClass}`}>
      <header className="app-header">
        <h1>🌈 Cloudy Buddy</h1>
      </header>
      <Weather />
    </div>
  );
};

export default App;
