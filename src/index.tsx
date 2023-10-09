import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux';
import { Toaster } from 'react-hot-toast';
import { AuthContextProvider } from './context/AuthContext';
import '@/i18n/i18n';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Toaster position='top-right' />
                <AuthContextProvider>
                    <App />
                </AuthContextProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
