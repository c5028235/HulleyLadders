import { Link } from "react-router-dom";
import "../admin.css";

function Sidebar() {

  return (
    <div className="sidebar">

      <h2 className="sidebar-logo">
        Hulley Admin
      </h2>

      <nav className="sidebar-links">

        <Link to="/admin">
          Dashboard
        </Link>

        <Link to="/admin/products">
          Products
        </Link>

        <Link to="/admin/products/add">
          Add Product
        </Link>

      </nav>

    </div>
  );
}
export default Sidebar;