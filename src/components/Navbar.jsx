import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
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
    </div>
  );
};

export default Navbar;
