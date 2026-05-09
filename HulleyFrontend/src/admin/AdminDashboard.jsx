import Sidebar from "./components/Sidebar";

function Dashboard() {

  return (
    <div className="admin-layout">

      <Sidebar />

      <div className="admin-content">

        <h1>Admin Dashboard</h1>

        <div className="stats-grid">

          <div className="stat-card">
            <h3>Total Products</h3>
            <p>24</p>
          </div>
<div className="stat-card">
            <h3>Total Orders</h3>
            <p>12</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;
