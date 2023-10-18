import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style-null.css';
import './style/main.scss'
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { config } from './components/web3/config';
import { WagmiConfig } from 'wagmi';
import { ConnectKitProvider } from 'connectkit'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        <App />
      </ConnectKitProvider>
    </WagmiConfig>
  </BrowserRouter>
);


