import './App.css';
import Footbar from './components/Footbar';
import Navbar from './components/Navbar';
import Shop from './components/Shop';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Shop />
      <Footbar />
    </div>
  );
}

export default App;
