import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import UpcomingSection from "./components/UpcomingSection/UpcomingSection";
import StatsSection from "./components/StatsSection/StatsSection";
import FAQSection from "./components/FAQSection/FAQSection";
import SubscribeSection from "./components/SubscribeSection/SubscribeSection";
import FooterSection from "./components/FooterSection/FooterSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <UpcomingSection />
      <StatsSection />
      <FAQSection />
      <SubscribeSection />
      <FooterSection />
    </div>
  );
}

export default App;
