import { Link, withRouter } from "react-router-dom";

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
            <Link to={link.to}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
