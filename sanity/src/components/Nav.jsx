import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav>
    <NavLink to="/">Hjem</NavLink>
    <NavLink to="Søk">Søk i OMDB</NavLink>
    <NavLink to="/Om">Om siden</NavLink>
  </nav>
);

export default Nav;
