import { useState } from "react";

import SpaceshipProfile from "../SpaceshipProfile/SpaceshipProfile";
import chainIdToImageMapping from "../Utils/chainIdToImageMapping";
import chainIdToNameMapping from "../Utils/chainIdToNameMapping";

function AttackPage({
  chainId,
  avalancheTestnetTokenIds = [],
  fantomTokenIds = [],
  fantomTokenIdsOfUser = [],
  avalancheTestnetTokenIdsOfUser = [],
}) {
  const [ennemyNetworkSwitchDropdown, setEnnemyNetworkSwitchDropdown] =
    useState(false);

  const [galaxy, setGalaxy] = useState("Polygon");

  const getGalaxySpaceships = () => {
    if (galaxy === "Fantom") {
      return fantomTokenIds.map((element, index) => {
        return (
          <SpaceshipProfile
            tokenId={element.tokenId}
            power={element.power}
            resources={element.resource}
            missiles={element.missiles}
            shields={element.shields}
            staked={element.staked}
            inBatlle={element.inBattle}
            key={index}
          />
        );
      });
    } else if (galaxy === "Avalanche") {
      return avalancheTestnetTokenIds.map((element, index) => {
        return (
          <SpaceshipProfile
            tokenId={element.tokenId}
            power={element.power}
            resources={element.resource}
            missiles={element.missiles}
            shields={element.shields}
            staked={element.staked}
            inBatlle={element.inBattle}
            key={index}
          />
        );
      });
    } else if (galaxy === "Binance") {
    } else if (galaxy === "Ethereum") {
    } else if (galaxy === "Polygon") {
    }
  };

  const switchGalaxy = (galaxy) => {
    setGalaxy(galaxy);
    setEnnemyNetworkSwitchDropdown(!ennemyNetworkSwitchDropdown);
  };

  return (
    <div className="flex flex-col w-full ">
      <div className="flex flex-row w-full border border-black h-96">
        <div className="flex flex-col w-3/4">
          <div>Enemies</div>
          <div className=" flex flex-col w-full items-end">
            <div className="w-48">
              <div className="relative dropdown">
                <button
                  onClick={() => {
                    setEnnemyNetworkSwitchDropdown(
                      !ennemyNetworkSwitchDropdown
                    );
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
                  Select Galaxy: {galaxy}
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
                {ennemyNetworkSwitchDropdown && (
                  <ul
                    className="float-left w-full py-2 m-0 mt-1 text-base text-center list-none bg-white border-none rounded-lg shadow-lg dropdown-menu min-w-max bg-clip-padding absolute"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a
                        className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
                        href="#"
                        onClick={() => switchGalaxy("Polygon")}
                      >
                        Polygon
                      </a>
                    </li>
                    <li>
                      <a
                        className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
                        href="#"
                        onClick={() => switchGalaxy("Fantom")}
                      >
                        Fantom
                      </a>
                    </li>
                    <li>
                      <a
                        className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
                        href="#"
                        onClick={() => switchGalaxy("Avalanche")}
                      >
                        Avalanche
                      </a>
                    </li>
                    <li>
                      <a
                        className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
                        href="#"
                        onClick={() => switchGalaxy("Binance")}
                      >
                        Binance
                      </a>
                    </li>
                    <li>
                      <a
                        className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
                        href="#"
                        onClick={() => switchGalaxy("Ethereum")}
                      >
                        Ethereum
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full border border-black h-full flex-wrap overflow-x-auto">
            {getGalaxySpaceships()}
          </div>
          <div>
            Your Spaceships on {chainIdToNameMapping[chainId]}. Change your
            network to view your spaceships on other chains.
          </div>
          <div className="flex flex-col w-full border border-black h-full flex-wrap overflow-x-auto">
            {avalancheTestnetTokenIdsOfUser.map((element, index) => {
              return (
                <SpaceshipProfile
                  tokenId={element.tokenId}
                  power={element.power}
                  resources={element.resource}
                  missiles={element.missiles}
                  shields={element.shields}
                  staked={element.staked}
                  inBatlle={element.inBattle}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col w-1/4 border border-black h-full">
          <img src={chainIdToImageMapping[chainId]}></img>
          Galaxy: {chainIdToNameMapping[chainId]}
        </div>
      </div>
      <div className="flex flex-col w-full border border-black h-96 items-center">
        <div className="">Do you wish to attack X with a power of 4?</div>
        <div className="flex flex-row w-full justify-center">
          <div className="flex flex-col">
            <div className="h-40 w-40 border border-black"></div>
            <div>Your Fleet</div>
          </div>
          <div>VS</div>
          <div className="flex flex-col">
            <div className="h-40 w-40 border border-black"></div>
            <div>Enemy Fleet</div>
          </div>
        </div>
        <div className="">Odds of success is 33.33%</div>
        <button className="border border-black w-20">Attack</button>
      </div>
    </div>
  );
}

export default AttackPage;
