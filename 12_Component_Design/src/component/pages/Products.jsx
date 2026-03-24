import { Plus } from "lucide-react";
import { mockProducts } from "../../data/mockData";
import Card from "../Ui/Card";
import "./Products.css";

function Products() {
    return (
        <div className="products-page">
            <div className="page-header">
                <div className="header-text">
                    <h1>Products Management</h1>
                    <p>Manage your store catalog and inventory.</p>
                </div>
                <button className="primary-btn">
                    <Plus size={18} />
                    <span>Add Product</span>
                </button>
            </div>

            <div className="products-grid">
                {mockProducts.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Products;
