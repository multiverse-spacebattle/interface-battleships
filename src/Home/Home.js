const chainIdToImageMapping = {
  1: "./3-Blue_640x360.png",
  43113: "./3-Red_640x360.png",
  4002: "./3-Green_640x360.png",
  80001: "./3-Purple_640x360.png",
};

const chainIdToNameMapping = {
  1: "Ethereum",
  43113: "Avalanche",
  4002: "Fantom",
  80001: "Polygon",
};

function Home({ chainId }) {
  console.log(chainId);
  return (
    <div className="flex flex-col w-full items-center">
      <div>Welcome to the cross-chain pvp spaceship game</div>
      {chainId === undefined ? (
        <div className="flex flex-col w-full items-center">
          Please connect to your wallet to get started!
        </div>
      ) : (
        <div className="flex flex-col w-full items-center">
          <div>You currently have 0 spaceships</div>
          <div>
            You can mint your spaceship across any layer 1/2. Your NFT will be
            minted on {chainIdToNameMapping[chainId]}
          </div>
          <div>
            If you wish to mint on a different chain, please switch your network
          </div>
          <button className="border border-black w-20">Mint</button>{" "}
        </div>
      )}
    </div>
  );
}

export default Home;
