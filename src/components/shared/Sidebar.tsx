import Link from "next/link";

const Sidebar = () => {
  return (
    <div>
      <ul className="menu bg-base-200 min-h-screen rounded-box">
        <Link href="/">
          <button className="btn ">Home</button>
        </Link>

        <Link href="/allProducts">
          <button className="btn ">All products page</button>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
