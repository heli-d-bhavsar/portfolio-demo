import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import { ThemeProvider } from './context/theme';
function App() {
  return (
    <ThemeProvider>
      <div className='bg-background'>
        <Navbar />
        <Introduction />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <ContactForm />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
