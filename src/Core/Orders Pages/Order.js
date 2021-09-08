import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar";

import "./Order.css";

function Order(props) {
  const [order, setOrder] = useState({});
  const orderId = props.match.params.orderId;
  useEffect(() => {
    getOrder();
  }, []);

  const getOrder = () => {
    axios({
      method: "get",
      url: `https://ecommerceappcj.herokuapp.com/api/orders/order/${orderId}`,
    }).then((response) => {
      setOrder(response.data.order);
    });
  };

  return (
    <div className="dashboard-parent-div">
      <Row>
        <Col lg={2}>
          <Sidebar />
        </Col>
        <Col className="single-order-content" lg={10}>
          <Card className="order-card"></Card>
        </Col>
      </Row>
    </div>
  );
}

export default Order;
