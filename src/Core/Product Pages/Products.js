import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar";
import { RiDeleteBin3Line, RiEditLine } from "react-icons/ri";

import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    setProducts([]);
    axios({
      method: "get",
      url: "https://ecommerceappcj.herokuapp.com/api/products/",
    }).then((response) => {
      setProducts(response.data.products);
    });
  };

  return (
    <div className="dashboard-parent-div">
      <Row>
        <Col lg={2}>
          <Sidebar />
        </Col>
        <Col className="products-content" lg={10}>
          <h4>Products</h4>
          <p>Below are the products currently added to your website.</p>
          <hr />
          <Row>
            {products.map((product) => {
              const commaCost = product.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              return (
                <Col lg={3}>
                  <Card className="product-card">
                    <img
                      src={`https://ecommerceappcj.herokuapp.com/${product.image}`}
                      alt={product.name}
                    />
                    <h5>{product.name}</h5>
                    <p>Cost : Rs. {commaCost}/-</p>
                    <RiEditLine className="product-card-icon edit-icon" />
                    <RiDeleteBin3Line className="product-card-icon delete-icon" />
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Products;
