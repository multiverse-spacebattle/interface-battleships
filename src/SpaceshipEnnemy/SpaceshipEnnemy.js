import { useState, useEffect } from "react";
import axios from "axios";

function SpaceshipProfile({
  tokenId,
  power,
  resource,
  missiles,
  shields,
  staked,
  inBattle,
  setEnnemySpaceshipSelection,
  ennemySpaceshipSelection,
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
        ennemySpaceshipSelection === tokenId
          ? "flex flex-col w-full border border-4 border-blue-500 w-40 h-40 m-5 cursor-pointer"
          : "flex flex-col w-full border border-black w-40 h-40 m-5 cursor-pointer"
      }
      onClick={() => {
        if (tokenId === ennemySpaceshipSelection) {
          setEnnemySpaceshipSelection(null);
        } else {
          setEnnemySpaceshipSelection(tokenId);
        }
      }}
    >
      <img src={imageUrl}></img>
      <div>{tokenId}</div>
      <div>{power}</div>
      <div>{resource}</div>
      <div>{missiles}</div>
      <div>{shields}</div>
      <div>{staked}</div>
      <div>{inBattle}</div>
    </div>
  );
}

export default SpaceshipProfile;
