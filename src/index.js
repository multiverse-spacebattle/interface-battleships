import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import {
  // Mainnet,
  FantomTestnet,
  AvalancheTestnet,
  Mumbai,
  DAppProvider,
  useEtherBalance,
  useEthers,
  Config,
} from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

const config: Config = {
  // readOnlyChainId: FantomTestnet.chainId,
  readOnlyUrls: {
    [FantomTestnet.chainId]: "https://rpc.testnet.fantom.network",
    [AvalancheTestnet.chainId]: "https://api.avax-test.network/ext/bc/C/rpc",
    [Mumbai.chainId]: "https://rpc-mumbai.maticvigil.com",
  },
};

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <ThirdwebProvider desiredChainId={activeChainId}>
        <App />
      </ThirdwebProvider>
    </DAppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
