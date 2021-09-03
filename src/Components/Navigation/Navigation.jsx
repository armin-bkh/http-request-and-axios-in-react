import { NavLink, withRouter } from "react-router-dom";

const links = [
  { title: "Home", to: "/", exact: true },
  { title: "New comment", to: "/new-comment" },
];

const Navigation = () => {
  return (
    <nav className={`self-start`}>
      <ul className={`ml-2 flex`}>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink className={`hover:bg-purple-300 hover:text-white font-medium text-2xl px-3 py-2 rounded-md`} exact={link.exact || false} activeClassName="text-purple-400" to={link.to}>{link.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
