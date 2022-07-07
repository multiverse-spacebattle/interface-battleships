import SpaceshipProfile from "../SpaceshipProfile/SpaceshipProfile";

function Upgrade() {
  const arr2 = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="flex flex-col w-full ">
      <div className="flex flex-row">
        <div className="w-2/4 h-96 border border-black">Image Left</div>
        <div className="w-2/4 h-96 border border-black">Description Right</div>
      </div>
      <div className="flex flex-col w-full border border-black h-40 flex-wrap overflow-x-auto">
        {arr2.map((element, index) => {
          return <SpaceshipProfile />;
        })}
      </div>
      <div className="w-full h-24 border border-black">Details</div>
      <div className="w-full flex flex-row justify-center">
        <button className="border border-black w-20">Upgrade</button>
      </div>
    </div>
  );
}

export default Upgrade;
