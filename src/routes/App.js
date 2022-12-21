import './App.css';
import NavBar from '../routes/NavBar';
import {Outlet} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header>
        <h1>Invoice Collector 6000</h1>
        <NavBar/>
      </header>
      <div id="switchingDisplay">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
