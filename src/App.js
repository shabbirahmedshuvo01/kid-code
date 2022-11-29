import './App.css';
import Banner from './Components/Banner/Banner';
import Cards from './Components/Cards/Cards';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
