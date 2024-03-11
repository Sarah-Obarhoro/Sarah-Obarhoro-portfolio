import { Link } from "react-router-dom";
import { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="lg:border-b-2">
      <div className="bg-blue items-center flex justify-between px-8 h-16">
        <Link to="/">
          <h1 className="font-dancingScript text-3xl font-extrabold">Sarah</h1>
        </Link>

        {/* Styling for larger screens */}
        <ul className="text-navy hidden lg:flex justify-between w-3/5 font-playFair font-medium pl-60">
          <li className="">
            <Link to="/">About Me</Link>
          </li>

          <li>
            <Link to="/proficiency">Proficiency</Link>
          </li>

          <li>
            <Link to="/projects">Projects</Link>
          </li>

          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>

        <button className="border border-black px-5 py-3 rounded-2xl text-center items-center hover:bg-black hover:text-blue hidden lg:flex font-playFair font-medium">
          <Link to="/contact">Contact Me</Link>
        </button>

        {/* Menu button for small screens */}
        <button onClick={toggleMenu} className="lg:hidden">
          <CgMenuRightAlt className="text-3xl" />
        </button>
      </div>

      {/* Nav items for smaller screens */}
      {menuOpen && (
        <div className="mt-2 bg-blue rounded pb-8 mx-4">
          <ul className="text-navy font-playFair font-medium py-4 pl-5">
            <li className="mb-2">
              <Link to="/">About Me</Link>
            </li>

            <li className="mb-2">
              <Link to="/proficiency">Proficiency</Link>
            </li>

            <li className="mb-2">
              <Link to="/projects">Projects</Link>
            </li>

            <li className="mb-2">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
          <button className="border border-black px-4 py-2 ml-4 rounded-2xl text-center items-center hover:bg-black hover:text-blue font-playFair font-medium text-sm">
            <Link to="/contact">Contact Me</Link>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
