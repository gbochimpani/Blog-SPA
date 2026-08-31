import "./Layout.css";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header>
        <NavLink to="/">SPA Blog</NavLink>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <p>Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
