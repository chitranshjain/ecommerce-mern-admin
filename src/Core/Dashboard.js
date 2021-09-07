import React from "react";
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

function Dashboard() {
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
              <Card className="dashboard-card">
                <RiShoppingCart2Line className="card-icon" />
                <h4>54 Orders</h4>
                <p>54 orders placed</p>
              </Card>
            </Col>
            <Col>
              <Card className="dashboard-card">
                <BiRupee className="card-icon" />
                <h4>256845 Total Revenue</h4>
                <p>256845 revenue generated</p>
              </Card>
            </Col>
            <Col>
              <Card className="dashboard-card">
                <IoIosLaptop className="card-icon" />
                <h4>89 Products</h4>
                <p>89 products added</p>
              </Card>
            </Col>
            <Col>
              <Card className="dashboard-card">
                <RiUser3Line className="card-icon" />
                <h4>74 Customers</h4>
                <p>74 registered customers</p>
              </Card>
            </Col>
          </Row>
          <h4>Quick Links</h4>
          <Row>
            <Col>
              <Card className="dashboard-action-card">
                <BsViewList className="action-icon" />
                <h4>Product Categories</h4>
                <p>Click here to add, remove or edit categories</p>
              </Card>
            </Col>
            <Col>
              <Card className="dashboard-action-card">
                <IoIosLaptop className="action-icon" />
                <h4>All products</h4>
                <p>Click here to view, remove or edit products</p>
              </Card>
            </Col>
            <Col>
              <Card className="dashboard-action-card">
                <FaLaptopMedical className="action-icon" />
                <h4>Add Products</h4>
                <p>Click here to add new products</p>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className="dashboard-action-card">
                <RiShoppingCart2Line className="action-icon" />
                <h4>All Orders</h4>
                <p>Click here to view, remove or edit orders</p>
              </Card>
            </Col>
            <Col>
              <Card className="dashboard-action-card">
                <RiUser3Line className="action-icon" />
                <h4>All Customers</h4>
                <p>Click here to view registered customer details</p>
              </Card>
            </Col>
            <Col>
              <Card className="dashboard-action-card">
                <RiFeedbackLine className="action-icon" />
                <h4>Complaints & Feedbacks</h4>
                <p>Click here view complaints and feedbacks</p>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
