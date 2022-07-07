import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex flex-row w-full border border-black items-center h-24">
      <Link className="w-1/4 border border-black text-center" to={"/"}>
        Home
      </Link>
      <Link className="w-1/4 border border-black text-center" to={"/attack"}>
        Attack
      </Link>
      <Link className="w-1/4 border border-black text-center" to={"/mining"}>
        Mining
      </Link>
      <Link className="w-1/4 border border-black text-center" to={"/upgrade"}>
        Upgrade
      </Link>
      <Link className="w-1/4 border border-black text-center" to={"/traverse"}>
        Traverse
      </Link>
    </div>
  );
}

export default Header;
