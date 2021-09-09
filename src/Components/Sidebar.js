import React from "react";
import {
  RiDashboardLine,
  RiShoppingCart2Line,
  RiUser3Line,
  RiAddFill,
  RiFileList3Line,
} from "react-icons/ri";

import { IoIosLaptop } from "react-icons/io";

import logo from "../Assets/logo.png";
import "./Sidebar.css";
import { Link, useHistory } from "react-router-dom";

function Sidebar() {
  const history = useHistory();

  const isActive = (history, path) => {
    if (history.location.pathname === path) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="sidebar-parent-div">
      <div className="sidebar-content-div">
        <div className="sidebar-logo-div">
          <img src={logo} alt="LOGO" />
          <h4>My Shop</h4>
        </div>
        <div className="sidebar-links-div">
          <Link to="/" className="sidebar-link">
            <div
              className={`sidebar-item ${isActive(history, "/") && "active"}`}
            >
              <RiDashboardLine className="sidebar-icon" />
              <p>Dashboard</p>
            </div>
          </Link>
          <Link to="/categories" className="sidebar-link">
            <div
              className={`sidebar-item ${
                isActive(history, "/categories") && "active"
              }`}
            >
              <RiFileList3Line className="sidebar-icon" />
              <p>Product Categories</p>
            </div>
          </Link>
          <Link to="/categories/add" className="sidebar-link">
            <div
              className={`sidebar-item ${
                isActive(history, "/categories/add") && "active"
              }`}
            >
              <RiAddFill className="sidebar-icon" />
              <p>Add Category</p>
            </div>
          </Link>
          <Link to="/products" className="sidebar-link">
            <div
              className={`sidebar-item ${
                isActive(history, "/products") && "active"
              }`}
            >
              <IoIosLaptop className="sidebar-icon" />
              <p>Products</p>
            </div>
          </Link>
          <Link to="/products/add" className="sidebar-link">
            <div
              className={`sidebar-item ${
                isActive(history, "/products/add") && "active"
              }`}
            >
              <RiAddFill className="sidebar-icon" />
              <p>Add Product</p>
            </div>
          </Link>
          <Link to="/orders" className="sidebar-link">
            <div
              className={`sidebar-item ${
                isActive(history, "/orders") && "active"
              }`}
            >
              <RiShoppingCart2Line className="sidebar-icon" />
              <p>Orders</p>
            </div>
          </Link>
          <Link to="/users" className="sidebar-link">
            <div
              className={`sidebar-item ${
                isActive(history, "/users") && "active"
              }`}
            >
              <RiUser3Line className="sidebar-icon" />
              <p>Users</p>
            </div>
          </Link>
          {/* <Link to="/complaints" className="sidebar-link">
            <div
              className={`sidebar-item ${
                isActive(history, "/complaints") && "active"
              }`}
            >
              <RiFeedbackLine className="sidebar-icon" />
              <p>Complaints & Feedbacks</p>
            </div>
          </Link> */}
        </div>
        <div className="sidebar-footer-div">
          <p>© Copyright MyShop Inc.</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
