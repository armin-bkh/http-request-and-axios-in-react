import { NavLink, withRouter } from "react-router-dom";

const links = [
  { title: "Home", to: "/" },
  { title: "New comment", to: "/new-comment" },
];

const Navigation = () => {
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink activeClassName="text-red-500" to={link.to}>{link.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
