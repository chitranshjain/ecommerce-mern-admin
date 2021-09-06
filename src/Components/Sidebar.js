import React from "react";
import {
  RiDashboardLine,
  RiShoppingCart2Line,
  RiProductHuntLine,
  RiUser3Line,
  RiAddFill,
  RiFileList3Line,
  RiFeedbackLine,
} from "react-icons/ri";

import { IoIosLaptop } from "react-icons/io";

import logo from "../Assets/logo.png";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar-parent-div">
      <div className="sidebar-content-div">
        <div className="sidebar-logo-div">
          <img src={logo} alt="LOGO" />
          <h4>My Shop</h4>
        </div>
        <div className="sidebar-links-div">
          <div className="sidebar-item active">
            <RiDashboardLine className="sidebar-icon" />
            <p>Dashboard</p>
          </div>
          <div className="sidebar-item">
            <RiFileList3Line className="sidebar-icon" />
            <p>Product Categories</p>
          </div>
          <div className="sidebar-item">
            <IoIosLaptop className="sidebar-icon" />
            <p>Products</p>
          </div>
          <div className="sidebar-item">
            <RiAddFill className="sidebar-icon" />
            <p>Add Product</p>
          </div>
          <div className="sidebar-item">
            <RiShoppingCart2Line className="sidebar-icon" />
            <p>Orders</p>
          </div>
          <div className="sidebar-item">
            <RiUser3Line className="sidebar-icon" />
            <p>Users</p>
          </div>
          <div className="sidebar-item">
            <RiFeedbackLine className="sidebar-icon" />
            <p>Complaints & Feedbacks</p>
          </div>
        </div>
        <div className="sidebar-footer-div">
          <p>© Copyright MyShop Inc.</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
