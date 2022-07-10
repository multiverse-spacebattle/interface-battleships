import { useState, useEffect } from "react";
import axios from "axios";

function SpaceshipEnnemy({
  details,
  setEnnemySpaceshipSelection,
  ennemySpaceshipSelection,
  setEnnemySpaceshipDetails,
}) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    axios
      .get("https://nft-fleet-server.herokuapp.com/?chainId=42&power=12")
      .then((result) => {
        setImageUrl(result.data.image);
      });
  }, []);

  return (
    <div
      className={
        ennemySpaceshipSelection === details.tokenId
          ? "flex flex-col w-full border border-4 border-blue-500 w-40 h-40 m-5 cursor-pointer"
          : "flex flex-col w-full border border-black w-40 h-40 m-5 cursor-pointer"
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
      <div>{details.tokenId}</div>
      <div>{details.power}</div>
      <div>{details.resource}</div>
      <div>{details.missiles}</div>
      <div>{details.shields}</div>
      <div>{details.staked}</div>
      <div>{details.inBattle}</div>
    </div>
  );
}

export default SpaceshipEnnemy;
