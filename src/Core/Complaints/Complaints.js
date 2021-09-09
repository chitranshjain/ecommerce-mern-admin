import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar";
import { DataGrid } from "@mui/x-data-grid";

import "./Complaints.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Complaints() {
  
  const columns = [
    {
      field: "id",
      headerName: "Order ID",
      width: 200,
      renderCell: (params) => {
        return <Link to={`/orders/${params.value}`}>{params.value}</Link>;
      },
    },
    {
      field: "userId",
      headerName: "Customer ID",
      width: 200,
      renderCell: (params) => {
        return <Link to={`/users/${params.value}`}>{params.value}</Link>;
      },
    },
    {
      field: "userName",
      headerName: "Customer name",
      width: 240,
    },
    {
      field: "userPhone",
      headerName: "Customer Phone",
      width: 200,
    },
    {
      field: "status",
      headerName: "Order Status",
      width: 160,
    },
    {
      field: "orderAmount",
      headerName: "Order Amount",
      width: 160,
    },
    {
      field: "orderedAt",
      headerName: "Order Date",
      width: 160,
    },
  ];

  return (
    <div className="dashboard-parent-div">
      <Row>
        <Col lg={2}>
          <Sidebar />
        </Col>
        <Col className="complaints-content" lg={10}>
          <h4>Complaints & Feedbacks</h4>
          <p>
            Below are all the feedbacks and complaints provided by your
            customers.
          </p>
          <hr />
        </Col>
      </Row>
    </div>
  );
}

export default Complaints;
