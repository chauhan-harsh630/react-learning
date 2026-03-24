import { mockUsers } from "../../data/mockData";
import { UserPlus, Search, MoreVertical } from "lucide-react";
import "./Users.css";

function Users() {
    return (
        <div className="users-page">
            <div className="page-header">
                <div className="header-text">
                    <h1>Users Management</h1>
                    <p>View, edit, and manage all your platform users.</p>
                </div>
                <button className="primary-btn">
                    <UserPlus size={18} />
                    <span>Add User</span>
                </button>
            </div>

            <div className="table-container">
                <div className="table-actions">
                    <div className="search-box">
                        <Search size={18} className="search-icon" />
                        <input type="text" placeholder="Search users by name or email..." />
                    </div>
                    <div className="filters">
                        <select>
                            <option>All Status</option>
                            <option>Active</option>
                            <option>Inactive</option>
                            <option>Suspended</option>
                        </select>
                    </div>
                </div>

                <div className="table-wrapper">
                    <table className="users-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Joined Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockUsers.map((user) => (
                                <tr key={user.id}>
                                    <td>
                                        <div className="user-name-cell">
                                            <div className="user-avatar-small">
                                                {user.name.charAt(0)}
                                            </div>
                                            <span>{user.name}</span>
                                        </div>
                                    </td>
                                    <td>{user.email}</td>
                                    <td>{user.joined}</td>
                                    <td>
                                        <span className={`status-badge ${user.status.toLowerCase()}`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button className="icon-btn-small">
                                            <MoreVertical size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Users;