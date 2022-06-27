import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
//import rootReducer from './reducers'
import { createStore } from 'redux'
import LeadApp from './Store/Leads';

const store = createStore(() => ({
  data: {
    total_created_leads: 100,
    total_purchased_leads: 20,
    percentage:20
  },
  success: true,
  message: 'Database connection lost'
}));

//const store = createStore(LeadApp);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
