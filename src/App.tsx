import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <MainSection />
      <Footer />
    </div>
  );
}
