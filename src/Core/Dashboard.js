import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Sidebar from "../Components/Sidebar";
import {
  RiShoppingCart2Line,
  RiUser3Line,
  RiFeedbackLine,
} from "react-icons/ri";
import { IoIosLaptop } from "react-icons/io";
import { BiRupee } from "react-icons/bi";
import { BsViewList } from "react-icons/bs";
import { FaLaptopMedical } from "react-icons/fa";

import "./Dashboard.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [orders, setOrders] = useState();
  const [totalRevenue, setTotalRevenue] = useState();
  const [products, setProducts] = useState();
  const [users, setUsers] = useState();

  useEffect(() => {
    getOrders();
    getUsers();
    getProducts();
  }, []);

  const getProducts = () => {
    setProducts();
    axios({
      method: "get",
      url: "https://ecommerceappcj.herokuapp.com/api/products/",
    }).then((response) => {
      setProducts(response.data.products);
    });
  };

  const getUsers = () => {
    setUsers();
    axios({
      method: "get",
      url: "https://ecommerceappcj.herokuapp.com/api/users/",
    }).then((response) => {
      setUsers(response.data.allUsers);
    });
  };

  const getOrders = () => {
    setOrders();
    axios({
      method: "get",
      url: "https://ecommerceappcj.herokuapp.com/api/orders/",
    }).then((response) => {
      setOrders(response.data.allOrders);
      let rev = 0;
      response.data.allOrders.forEach((order) => {
        rev += order.orderAmount;
      });
      setTotalRevenue(rev);
    });
  };

  return (
    <div className="dashboard-parent-div">
      <Row>
        <Col lg={2}>
          <Sidebar />
        </Col>
        <Col className="dashboard-home-content" lg={10}>
          <h4>Dashboard</h4>
          <p>Here's an overview of your online business.</p>
          <Row>
            <Col>
              {orders && (
                <Card className="dashboard-card">
                  <RiShoppingCart2Line className="card-icon" />
                  <h4>{orders.length} Orders</h4>
                  <p>{orders.length} orders placed</p>
                </Card>
              )}
            </Col>
            <Col>
              {totalRevenue && (
                <Card className="dashboard-card">
                  <BiRupee className="card-icon" />
                  <h4>
                    {totalRevenue
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    Total Revenue
                  </h4>
                  <p>
                    {totalRevenue
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    revenue generated
                  </p>
                </Card>
              )}
            </Col>
            <Col>
              {products && (
                <Card className="dashboard-card">
                  <IoIosLaptop className="card-icon" />
                  <h4>{products.length} Products</h4>
                  <p>{products.length} products added</p>
                </Card>
              )}
            </Col>
            <Col>
              {users && (
                <Card className="dashboard-card">
                  <RiUser3Line className="card-icon" />
                  <h4>{users.length} Customers</h4>
                  <p>{users.length} registered customers</p>
                </Card>
              )}
            </Col>
          </Row>
          <h4>Quick Links</h4>
          <Row>
            <Col>
              <Card className="dashboard-action-card">
                <BsViewList className="action-icon" />
                <h4>Product Categories</h4>
                <p>
                  <Link to="/categories">Click here</Link> to add, remove or
                  edit categories
                </p>
              </Card>
            </Col>
            <Col>
              <Card className="dashboard-action-card">
                <IoIosLaptop className="action-icon" />
                <h4>All products</h4>
                <p>
                  <Link to="/products">Click here</Link> to view, remove or edit
                  products
                </p>
              </Card>
            </Col>
            <Col>
              <Card className="dashboard-action-card">
                <FaLaptopMedical className="action-icon" />
                <h4>Add Products</h4>
                <p>
                  <Link to="/products/add">Click here</Link> to add new products
                </p>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Card className="dashboard-action-card">
                <RiShoppingCart2Line className="action-icon" />
                <h4>All Orders</h4>
                <p>
                  <Link to="/orders">Click here</Link> to view, remove or edit
                  orders
                </p>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="dashboard-action-card">
                <RiUser3Line className="action-icon" />
                <h4>All Customers</h4>
                <p>
                  <Link to="/users">Click here</Link> to view registered
                  customer details
                </p>
              </Card>
            </Col>
            {/* <Col>
              <Card className="dashboard-action-card">
                <RiFeedbackLine className="action-icon" />
                <h4>Complaints & Feedbacks</h4>
                <p>
                  <Link to="/complaints">Click here</Link> view complaints and
                  feedbacks
                </p>
              </Card>
            </Col> */}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
