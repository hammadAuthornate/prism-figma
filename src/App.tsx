import Benefits from "./components/Benefits";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import StakingCard from "./components/StakingCard";
import UtilityTabs from "./components/UtilityTabs";

export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Cards />
      <UtilityTabs />
      <StakingCard />
      <Benefits />
      <Footer />
    </div>
  );
}
