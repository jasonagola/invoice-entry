import './App.css';
import GetInvoice from './GetInvoice';
import ItemMatch from './squareItemMatch';
import ItemCreator from './createNewItem';
import TestBehavior from './test';
import CheckQBPInvoices from './RETIRED FILES/CheckQBPInvoices';
import LoadData from './LoadData'
import InvoiceReconciliation from './InvoiceReconciliation';
import DisplayDbInvoices from './DisplayDbInvoices';

function App() {
  return (
    <div className="App">
      <header> </header>
      <h1>Invoice Collector</h1>
      <LoadData/>
      <TestBehavior/>
      <DisplayDbInvoices/>
      <InvoiceReconciliation/>
      {/* <ItemCreator></ItemCreator> */}
    </div>
  );
}

export default App;
