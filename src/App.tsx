import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Team />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
