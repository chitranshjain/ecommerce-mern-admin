import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar";
import { RiAddFill } from "react-icons/ri";

import "./Categories.css";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    setCategories([]);
    axios({
      method: "get",
      url: "https://ecommerceappcj.herokuapp.com/api/categories/",
    }).then(function (response) {
      setCategories(response.data.categories);
    });
  };

  return (
    <div className="dashboard-parent-div">
      <Row>
        <Col lg={2}>
          <Sidebar />
        </Col>
        <Col className="categories-content" lg={10}>
          <Row>
            <Col lg={10}>
              <h4>Product Categories</h4>
              <p>Below are the product categories currently added.</p>
            </Col>
            <Col className="add-cat-col" lg={2}>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>
                    <div className="add-cat-overlay">Add new category.</div>
                  </Tooltip>
                }
              >
                <Link to="/categories/add">
                  <div>
                    <RiAddFill className="add-cat-btn" />
                  </div>
                </Link>
              </OverlayTrigger>
            </Col>
          </Row>
          <hr/>
          <Row>
            {categories.map((category) => {
              console.log(category);
              return (
                <Col lg={3}>
                  <Card className="category-card">
                    <img
                      src={`https://ecommerceappcj.herokuapp.com/${category.image}`}
                      alt={category.name}
                    />
                    <h5>{category.name}</h5>
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

export default Categories;
