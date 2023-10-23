import { NavLink } from "react-router-dom";
export const NavBar = () => {
  return (
    <>
      <div className="fade-in">
        <nav>
          <ul>
            <li>
           <NavLink to="/Home/Auth"> sign up</NavLink>
            </li>

            <li>
              <NavLink to="/Home/Auth"> login </NavLink>
            </li>
            <li>
              <NavLink to="/Home/Auth"> log out</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default NavBar;
