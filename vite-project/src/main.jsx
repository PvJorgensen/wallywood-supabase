import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { SupabaseProvider } from './Providers/SupabaseProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SupabaseProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </SupabaseProvider>
  </React.StrictMode>,
)