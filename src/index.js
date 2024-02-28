// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import CSS file for styling, App component, and ShopContextProvider
import './index.css';
import App from './App';
import ShopContextProvider from './Context/ShopContext';

// Create a React root using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped with ShopContextProvider
root.render(
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
);



