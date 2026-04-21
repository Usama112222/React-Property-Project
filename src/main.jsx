
import { createRoot } from 'react-dom/client'
import './index.css'
import Navigation from './navigation/navigation.jsx'
import Hero from './hero/hero.jsx'
import About from './about/about.jsx'
import Properties from './properties/properties.jsx'
import Services from './services/sevices.jsx'
import Testmonial from './Testnonial/testmonial.jsx'
import Message from './message/message.jsx'
import Footer from './footer/footer.jsx'
import Scroll from './scroll.jsx'

createRoot(document.getElementById('root')).render(
  
    <div>
      <Navigation/>
      <Hero/>
      <About/>
      <Properties/>
      <Services/>
      <Testmonial/>
      <Message/>
      <Footer/>
      <Scroll/>
    
    </div>
  
)
