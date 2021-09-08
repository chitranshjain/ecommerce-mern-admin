import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar";
import { DataGrid } from "@mui/x-data-grid";

import "./Orders.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [pages, setPages] = useState(5);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = () => {
    setOrders();
    axios({
      method: "get",
      url: "https://ecommerceappcj.herokuapp.com/api/orders/",
    }).then((response) => {
      setOrders(response.data.allOrders);
    });
  };

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
        <Col className="orders-content" lg={10}>
          <h4>Orders</h4>
          <p>Here is the list of all the orders placed on your website</p>
          <hr />
          {orders && (
            <div style={{ height: 600, width: "100%" }}>
              <DataGrid
                rows={orders.map((order) => {
                  return {
                    id: order.id,
                    userId: order.userId.id,
                    userName: order.userId.name,
                    userPhone: order.userId.phone,
                    status:
                      order.status == "placed"
                        ? "Placed"
                        : order.status == "shipped"
                        ? "Shipped"
                        : order.status == "delivered"
                        ? "Delivered"
                        : "Cancelled",
                    orderAmount: `Rs. ${order.orderAmount
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/-`,
                    orderedAt: order.orderedAt,
                  };
                })}
                columns={columns}
                pageSize={pages}
                className="orders-data-grid"
                rowsPerPageOptions={[5, 10, 15, 20, 25]}
                onPageSizeChange={(pageSize) => {
                  setPages(pageSize);
                }}
              />
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default Orders;
