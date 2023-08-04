import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import StatsSection from "./components/StatsSection/StatsSection";
import SubscribeSection from "./components/SubscribeSection/SubscribeSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <SubscribeSection />
    </div>
  );
}

export default App;
