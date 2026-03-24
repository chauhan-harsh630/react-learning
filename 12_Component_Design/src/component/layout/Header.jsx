import { Search, Bell, User } from "lucide-react";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="header-search">
                <Search size={18} className="search-icon" />
                <input type="text" placeholder="Search orders, customers, or products..." />
            </div>
            <div className="header-actions">
                <button className="icon-btn">
                    <Bell size={20} />
                    <span className="badge">3</span>
                </button>
                <div className="user-profile">
                    <div className="avatar">
                        <User size={20} />
                    </div>
                    <div className="user-info">
                        <span className="user-name">Admin User</span>
                        <span className="user-role">Super Admin</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;