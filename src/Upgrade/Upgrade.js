import { useState } from "react";
import SpaceshipProfile from "../SpaceshipProfile/SpaceshipProfile";

function Upgrade({
  chainId,
  fantomTokenIdsOfUser = [],
  avalancheTestnetTokenIdsOfUser = [],
  rinkebyTokenIdsOfUser = [],
  binanceTestnetTokenIdsOfUser = [],
  mumbaiTokenIdsOfUser = [],
}) {
  const [userSpaceshipSelection, setUserSpaceshipSelection] = useState(null);
  const [userSpaceshipDetails, setUserSpaceshipDetails] = useState(null);

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
        <div className="w-2/4 h-96 border border-black">
          <div className="w-24 h-24 m-2 items-center justify-center">
            <img src="./upgrade.png" className="border rounded-2xl"></img>
            <div className="w-full text-center">Upgrade</div>
          </div>
          <div>Evolutions</div>
          <div className="flex flex-row">
            <div className="w-32 h-32 m-2 items-center justify-center">
              <img src="./level1.png" className="border"></img>
              <div className="w-full text-center">Level 1</div>
            </div>
            <div className="w-32 h-32 m-2 items-center justify-center">
              <img src="./level2.png" className="border"></img>
              <div className="w-full text-center">Level 2</div>
            </div>
            <div className="w-32 h-32 m-2 items-center justify-center">
              <img src="./level3.png" className="border"></img>
              <div className="w-full text-center">Level 3</div>
            </div>
            <div className="w-32 h-32 m-2 items-center justify-center">
              <img src="./level4.png" className="border"></img>
              <div className="w-full text-center">Level 4</div>
            </div>
            <div className="w-32 h-32 m-2 items-center justify-center">
              <img src="./level5.png" className="border"></img>
              <div className="w-full text-center">Level 5</div>
            </div>
          </div>
        </div>
        <div className="w-2/4 h-96 border border-black flex flex-row">
          <div className="w-24 h-24 m-2 items-center justify-center">
            <img src="./missile.png" className="border rounded-2xl"></img>
            <div className="w-full text-center">Missile</div>
          </div>
          <div className="w-24 h-24 m-2 items-center justify-center">
            <img src="./bubble.png" className="border rounded-2xl"></img>
            <div className="w-full text-center">Shield</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full border border-black h-40 flex-wrap overflow-x-auto">
        {chainId && getUserSpaceships()}
      </div>
      <div className="w-full h-24 border border-black">Details</div>
      <div className="w-full flex flex-row justify-center">
        <button className="border border-black w-20">Upgrade</button>
        <button className="border border-black w-20">Purchase</button>
      </div>
    </div>
  );
}

export default Upgrade;
