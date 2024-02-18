import { Link } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="bg-blue align-middle flex justify-between px-8 h-16 pt-4">
      <h1 className="font-dancingScript text-3xl font-extrabold">Sarah</h1>
      <ul className="text-navy flex justify-between w-3/5 font-playFair font-medium py-1">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About Me</Link>
        </li>

        <li>
          <Link to="/technologies">My Tech Stack</Link>
        </li>

        <li>
          <Link to="/projects">My Projects</Link>
        </li>

        <li>
          <Link to="/blog">My Blog</Link>
        </li>

        <li>
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
      <CgMenuRightAlt className="" />
    </div>
  );
};

export default Navbar;
