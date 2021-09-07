import React from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar";

import "./Users.css";

function Users() {
  return (
    <div className="dashboard-parent-div">
      <Row>
        <Col lg={2}>
          <Sidebar />
        </Col>
        <Col lg={9}></Col>
      </Row>
    </div>
  );
}

export default Users;
