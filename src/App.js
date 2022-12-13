import APICaller from './APICaller';
import SearchResults from './searchResults'
import './App.css';
import PageLoader from './PageLoader';
import QBPInvoice from './QBPInvoice';
import LocalInvoice from './localInvoice';
import GetInvoice from './GetInvoice';

function App() {
  return (
    <div className="App">
      <header> </header>
      <APICaller/>
      {/* <SearchResults/> */}
      {/* <PageLoader/> */}
      <QBPInvoice/>
      {/* <LocalInvoice/> */}
      <GetInvoice/>
    </div>
  );
}

export default App;
