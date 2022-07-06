function Mining() {
  return (
    <div className="flex flex-col w-full px-48 ">
      <div className="flex flex-row">
        <div className="w-3/4 h-96 border border-black">Image Left</div>
        <div className="w-1/4 h-96 border border-black">Image Right</div>
      </div>
      <div className="w-full h-24 border border-black">Details</div>
      <div className="w-full flex flex-row justify-center">
        {" "}
        <button className="border border-black w-20">Claim</button>
        <button className="border border-black w-20">Mine</button>
      </div>
    </div>
  );
}

export default Mining;
