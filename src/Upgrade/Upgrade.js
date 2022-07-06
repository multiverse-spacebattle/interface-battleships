function Upgrade() {
  return (
    <div className="flex flex-col w-full ">
      <div className="flex flex-row">
        <div className="w-2/4 h-96 border border-black">Image Left</div>
        <div className="w-2/4 h-96 border border-black">Description Right</div>
      </div>
      <div className="w-full h-24 border border-black">Details</div>
      <div className="w-full flex flex-row justify-center">
        <button className="border border-black w-20">Upgrade</button>
      </div>
    </div>
  );
}

export default Upgrade;
