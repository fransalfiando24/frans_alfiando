import {HashRouter as Router, Link} from 'react-router-dom'
import NavMenu from './components/NavMenu'
import Pages from './pages/Pages'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
        <NavMenu/>
        <ScrollToTop/>
        <Pages/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
