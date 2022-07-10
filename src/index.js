import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import {
  // Mainnet,
  FantomTestnet,
  AvalancheTestnet,
  Mumbai,
  Rinkeby,
  DAppProvider,
  useEtherBalance,
  useEthers,
  Config,
} from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

const config: Config = {
  // readOnlyChainId: FantomTestnet.chainId,
  readOnlyUrls: {
    [FantomTestnet.chainId]: "https://rpc.testnet.fantom.network",
    [AvalancheTestnet.chainId]: "https://api.avax-test.network/ext/bc/C/rpc",
    [Mumbai.chainId]: "https://rpc-mumbai.maticvigil.com",
    [97]: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    [Rinkeby.chainId]:
      "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
  },
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <DAppProvider config={config}>
        <App />
      </DAppProvider>
    </WagmiConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
