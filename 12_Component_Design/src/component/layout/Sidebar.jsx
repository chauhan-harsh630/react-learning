import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, Package, Settings, LogOut } from "lucide-react";
import "./Sidebar.css";

function Sidebar() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? "active" : "";
    };

    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <h2>Shopee Admin</h2>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li className={isActive("/")}>
                        <Link to="/">
                            <LayoutDashboard size={20} />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className={isActive("/users")}>
                        <Link to="/users">
                            <Users size={20} />
                            <span>Users</span>
                        </Link>
                    </li>
                    <li className={isActive("/products")}>
                        <Link to="/products">
                            <Package size={20} />
                            <span>Products</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="sidebar-footer">
                <ul>
                    <li className={isActive("/settings")}>
                        <Link to="/settings">
                            <Settings size={20} />
                            <span>Settings</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className="logout">
                            <LogOut size={20} />
                            <span>Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;