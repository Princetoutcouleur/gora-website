import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import Navigation from '../src/components/Navigation'
import Hero from '../src/components/Hero'
import About from '../src/components/About'
import Services from '../src/components/Services'
import Testimonials from '../src/components/Testimonials'
import Subscription from '../src/components/Subscription'
import Contact from '../src/components/Contact'
import Footer from '../src/components/Footer'

function App() {
  return (
    <div className="App container-fluid px-0">
      <Navigation/>
      <Hero/>
      <About/>
      <Services/>
      <Testimonials/>
      <Subscription/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
