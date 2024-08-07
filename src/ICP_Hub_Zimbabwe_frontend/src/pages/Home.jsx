// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBook, faConciergeBell } from '@fortawesome/free-solid-svg-icons';


import Hero from '../components/Hero';
import Features from '../components/Features'
import Work from '../components/Work';
import Team from '../components/Team';
import Contact from '../components/Contact'
import CTA from '../components/CTA';
import Footer from '../components/Footer'

function Home() {
    return (
      <div>
        <Hero />
        <Features />
        <Work />
        <Team />
        <CTA />
        <Contact />
        <Footer />
      </div>
    );
}

export default Home;
