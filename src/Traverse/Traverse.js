import SpaceshipProfile from "../SpaceshipProfile/SpaceshipProfile";
function Traverse({
  chainId,
  fantomTokenIdsOfUser = [],
  avalancheTestnetTokenIdsOfUser = [],
  rinkebyTokenIdsOfUser = [],
  binanceTestnetTokenIdsOfUser = [],
  mumbaiTokenIdsOfUser = [],
}) {
  const getUserSpaceships = () => {
    if (chainId.id === 4002) {
      return fantomTokenIdsOfUser.map((element, index) => {
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
    } else if (chainId.id === 43113) {
      return avalancheTestnetTokenIdsOfUser.map((element, index) => {
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
    } else if (chainId.id === 97) {
      return binanceTestnetTokenIdsOfUser.map((element, index) => {
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
    } else if (chainId.id === 4) {
      return rinkebyTokenIdsOfUser.map((element, index) => {
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
    } else if (chainId.id === 80001) {
      return mumbaiTokenIdsOfUser.map((element, index) => {
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
          <div className="border rounded-2xl h-24 w-24">
            <img src="./portal1.png" className="rounded-2xl"></img>
            <div>Ethereum</div>
          </div>
          <div className="h-24 w-24">
            <img src="./portal2.png" className="rounded-2xl"></img>
            <div>Polygon</div>
          </div>
          <div className="h-24 w-24 rounded-2xl">
            <img src="./portal3.png" className="rounded-2xl"></img>
            <div>Avalanche</div>
          </div>
          <div className="h-24 w-24 rounded-2xl">
            <img src="./portal4.png" className="rounded-2xl"></img>
            <div>Binance</div>
          </div>
          <div className="h-24 w-24 rounded-2xl">
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
