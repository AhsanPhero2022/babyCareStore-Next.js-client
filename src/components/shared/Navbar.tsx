import Link from "next/link";

const Navbar = () => {

const navItem = (

<>
    <li>Home</li>
    <li>Categories</li>
    <li>Products</li>
    <li>Flash Sale</li>
    <li>About Us</li>
    <li>Contact Us</li>

    </>
)



  return (
    <div className="navbar bg-base-100  border-b  w-[90%] mx-auto">
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
          Baby <span className="text-violet-700">
          Care
            </span> Store
        </Link>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
       {navItem}
        </ul>
      </div>
      <div className="navbar-end">
        <a href="/dashboard">Dashboard</a>
      </div>
     
    </div>
  );
};

export default Navbar;
