import SpaceshipProfile from "../SpaceshipProfile/SpaceshipProfile";
function Traverse() {
  const arr2 = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col w-full ">
      <div className="flex flex-row">
        <div className="w-full h-96 border border-black">
          <img src={"./SpaceWallpaper3840x1344.png"}></img>
        </div>
      </div>
      <div className="w-full h-24 border border-black">Details</div>
      <div className="flex flex-col w-full border border-black h-40 flex-wrap overflow-x-auto">
        {arr2.map((element, index) => {
          return <SpaceshipProfile />;
        })}
      </div>
      <div className="w-full h-24 border border-black">
        Travel from Ethereum to Avalanche Galaxy
      </div>
      <div className="w-full flex flex-row justify-center">
        <button className="border border-black w-20">Traverse</button>
      </div>
    </div>
  );
}

export default Traverse;
