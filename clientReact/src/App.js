import Home from './pages/Home'

import Header from './components/Header';
import './App.css';
import './utility.css';
import './normalize.css';
import './responsive.css';
import './fonts.css';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
  


function App() {

  

  return <div>
    <Router>
    <Header/>
    {/* <Routes>
      <Route exact path="/" element={<Home/>}/>     
     </Routes>      */}
     <Home/>
      {/* <About/> */}
      {/* <Contact/> */}
      {/* <Blog/> */}
      {/* <Gallery/> */}
    <Footer/>

    </Router>
  </div>;
}

export default App;