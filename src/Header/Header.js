import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex flex-row w-full  items-center h-12 bg-neutral-800 px-5">
      <Link
        className="w-1/4 border border-neutral-600 text-center hover:border hover:border-amber-600"
        to={"/"}
      >
        Home
      </Link>
      <Link
        className="w-1/4 border border-neutral-600 text-center hover:border hover:border-amber-600"
        to={"/attack"}
      >
        Attack
      </Link>
      <Link
        className="w-1/4 border border-neutral-600 text-center hover:border hover:border-amber-600"
        to={"/mining"}
      >
        Mining
      </Link>
      <Link
        className="w-1/4 border border-neutral-600 text-center hover:border hover:border-amber-600"
        to={"/upgrade"}
      >
        Upgrade
      </Link>
      <Link
        className="w-1/4 border border-neutral-600 text-center hover:border hover:border-amber-600"
        to={"/traverse"}
      >
        Traverse
      </Link>
    </div>
  );
}

export default Header;
