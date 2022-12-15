import './App.css';
import GetInvoice from './GetInvoice';
import ItemMatch from './squareItemMatch';
import ItemCreator from './createNewItem';
import TestBehavior from './test';

function App() {
  return (
    <div className="App">
      <header> </header>
      <TestBehavior/>
      <GetInvoice/>
      {/* <ItemCreator></ItemCreator> */}
    </div>
  );
}

export default App;
