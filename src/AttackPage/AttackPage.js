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
  return (
    <div className="flex flex-col w-full ">
      <div className="flex flex-row w-full border border-black h-96">
        <div className="flex flex-col w-3/4">
          <div>Enemies</div>
          <div className="flex flex-col w-full border border-black h-full flex-wrap overflow-x-auto">
            {avalancheTestnetTokenIds.map((element, index) => {
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
          <div>Your Spaceships:</div>
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
