import React from 'react';
import { Provider } from 'react-redux';
import store from './features/store'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './routes/App'
import InvoiceBrowser from './routes/InvoiceBrowser'
import InvoiceViewer from './routes/InvoiceViewer';
import SquareItemBrowser from './routes/SquareItemBrowser';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path:'/InvoiceBrowser',
        element: <InvoiceBrowser/>
      },
      {
        path: '/InvoiceViewer',
        element: <InvoiceViewer/>
      },
      {
        path: '/SquareItemBrowser',
        element: <SquareItemBrowser/>
      }
    ],
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
