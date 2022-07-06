function AttackPage() {
  return (
    <div className="flex flex-col w-full px-48 ">
      <div className="flex flex-row w-full border border-black h-96">
        <div className="flex flex-col w-3/4 border border-black h-full">
          ENEMIES
        </div>
        <div className="flex flex-col w-1/4 border border-black h-full">
          GALAXY
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
