import { useState, useEffect } from "react";
import axios from "axios";

function SpaceshipEnnemy({
  chainId = 4,
  details,
  setEnnemySpaceshipSelection,
  ennemySpaceshipSelection,
  setEnnemySpaceshipDetails,
}) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://nft-fleet-server.herokuapp.com/?chainId=${chainId}&power=${details.power}`
      )
      .then((result) => {
        setImageUrl(result.data.image);
      });
  }, [chainId]);

  return (
    <div
      className={
        ennemySpaceshipSelection === details.tokenId
          ? "flex flex-col w-full border border-4 border-blue-500 w-32 h-32 m-5 cursor-pointer"
          : "flex flex-col w-full border border-black w-32 h-32 m-5 cursor-pointer"
      }
      onClick={() => {
        if (details.tokenId === ennemySpaceshipSelection) {
          setEnnemySpaceshipSelection(null);
          setEnnemySpaceshipDetails(null);
        } else {
          setEnnemySpaceshipSelection(details.tokenId);
          details.imageUrl = imageUrl;
          setEnnemySpaceshipDetails(details);
        }
      }}
    >
      <img src={imageUrl}></img>
      <div className="flex flex-row bg-neutral-800 px-1">
        <div className="w-full text-sm">ID:{details.tokenId}</div>
        <div className="w-full text-sm">power:{details.power}</div>

        {/* <img src={imageUrl}></img>
      <div>{details.tokenId}</div>
      <div>{details.power}</div>
      <div>{details.resource}</div>
      <div>{details.missiles}</div>
      <div>{details.shields}</div>
      <div>{details.staked}</div>
      <div>{details.inBattle}</div> */}
      </div>
    </div>
  );
}

export default SpaceshipEnnemy;
