import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/hospital.png" width={50} height={50} />
      </div>

      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>

      <Link href="/dummy">
        <a>Dummy Listing</a>
      </Link>
    </nav>
  );
};
export default Navbar;
