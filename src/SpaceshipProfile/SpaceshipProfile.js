import { useState, useEffect } from "react";
import axios from "axios";

function SpaceshipProfile({ tokenId }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    axios
      .get("https://nft-fleet-server.herokuapp.com/?chainId=42&power=12")
      .then((result) => {
        setImageUrl(result.data.image);
      });
  }, []);

  return (
    <div className="flex flex-col w-full border border-black w-40 h-40 m-5">
      <img src={imageUrl}></img>
      <div>{tokenId}</div>
    </div>
  );
}

export default SpaceshipProfile;
