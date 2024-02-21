import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.jsx'

const renderApp = () => {
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)}

if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
  renderApp();
} else {
  document.addEventListener('DOMContentLoaded', renderApp);
}


// Uncaught TypeError: store.getState is not a function previousState Redux React Provider ReduxReact --> since it doesn't find the store, firtly I generate the store and then i start the app -- i make a renderApp function and i call it in a if cycle;