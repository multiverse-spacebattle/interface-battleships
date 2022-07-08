import SpaceshipProfile from "../SpaceshipProfile/SpaceshipProfile";
import chainIdToImageMapping from "../Utils/chainIdToImageMapping";
import chainIdToNameMapping from "../Utils/chainIdToNameMapping";

function Mining({ chainId }) {
  const arr2 = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row">
        <div className="w-3/4 h-96 border border-black">
          <img src="./illustration 3.png"></img>
        </div>
        <div className="w-1/4 h-96 border border-black">
          <img src={chainIdToImageMapping[chainId]}></img>
          Galaxy: {chainIdToNameMapping[chainId]}
        </div>
      </div>
      <div className="w-full h-24 border border-black">Details</div>
      <div className="flex flex-col w-full border border-black h-40 flex-wrap overflow-x-auto">
        {arr2.map((element, index) => {
          return <SpaceshipProfile />;
        })}
      </div>
      <div className="w-full flex flex-row justify-center">
        <button className="border border-black w-20">Claim</button>
        <button className="border border-black w-20">Mine</button>
      </div>
    </div>
  );
}

export default Mining;
