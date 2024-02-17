import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="about">About Me</NavLink>
        </li>

        <li>
          <NavLink to="technologies">My Tech Stack</NavLink>
        </li>

        <li>
          <NavLink to="projects">My Projects</NavLink>
        </li>

        <li>
          <NavLink to="blog">My Blog</NavLink>
        </li>

        <li>
          <NavLink to="contact">Contact Me</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
