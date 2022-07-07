import SpaceshipProfile from "../SpaceshipProfile/SpaceshipProfile";

function Upgrade() {
  const arr2 = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="flex flex-col w-full ">
      <div className="flex flex-row">
        <div className="w-2/4 h-96 border border-black">
          <div className="w-32 h-32 border border-black m-5">Upgrade</div>
          <div>Evolutions</div>
          <div className="flex flex-row">
            <div className="w-32 h-32 border border-black m-2">Level 1</div>
            <div className="w-32 h-32 border border-black m-2">Level 2</div>
            <div className="w-32 h-32 border border-black m-2">Level 3</div>
            <div className="w-32 h-32 border border-black m-2">Level 4</div>
            <div className="w-32 h-32 border border-black m-2">Level 5</div>
          </div>
        </div>
        <div className="w-2/4 h-96 border border-black flex flex-row">
          <div className="w-32 h-32 border border-black m-5">Missile</div>
          <div className="w-32 h-32 border border-black m-5">Shield</div>
        </div>
      </div>
      <div className="flex flex-col w-full border border-black h-40 flex-wrap overflow-x-auto">
        {arr2.map((element, index) => {
          return <SpaceshipProfile />;
        })}
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
