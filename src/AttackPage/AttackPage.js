import { useState } from "react";

import { useContractWrite } from "wagmi";
import { ethers } from "ethers";

import SpaceshipProfile from "../SpaceshipProfile/SpaceshipProfile";
import SpaceshipEnnemy from "../SpaceshipEnnemy/SpaceshipEnnemy";
import chainIdToImageMapping from "../Utils/chainIdToImageMapping";
import chainIdToNameMapping from "../Utils/chainIdToNameMapping";
import chainIdToOmnichainNFTContract from "../Utils/chainIdToOmnichainNFTContract";
import OmniChainNFT from "../Utils/OmniChainNFT.json";

function AttackPage({
  chainId,
  avalancheTestnetTokenIds = [],
  fantomTokenIds = [],
  binanceTestnetTokenIds = [],
  mumbaiTokenIds = [],
  rinkebyTokenIds = [],
  fantomTokenIdsOfUser = [],
  avalancheTestnetTokenIdsOfUser = [],
  rinkebyTokenIdsOfUser = [],
  binanceTestnetTokenIdsOfUser = [],
  mumbaiTokenIdsOfUser = [],
}) {
  const [userSpaceshipSelection, setUserSpaceshipSelection] = useState(null);
  const [ennemySpaceshipSelection, setEnnemySpaceshipSelection] =
    useState(null);
  const [userSpaceshipDetails, setUserSpaceshipDetails] = useState(null);
  const [ennemySpaceshipDetails, setEnnemySpaceshipDetails] = useState(null);
  const [ennemyNetworkSwitchDropdown, setEnnemyNetworkSwitchDropdown] =
    useState(false);

  const [galaxy, setGalaxy] = useState("Polygon");

  const { data, isError, isLoading, write } = useContractWrite({
    addressOrName: chainIdToOmnichainNFTContract[chainId.network],
    contractInterface: OmniChainNFT.abi,
    functionName: "battle",
    args: [userSpaceshipSelection, ennemySpaceshipSelection],
  });

  console.log(userSpaceshipSelection, ennemySpaceshipSelection);
  const getUserSpaceships = () => {
    if (chainId.id === 4002) {
      return fantomTokenIdsOfUser.map((element, index) => {
        return (
          <SpaceshipProfile
            setUserSpaceshipSelection={setUserSpaceshipSelection}
            userSpaceshipSelection={userSpaceshipSelection}
            details={element}
            setUserSpaceshipDetails={setUserSpaceshipDetails}
            key={index}
          />
        );
      });
    } else if (chainId.id === 43113) {
      return avalancheTestnetTokenIdsOfUser.map((element, index) => {
        return (
          <SpaceshipProfile
            setUserSpaceshipSelection={setUserSpaceshipSelection}
            userSpaceshipSelection={userSpaceshipSelection}
            details={element}
            setUserSpaceshipDetails={setUserSpaceshipDetails}
            key={index}
          />
        );
      });
    } else if (chainId.id === 97) {
      return binanceTestnetTokenIdsOfUser.map((element, index) => {
        return (
          <SpaceshipProfile
            setUserSpaceshipSelection={setUserSpaceshipSelection}
            userSpaceshipSelection={userSpaceshipSelection}
            details={element}
            setUserSpaceshipDetails={setUserSpaceshipDetails}
            key={index}
          />
        );
      });
    } else if (chainId.id === 4) {
      return rinkebyTokenIdsOfUser.map((element, index) => {
        return (
          <SpaceshipProfile
            setUserSpaceshipSelection={setUserSpaceshipSelection}
            userSpaceshipSelection={userSpaceshipSelection}
            details={element}
            setUserSpaceshipDetails={setUserSpaceshipDetails}
            key={index}
          />
        );
      });
    } else if (chainId.id === 80001) {
      return mumbaiTokenIdsOfUser.map((element, index) => {
        return (
          <SpaceshipProfile
            setUserSpaceshipSelection={setUserSpaceshipSelection}
            userSpaceshipSelection={userSpaceshipSelection}
            details={element}
            setUserSpaceshipDetails={setUserSpaceshipDetails}
            key={index}
          />
        );
      });
    }
  };

  const getGalaxySpaceships = () => {
    if (galaxy === "Fantom") {
      return fantomTokenIds.map((element, index) => {
        return (
          <SpaceshipEnnemy
            setEnnemySpaceshipSelection={setEnnemySpaceshipSelection}
            setEnnemySpaceshipDetails={setEnnemySpaceshipDetails}
            ennemySpaceshipSelection={ennemySpaceshipSelection}
            details={element}
            key={index}
          />
        );
      });
    } else if (galaxy === "Avalanche") {
      return avalancheTestnetTokenIds.map((element, index) => {
        return (
          <SpaceshipEnnemy
            setEnnemySpaceshipSelection={setEnnemySpaceshipSelection}
            setEnnemySpaceshipDetails={setEnnemySpaceshipDetails}
            ennemySpaceshipSelection={ennemySpaceshipSelection}
            details={element}
            key={index}
          />
        );
      });
    } else if (galaxy === "Binance") {
      return binanceTestnetTokenIds.map((element, index) => {
        return (
          <SpaceshipEnnemy
            setEnnemySpaceshipSelection={setEnnemySpaceshipSelection}
            setEnnemySpaceshipDetails={setEnnemySpaceshipDetails}
            ennemySpaceshipSelection={ennemySpaceshipSelection}
            details={element}
            key={index}
          />
        );
      });
    } else if (galaxy === "Ethereum") {
      return rinkebyTokenIds.map((element, index) => {
        return (
          <SpaceshipEnnemy
            setEnnemySpaceshipSelection={setEnnemySpaceshipSelection}
            setEnnemySpaceshipDetails={setEnnemySpaceshipDetails}
            ennemySpaceshipSelection={ennemySpaceshipSelection}
            details={element}
            key={index}
          />
        );
      });
    } else if (galaxy === "Polygon") {
      return mumbaiTokenIds.map((element, index) => {
        return (
          <SpaceshipEnnemy
            setEnnemySpaceshipSelection={setEnnemySpaceshipSelection}
            setEnnemySpaceshipDetails={setEnnemySpaceshipDetails}
            ennemySpaceshipSelection={ennemySpaceshipSelection}
            details={element}
            key={index}
          />
        );
      });
    }
  };

  const switchGalaxy = (galaxy) => {
    setGalaxy(galaxy);
    setEnnemyNetworkSwitchDropdown(!ennemyNetworkSwitchDropdown);
  };

  return (
    <div className="flex flex-col w-full ">
      <div className="flex flex-row w-full border border-black h-96 bg-neutral-800">
        <div className="flex flex-col w-3/4">
          <div className=" flex flex-col w-full items-end bg-neutral-800">
            <div className="">
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
                  className="text-amber-500 border h-12 p-2 border border-amber-500"
                >
                  View Fleets on: {galaxy}
                </button>
                {ennemyNetworkSwitchDropdown && (
                  <ul
                    className="float-left w-full py-2 m-0 mt-1 text-base text-center list-none bg-neutral-500 border-none rounded-lg shadow-lg dropdown-menu min-w-max bg-clip-padding absolute"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a
                        className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-neutral-800"
                        href="#"
                        onClick={() => switchGalaxy("Polygon")}
                      >
                        Polygon
                      </a>
                    </li>
                    <li>
                      <a
                        className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-neutral-800"
                        href="#"
                        onClick={() => switchGalaxy("Fantom")}
                      >
                        Fantom
                      </a>
                    </li>
                    <li>
                      <a
                        className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-neutral-800"
                        href="#"
                        onClick={() => switchGalaxy("Avalanche")}
                      >
                        Avalanche
                      </a>
                    </li>
                    <li>
                      <a
                        className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-neutral-800"
                        href="#"
                        onClick={() => switchGalaxy("Binance")}
                      >
                        Binance
                      </a>
                    </li>
                    <li>
                      <a
                        className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-neutral-800"
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
          <div className="flex flex-row w-full border border-black h-full overflow-x-auto bg-neutral-700">
            {getGalaxySpaceships()}
          </div>
          <div className="bg-neutral-800">
            Your Spaceships on{" "}
            {chainId && chainIdToNameMapping[chainId.network]}. Change your
            network to view your spaceships on other chains.
          </div>
          <div className="flex flex-col w-full border border-black h-96 overflow-x-auto bg-neutral-500">
            {chainId && getUserSpaceships()}
          </div>
        </div>
        <div className="flex flex-col w-1/4 border border-black h-ful">
          <img src={chainId && chainIdToImageMapping[chainId.network]}></img>
          Galaxy: {chainId && chainIdToNameMapping[chainId.network]}
        </div>
      </div>
      <div className="flex flex-col w-full border border-black h-96 items-center bg-neutral-800">
        {userSpaceshipSelection && ennemySpaceshipSelection ? (
          <div className="">Proceed with the attack?</div>
        ) : (
          <div className="m-5">Select your fleet and an ennemy fleet</div>
        )}
        <div className="flex flex-row w-full justify-center">
          <div className="flex flex-col justify-center items-center">
            {userSpaceshipSelection ? (
              <div
                className={
                  "flex flex-col w-full border border-black w-40 h-40 m-5 cursor-pointer"
                }
              >
                <img src={userSpaceshipDetails.imageUrl}></img>
                <div>{userSpaceshipDetails.tokenId}</div>
                <div>{userSpaceshipDetails.power}</div>
                <div>{userSpaceshipDetails.resource}</div>
                <div>{userSpaceshipDetails.missiles}</div>
                <div>{userSpaceshipDetails.shields}</div>
                <div>{userSpaceshipDetails.staked}</div>
                <div>{userSpaceshipDetails.inBattle}</div>
              </div>
            ) : (
              <div className="h-40 w-40 border border-black"></div>
            )}
            <div>Your Fleet</div>
          </div>
          <div className="flex flex-col justify-center items-center mx-5">
            VS
          </div>
          <div className="flex flex-col justify-center items-center">
            {ennemySpaceshipSelection ? (
              <div
                className={
                  "flex flex-col w-full border border-black w-40 h-40 m-5 cursor-pointer"
                }
              >
                <img src={ennemySpaceshipDetails.imageUrl}></img>
                <div>{ennemySpaceshipDetails.tokenId}</div>
                <div>{ennemySpaceshipDetails.power}</div>
                <div>{ennemySpaceshipDetails.resource}</div>
                <div>{ennemySpaceshipDetails.missiles}</div>
                <div>{ennemySpaceshipDetails.shields}</div>
                <div>{ennemySpaceshipDetails.staked}</div>
                <div>{ennemySpaceshipDetails.inBattle}</div>
              </div>
            ) : (
              <div className="h-40 w-40 border border-black"></div>
            )}
            <div>Enemy Fleet</div>
          </div>
        </div>
        {userSpaceshipDetails && ennemySpaceshipDetails ? (
          <div className="">
            Odds of winning the fight is{" "}
            {(
              ((userSpaceshipDetails.power * 1.1) /
                (userSpaceshipDetails.power + ennemySpaceshipDetails.power)) *
              100
            ).toFixed(2)}
            %
          </div>
        ) : null}
        <button
          className="bg-transparent hover:bg-amber-700 text-amber-700 font-semibold hover:text-white py-2 px-4 border border-amber-700 hover:border-transparent rounded"
          onClick={() => write()}
        >
          Attack
        </button>
      </div>
    </div>
  );
}

export default AttackPage;
