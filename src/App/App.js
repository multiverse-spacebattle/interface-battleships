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
    "0x4B89846e287ae17d8bA338b516cB7318D152a653",
    {
      chainId: 97,
    }
  );

  const binanceTestnetTokenIdsOfUser = useGetAllSpaceshipsByOwner(
    "0x4B89846e287ae17d8bA338b516cB7318D152a653",
    address,
    {
      chainId: 97,
    }
  );

  const fantomTokenIds = useGetAllSpaceships(
    "0xC66e2863829b46e9b6eF2168a378E5F54139fd19",
    {
      chainId: FantomTestnet.chainId,
    }
  );

  const fantomTokenIdsOfUser = useGetAllSpaceshipsByOwner(
    "0xC66e2863829b46e9b6eF2168a378E5F54139fd19",
    address,
    {
      chainId: FantomTestnet.chainId,
    }
  );

  const avalancheTestnetTokenIds = useGetAllSpaceships(
    "0x3E48BF7fF0f121a47dB02121238727B17E745AB4",
    {
      chainId: AvalancheTestnet.chainId,
    }
  );

  const avalancheTestnetTokenIdsOfUser = useGetAllSpaceshipsByOwner(
    "0x3E48BF7fF0f121a47dB02121238727B17E745AB4",
    address,
    {
      chainId: AvalancheTestnet.chainId,
    }
  );

  const mumbaiTokenIds = useGetAllSpaceships(
    "0x3bC3D8929d70FB388BF5118EDF5fdd3C9A1BaABe",
    {
      chainId: Mumbai.chainId,
    }
  );

  const mumbaiTokenIdsOfUser = useGetAllSpaceshipsByOwner(
    "0x3bC3D8929d70FB388BF5118EDF5fdd3C9A1BaABe",
    address,
    {
      chainId: Mumbai.chainId,
    }
  );

  const rinkebyTokenIds = useGetAllSpaceships(
    "0x1E1BEc328f4AfDE1944c820dC3c4D6868fC0D1b4",
    {
      chainId: Rinkeby.chainId,
    }
  );

  const rinkebyTokenIdsOfUser = useGetAllSpaceshipsByOwner(
    "0x1E1BEc328f4AfDE1944c820dC3c4D6868fC0D1b4",
    address,
    {
      chainId: Rinkeby.chainId,
    }
  );

  return (
    <div className="px-48">
      <div className=" flex flex-col w-full items-end">
        <div className="w-48">
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
            >
              Network:{" "}
              {chain && chainIdToNameMapping[chain.network]
                ? chainIdToNameMapping[chain.network]
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
                    onClick={() => changeNetwork(80001)}
                  >
                    Polygon
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
                    href="#"
                    onClick={() => changeNetwork(4002)}
                  >
                    Fantom
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
                    href="#"
                    onClick={() => changeNetwork(43113)}
                  >
                    Avalanche
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
                    href="#"
                    onClick={() => changeNetwork(97)}
                  >
                    Binance
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
                    href="#"
                    onClick={() => changeNetwork(4)}
                  >
                    Ethereum
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
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
            <p>Connected: {address.slice(0, 5) + "..." + address.slice(-5)}</p>
          </>
        ) : (
          <button onClick={() => connect()}>
            Connect with Coinbase Wallet
          </button>
        )}
      </div>
      <div className="">
        fantomTestnet TokenIds:
        <p className="bold">
          {fantomTokenIds
            ? fantomTokenIds.map((val, index) => val.tokenId).join(", ")
            : null}
        </p>
      </div>
      <div className="">
        avalancheTestnet TokenIds:
        <p className="">
          {avalancheTestnetTokenIds
            ? avalancheTestnetTokenIds
                .map((val, index) => val.tokenId)
                .join(", ")
            : null}
        </p>
      </div>
      <div className="">
        user fantomTestnet TokenIds:
        <p className="bold">
          {fantomTokenIdsOfUser
            ? fantomTokenIdsOfUser.map((val, index) => val.tokenId).join(", ")
            : null}
        </p>
      </div>
      <div className="">
        user avalancheTestnet TokenIds:
        <p className="">
          {avalancheTestnetTokenIdsOfUser
            ? avalancheTestnetTokenIdsOfUser
                .map((val, index) => val.tokenId)
                .join(", ")
            : null}
        </p>
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
