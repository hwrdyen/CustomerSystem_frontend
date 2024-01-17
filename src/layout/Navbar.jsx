import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Customer System
          </Link>
          <Link to="/adduser" className="btn btn-outline-light">
            Add User
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
