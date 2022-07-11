import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import {
  Config,
  DAppProvider,
  AvalancheTestnet,
  FantomTestnet,
  Mumbai,
  Rinkeby,
  useEtherBalance,
  useCall,
} from "@usedapp/core";

import {
  useAccount,
  useConnect,
  useDisconnect,
  useSwitchNetwork,
  useNetwork,
  allChains,
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

import AttackPage from "../AttackPage/AttackPage";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Mining from "../Mining/Mining";
import Upgrade from "../Upgrade/Upgrade";
import Traverse from "../Traverse/Traverse";
import chainIdToNameMapping from "../Utils/chainIdToNameMapping";

import OmniChainNFTInterface from "../Hooks/OmniChainNFT.json";
import useGetAllSpaceships from "../Hooks/useGetAllSpaceships";
import useGetAllSpaceshipsByOwner from "../Hooks/useGetAllSpaceshipsByOwner";
import chainIdToImageMapping from "../Utils/chainIdToImageMapping";

function App() {
  const [networkSwitchDropdown, setNetworkSwitchDropdown] = useState(false);

  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  const { chain } = useNetwork();
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();

  const changeNetwork = (network) => {
    switchNetwork(network);
    setNetworkSwitchDropdown(!networkSwitchDropdown);
  };

  const binanceTestnetTokenIds = useGetAllSpaceships(
    "0x782D4308c5E981288e300868774B91693cA29eCA",
    {
      chainId: 97,
    }
  );

  const binanceTestnetTokenIdsOfUser = useGetAllSpaceshipsByOwner(
    "0x782D4308c5E981288e300868774B91693cA29eCA",
    address,
    {
      chainId: 97,
    }
  );

  const fantomTokenIds = useGetAllSpaceships(
    "0x78Df8cF8Bb8922b2BE5E5EB3DFc1B95A82800856",
    {
      chainId: FantomTestnet.chainId,
    }
  );

  const fantomTokenIdsOfUser = useGetAllSpaceshipsByOwner(
    "0x78Df8cF8Bb8922b2BE5E5EB3DFc1B95A82800856",
    address,
    {
      chainId: FantomTestnet.chainId,
    }
  );

  const avalancheTestnetTokenIds = useGetAllSpaceships(
    "0xCacd5B636e678B1bAE56D167494Ae8AAa275a421",
    {
      chainId: AvalancheTestnet.chainId,
    }
  );

  const avalancheTestnetTokenIdsOfUser = useGetAllSpaceshipsByOwner(
    "0xCacd5B636e678B1bAE56D167494Ae8AAa275a421",
    address,
    {
      chainId: AvalancheTestnet.chainId,
    }
  );

  const mumbaiTokenIds = useGetAllSpaceships(
    "0x0850Bf3AB32d468000BE21AB5377C56204B1B6F2",
    {
      chainId: Mumbai.chainId,
    }
  );

  const mumbaiTokenIdsOfUser = useGetAllSpaceshipsByOwner(
    "0x0850Bf3AB32d468000BE21AB5377C56204B1B6F2",
    address,
    {
      chainId: Mumbai.chainId,
    }
  );

  const rinkebyTokenIds = useGetAllSpaceships(
    "0x164A49e1607Eb036091a4e530C7F53fF85eb42dB",
    {
      chainId: Rinkeby.chainId,
    }
  );

  const rinkebyTokenIdsOfUser = useGetAllSpaceshipsByOwner(
    "0x164A49e1607Eb036091a4e530C7F53fF85eb42dB",
    address,
    {
      chainId: Rinkeby.chainId,
    }
  );

  return (
    <div className="px-48 h-full">
      <div className="h-full flex flex-col w-full items-end">
        <div className="h-full">
          <div className="relative dropdown">
            <button
              onClick={() => {
                if (chain && chain.network) {
                  setNetworkSwitchDropdown(!networkSwitchDropdown);
                } else {
                  connect();
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
              className="bg-transparent hover:bg-amber-700 text-amber-700 font-semibold hover:text-white py-2 px-4 border border-amber-700 hover:border-transparent rounded"
            >
              Network:{" "}
              {chain && chainIdToNameMapping[chain.network]
                ? chainIdToNameMapping[chain.network]
                : "CONNECT WALLET"}
            </button>
            {networkSwitchDropdown && (
              <ul
                className="float-left w-full py-2 m-0 mt-1 text-base text-center list-none bg-neutral-500 border-none rounded-lg shadow-lg dropdown-menu min-w-max bg-clip-padding absolute"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a
                    className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-neutral-800"
                    href="#"
                    onClick={() => changeNetwork(80001)}
                  >
                    Polygon
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-neutral-800"
                    href="#"
                    onClick={() => changeNetwork(4002)}
                  >
                    Fantom
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-neutral-800"
                    href="#"
                    onClick={() => changeNetwork(43113)}
                  >
                    Avalanche
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-neutral-800"
                    href="#"
                    onClick={() => changeNetwork(97)}
                  >
                    Binance
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-neutral-800"
                    href="#"
                    onClick={() => changeNetwork(4)}
                  >
                    Ethereum
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-neutral-800"
                    href="#"
                    onClick={() => disconnect()}
                  >
                    Disconnect Wallet
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
        {address ? (
          <>
            <p className="text-white text-sm mb-5 ">
              Connected: {address.slice(0, 5) + "..." + address.slice(-5)}
            </p>
          </>
        ) : (
          <button onClick={() => connect()}>
            Connect with Coinbase Wallet
          </button>
        )}
      </div>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                chainId={chain}
                address={address}
                userFantomSpaceships={fantomTokenIdsOfUser.length}
                userAvalancheSpaceships={avalancheTestnetTokenIdsOfUser.length}
                userBinanceSpaceships={binanceTestnetTokenIdsOfUser.length}
                userPolygonSpaceships={mumbaiTokenIdsOfUser.length}
                userEthereumSpaceships={rinkebyTokenIdsOfUser.length}
              />
            }
          />
          <Route
            path="/attack"
            element={
              <AttackPage
                chainId={chain}
                fantomTokenIds={fantomTokenIds}
                avalancheTestnetTokenIds={avalancheTestnetTokenIds}
                rinkebyTokenIds={rinkebyTokenIds}
                binanceTestnetTokenIds={binanceTestnetTokenIds}
                mumbaiTokenIds={mumbaiTokenIds}
                rinkebyTokenIdsOfUser={rinkebyTokenIdsOfUser}
                binanceTestnetTokenIdsOfUser={binanceTestnetTokenIdsOfUser}
                mumbaiTokenIdsOfUser={mumbaiTokenIdsOfUser}
                avalancheTestnetTokenIdsOfUser={avalancheTestnetTokenIdsOfUser}
                fantomTokenIdsOfUser={fantomTokenIdsOfUser}
              />
            }
          />
          <Route
            path="/mining"
            element={
              <Mining
                chainId={chain}
                rinkebyTokenIdsOfUser={rinkebyTokenIdsOfUser}
                binanceTestnetTokenIdsOfUser={binanceTestnetTokenIdsOfUser}
                mumbaiTokenIdsOfUser={mumbaiTokenIdsOfUser}
                avalancheTestnetTokenIdsOfUser={avalancheTestnetTokenIdsOfUser}
                fantomTokenIdsOfUser={fantomTokenIdsOfUser}
              />
            }
          />
          <Route
            path="/upgrade"
            element={
              <Upgrade
                chainId={chain}
                rinkebyTokenIdsOfUser={rinkebyTokenIdsOfUser}
                binanceTestnetTokenIdsOfUser={binanceTestnetTokenIdsOfUser}
                mumbaiTokenIdsOfUser={mumbaiTokenIdsOfUser}
                avalancheTestnetTokenIdsOfUser={avalancheTestnetTokenIdsOfUser}
                fantomTokenIdsOfUser={fantomTokenIdsOfUser}
              />
            }
          />
          <Route
            path="/traverse"
            element={
              <Traverse
                chainId={chain}
                rinkebyTokenIdsOfUser={rinkebyTokenIdsOfUser}
                binanceTestnetTokenIdsOfUser={binanceTestnetTokenIdsOfUser}
                mumbaiTokenIdsOfUser={mumbaiTokenIdsOfUser}
                avalancheTestnetTokenIdsOfUser={avalancheTestnetTokenIdsOfUser}
                fantomTokenIdsOfUser={fantomTokenIdsOfUser}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
