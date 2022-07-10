import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex flex-row w-full  items-center h-12 bg-neutral-800">
      <Link className="w-1/4 border border-neutral-600 text-center" to={"/"}>
        Home
      </Link>
      <Link
        className="w-1/4 border border-neutral-600 text-center"
        to={"/attack"}
      >
        Attack
      </Link>
      <Link
        className="w-1/4 border border-neutral-600 text-center"
        to={"/mining"}
      >
        Mining
      </Link>
      <Link
        className="w-1/4 border border-neutral-600 text-center"
        to={"/upgrade"}
      >
        Upgrade
      </Link>
      <Link
        className="w-1/4 border border-neutral-600 text-center"
        to={"/traverse"}
      >
        Traverse
      </Link>
    </div>
  );
}

export default Header;
