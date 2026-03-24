import { DollarSign, Users, ShoppingCart, Activity } from "lucide-react";
import { mockStats } from "../../data/mockData";
import "./DashBoard.css";

function DashBoard() {
    return (
        <div className="dashboard">
            <div className="page-header">
                <h1>Dashboard Overview</h1>
                <p>Welcome back! Here's what's happening today.</p>
            </div>
            
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon sales">
                        <DollarSign size={24} />
                    </div>
                    <div className="stat-details">
                        <p className="stat-label">Total Sales</p>
                        <h3 className="stat-value">{mockStats.totalSales}</h3>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon users">
                        <Users size={24} />
                    </div>
                    <div className="stat-details">
                        <p className="stat-label">Active Users</p>
                        <h3 className="stat-value">{mockStats.activeUsers}</h3>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon orders">
                        <ShoppingCart size={24} />
                    </div>
                    <div className="stat-details">
                        <p className="stat-label">New Orders</p>
                        <h3 className="stat-value">{mockStats.newOrders}</h3>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon rate">
                        <Activity size={24} />
                    </div>
                    <div className="stat-details">
                        <p className="stat-label">Conversion Rate</p>
                        <h3 className="stat-value">{mockStats.conversionRate}</h3>
                    </div>
                </div>
            </div>

            <div className="dashboard-content">
                <div className="chart-placeholder">
                    <h3>Revenue Analytics</h3>
                    <div className="fake-chart">
                        {/* Fake bars for demo */}
                        <div className="bar" style={{ height: "40%" }}></div>
                        <div className="bar" style={{ height: "60%" }}></div>
                        <div className="bar" style={{ height: "30%" }}></div>
                        <div className="bar" style={{ height: "80%" }}></div>
                        <div className="bar" style={{ height: "50%" }}></div>
                        <div className="bar" style={{ height: "90%" }}></div>
                        <div className="bar" style={{ height: "70%" }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashBoard;