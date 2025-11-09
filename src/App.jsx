import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import ContactCTA from './components/ContactCTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Services />
        <CaseStudies />
        <ContactCTA />
      </main>
    </div>
  );
}

export default App;
