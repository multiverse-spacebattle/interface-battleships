import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
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
import Home from "../Home/Home";
import Mining from "../Mining/Mining";
import Upgrade from "../Upgrade/Upgrade";
import Traverse from "../Traverse/Traverse";
import chainIdToNameMapping from "../Utils/chainIdToNameMapping";

function App() {
  const userAddress = useAddress();
  const connectWithCoinbaseWallet = useCoinbaseWallet();
  const disconnectWallet = useDisconnect();
  const chainId = useChainId();

  const [, switchNetwork] = useNetwork();
  const [networkSwitchDropdown, setNetworkSwitchDropdown] = useState(false);

  const changeNetwork = (network) => {
    switchNetwork(ChainId[network]);
    setNetworkSwitchDropdown(!networkSwitchDropdown);
  };

  return (
    <div className="px-48">
      <div className=" flex flex-col w-full items-end">
        <div className="w-48">
          <div className="relative dropdown">
            <button
              onClick={() => {
                if (chainId) {
                  setNetworkSwitchDropdown(!networkSwitchDropdown);
                } else {
                  connectWithCoinbaseWallet();
                }
              }}
              className="
          dropdown-toggle
          px-6
          py-2.5
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:shadow-lg
          active:bg-blue-800 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          justify-center
          whitespace-nowrap
          w-full
        "
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Network:{" "}
              {chainIdToNameMapping[chainId]
                ? chainIdToNameMapping[chainId]
                : "CONNECT WALLET"}
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="caret-down"
                className="w-2 ml-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                ></path>
              </svg>
            </button>
            {networkSwitchDropdown && (
              <ul
                className="float-left w-full py-2 m-0 mt-1 text-base text-center list-none bg-white border-none rounded-lg shadow-lg dropdown-menu min-w-max bg-clip-padding absolute"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a
                    className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
                    href="#"
                    onClick={() => changeNetwork("Mumbai")}
                  >
                    Polygon
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
                    href="#"
                    onClick={() => changeNetwork("FantomTestnet")}
                  >
                    Fantom
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
                    href="#"
                    onClick={() => changeNetwork("AvalancheFujiTestnet")}
                  >
                    Avalanche
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
                    href="#"
                    onClick={() => disconnectWallet()}
                  >
                    Disconnect Wallet
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
        {userAddress ? (
          <>
            <p>
              Connected:{" "}
              {userAddress.slice(0, 5) + "..." + userAddress.slice(-5)}
            </p>
          </>
        ) : (
          <button onClick={connectWithCoinbaseWallet}>
            Connect with Coinbase Wallet
          </button>
        )}
      </div>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home chainId={chainId} userAddress={userAddress} />}
          />
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
