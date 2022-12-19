import './App.css';
import LoadData from '../LoadData'
import InvoiceReconciliation from '../InvoiceReconciliation';
import NavBar from '../components/NavBar';
import {Outlet} from 'react-router-dom';
import Dashboard from '../Dashboard';


function App() {
  return (
    <div className="App">
      <header>
        <h1>Invoice Collector 6000</h1>
        <NavBar/>
      </header>
      <Dashboard></Dashboard>
      <div id="switchingDisplay">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
