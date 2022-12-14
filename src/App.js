import './App.css';
import GetInvoice from './GetInvoice';
import ItemMatch from './squareItemMatch';
import ItemCreator from './createNewItem';

function App() {
  return (
    <div className="App">
      <header> </header>

      <GetInvoice/>
      <ItemMatch search={'TR6307'}/>
      <ItemCreator></ItemCreator>
    </div>
  );
}

export default App;
