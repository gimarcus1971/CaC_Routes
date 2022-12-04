
import './App.css';
import {Home} from './components/Home'
import {Footer} from './components/Footer'
import {Navbar} from './components/Navbar'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
