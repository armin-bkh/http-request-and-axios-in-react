import { NavLink, withRouter } from "react-router-dom";

const links = [
  { title: "Home", to: "/" },
  { title: "New comment", to: "/new-comment" },
];

const Navigation = () => {
  return (
    <nav className={`self-start`}>
      <ul className={`flex`}>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink className={`px-1 py-2`} activeClassName="text-red-500" to={link.to}>{link.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
