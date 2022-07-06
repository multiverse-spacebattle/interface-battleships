import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex flex-row w-full border border-black justify-center h-24 items-center">
      <Link className="w-1/4" to={"/attack"}>
        Attack
      </Link>
      <Link className="w-1/4" to={"/mining"}>
        Mining
      </Link>
      <Link className="w-1/4" to={"/upgrade"}>
        Upgrade
      </Link>
      <Link className="w-1/4" to={"/traverse"}>
        Traverse
      </Link>
    </div>
  );
}

export default Header;
