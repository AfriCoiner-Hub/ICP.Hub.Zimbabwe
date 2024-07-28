import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Team from "./components/Team";
import About from "./pages/About";
import Services from "./components/Service";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Home />
      </main>
      <About />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
