import Link from "next/link";

const Navbar = () => {
  const navItem = (
    <>
      <Link href="/">
        <li>Home</li>
      </Link>
      <Link href="/categorySorted">
        <li>Categories</li>
      </Link>
      <Link href="/allProducts">
        <li>Products</li>
      </Link>
      <Link href="/flashSale">
        <li>Flash Sale</li>
      </Link>
      <Link href="/aboutUs">
        <li>About Us</li>
      </Link>
      <Link href="/contactUs">
        <li>Contact Us</li>
      </Link>
    </>
  );

  return (
    <div className="navbar text-white bg-gray-500  border-b  px-32 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          Baby <span className="text-violet-800">Care</span> Store
        </Link>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{navItem}</ul>
      </div>
      <div className="navbar-end">
        <a href="/dashboard">Dashboard</a>
      </div>
    </div>
  );
};

export default Navbar;
