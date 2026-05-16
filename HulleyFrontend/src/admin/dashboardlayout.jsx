import { Outlet } from "react-router-dom";

import AdminRoute from "./AdminRoute";

function DashboardLayout() {

    return (

        <AdminRoute>

            <div className="dashboard-layout">

                <Outlet />

            </div>

        </AdminRoute>

    );
}

export default DashboardLayout;