import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="grid place-content-center min-h-[50px] fixed w-full top-0 left-0 bg-black opacity-60">
      <nav className="grid grid-flow-col gap-4">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-green-500" : "text-slate-500"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/canary-list"}
          className={({ isActive }) =>
            isActive ? "text-green-500" : "text-slate-500"
          }
        >
          Canary
        </NavLink>
      </nav>
    </header>
  );
}
