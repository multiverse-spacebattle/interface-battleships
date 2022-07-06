import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  useNetwork,
  ChainId,
  useChainId,
  useAddress,
  useDisconnect,
  useCoinbaseWallet,
} from "@thirdweb-dev/react";

import AttackPage from "../AttackPage/AttackPage";
import Header from "../Header/Header";
import Mining from "../Mining/Mining";
import Upgrade from "../Upgrade/Upgrade";
import Traverse from "../Traverse/Traverse";

function App() {
  const address = useAddress();
  const connectWithCoinbaseWallet = useCoinbaseWallet();
  const disconnectWallet = useDisconnect();
  const chainId = useChainId();

  const [, switchNetwork] = useNetwork();

  return (
    <div className="px-48">
      {address ? (
        <>
          <button className="border black-border" onClick={disconnectWallet}>
            Disconnect Wallet
          </button>
          <p>Your address: {address}</p>
          <button
            className="border black-border"
            onClick={() => switchNetwork(ChainId.Mainnet)}
          >
            Switch To Ethereum
          </button>
          <button
            className="border black-border"
            onClick={() => switchNetwork(ChainId.Mumbai)}
          >
            Switch To Mumbai
          </button>
          <button
            className="border black-border"
            onClick={() => switchNetwork(ChainId.FantomTestnet)}
          >
            Switch To FantomTestnet
          </button>
          <button
            className="border black-border"
            onClick={() => switchNetwork(ChainId.AvalancheFujiTestnet)}
          >
            Switch To AvalancheFujiTestnet
          </button>
        </>
      ) : (
        <button onClick={connectWithCoinbaseWallet}>
          Connect with Coinbase Wallet
        </button>
      )}
      <div>ChainId: {chainId}</div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AttackPage />} />
          <Route path="/attack" element={<AttackPage chainId={chainId} />} />
          <Route path="/mining" element={<Mining chainId={chainId} />} />
          <Route path="/upgrade" element={<Upgrade />} />
          <Route path="/traverse" element={<Traverse chainId={chainId} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
