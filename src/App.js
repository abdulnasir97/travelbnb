import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Rooms from "./components/Rooms";
import Slider from "./components/Slider";
import Plan from "./components/Plan";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
      <Rooms />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
