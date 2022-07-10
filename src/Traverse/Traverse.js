import { useState } from "react";
import SpaceshipProfile from "../SpaceshipProfile/SpaceshipProfile";
function Traverse({
  chainId,
  fantomTokenIdsOfUser = [],
  avalancheTestnetTokenIdsOfUser = [],
  rinkebyTokenIdsOfUser = [],
  binanceTestnetTokenIdsOfUser = [],
  mumbaiTokenIdsOfUser = [],
}) {
  const [userSpaceshipSelection, setUserSpaceshipSelection] = useState(null);
  const [userSpaceshipDetails, setUserSpaceshipDetails] = useState(null);
  const [portal, setPortal] = useState(null);

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

  return (
    <div className="flex flex-col w-full ">
      <div className="flex flex-row">
        <div className="w-full h-96 border border-black">
          <img src={"./illustration 2.png"}></img>
        </div>
      </div>
      <div className="w-full h-24 border border-black">Details</div>
      <div className="flex flex-col w-full border border-black h-40 flex-wrap overflow-x-auto">
        {chainId && getUserSpaceships()}
      </div>
      <div className="w-full border border-black">
        <div>Travel from Ethereum to Avalanche Galaxy</div>
        <div className="flex flex-row w-full items-center justify-around">
          <div
            className={
              portal === "Ethereum"
                ? "h-24 w-24 rounded-2xl border border-blue-400 border-4 cursor-pointer"
                : "h-24 w-24 rounded-2xl cursor-pointer"
            }
            onClick={() => setPortal("Ethereum")}
          >
            <img src="./portal1.png" className="rounded-2xl"></img>
            <div>Ethereum</div>
          </div>
          <div
            className={
              portal === "Polygon"
                ? "h-24 w-24 rounded-2xl border border-blue-400 border-4 cursor-pointer"
                : "h-24 w-24 rounded-2xl cursor-pointer"
            }
            onClick={() => setPortal("Polygon")}
          >
            <img src="./portal2.png" className="rounded-2xl"></img>
            <div>Polygon</div>
          </div>
          <div
            className={
              portal === "Avalanche"
                ? "h-24 w-24 rounded-2xl border border-blue-400 border-4 cursor-pointer"
                : "h-24 w-24 rounded-2xl cursor-pointer"
            }
            onClick={() => setPortal("Avalanche")}
          >
            <img src="./portal3.png" className="rounded-2xl"></img>
            <div>Avalanche</div>
          </div>
          <div
            className={
              portal === "Binance"
                ? "h-24 w-24 rounded-2xl border border-blue-400 border-4 cursor-pointer"
                : "h-24 w-24 rounded-2xl cursor-pointer"
            }
            onClick={() => setPortal("Binance")}
          >
            <img src="./portal4.png" className="rounded-2xl"></img>
            <div>Binance</div>
          </div>
          <div
            className={
              portal === "Fantom"
                ? "h-24 w-24 rounded-2xl border border-blue-400 border-4 cursor-pointer"
                : "h-24 w-24 rounded-2xl cursor-pointer"
            }
            onClick={() => setPortal("Fantom")}
          >
            <img src="./portal5.png" className="rounded-2xl"></img>
            <div>Fantom</div>
          </div>
        </div>
        <div className="flex flex-row w-full items-center justify-center">
          <div className="border border-black mx-5">Ethereum</div>
          <div className="border border-black mx-5">to</div>
          <div className="border border-black mx-5">Polygon</div>
        </div>
      </div>
      <div className="w-full flex flex-row justify-center">
        <button className="border border-black w-20">Traverse</button>
      </div>
    </div>
  );
}

export default Traverse;
