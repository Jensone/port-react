import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className="flex gap-5 px-5 py-10 text-slate-50">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/skills">My Skills</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
