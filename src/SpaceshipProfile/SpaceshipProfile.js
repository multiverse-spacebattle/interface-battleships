import { useState, useEffect } from "react";
import axios from "axios";

function SpaceshipProfile({
  details,
  setUserSpaceshipSelection,
  userSpaceshipSelection,
  setUserSpaceshipDetails,
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
        userSpaceshipSelection === details.tokenId
          ? "flex flex-col w-full border border-4 border-blue-500 w-32 h-32 m-5 cursor-pointer"
          : "flex flex-col w-full border border-black w-32 h-32 m-5 cursor-pointer"
      }
      onClick={() => {
        if (details.tokenId === userSpaceshipSelection) {
          setUserSpaceshipSelection(null);
          setUserSpaceshipDetails(null);
        } else {
          setUserSpaceshipSelection(details.tokenId);
          details.imageUrl = imageUrl;
          setUserSpaceshipDetails(details);
        }
      }}
    >
      <img src={imageUrl}></img>
      <div className="flex flex-row bg-neutral-800 px-1">
        <div className="w-full text-sm">ID:{details.tokenId}</div>
        <div className="w-full text-sm">power:{details.power}</div>
        {/* <div className="w-full">{details.resource}</div>
        <div className="w-full">{details.missiles}</div>
        <div className="w-full">{details.shields}</div> */}
        {/* <div>{details.staked}</div>
        <div>{details.inBattle}</div> */}
      </div>
    </div>
  );
}

export default SpaceshipProfile;
