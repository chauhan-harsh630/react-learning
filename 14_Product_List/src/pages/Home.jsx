import Hero from "../components/Hero/Hero";
import Productcard from "../components/Product/Productcard";
import products from "../data/products";
import "../components/Product/ProductList.css";

function Home() {
  return (
    <>
      <Hero />
      <div className="container">
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#2f3542",
            fontSize: "32px",
          }}
        >
          Featured Products
        </h2>
        <div className="product-list">
          {products.map((product) => (
            <Productcard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
