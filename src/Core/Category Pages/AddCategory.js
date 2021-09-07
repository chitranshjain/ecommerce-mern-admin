import React, { useEffect, useRef, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar";
import axios from "axios";

import "./AddCategory.css";

function AddCategory() {
  const [newCategory, setNewCategory] = useState({
    name: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setNewCategory((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const [imagePreview, setImagePreview] = useState("");
  const [image, setImage] = useState(null);
  const imageButtonRef = useRef();
  const types = ["image/png", "image/jpeg", "image/jpg"];

  function handleImageChange(event) {
    let selectedFile = event.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setImage(selectedFile);
      setImagePreview(URL.createObjectURL(selectedFile));
    } else {
      setImage(null);
    }
  }

  const addCategory = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", newCategory.name);
      formData.append("image", image);
      axios({
        method: "post",
        url: "https://ecommerceappcj.herokuapp.com/api/categories/",
        data: formData,
      }).then((response) => {
        setImagePreview();
        setNewCategory({
          name: "",
        });
      });
    } catch (err) {
      console.log("Error : " + err.message);
    }
  };
  return (
    <div className="dashboard-parent-div">
      <Row>
        <Col lg={2}>
          <Sidebar />
        </Col>
        <Col className="add-category-content" lg={10}>
          <h4>Add Category</h4>
          <p>
            Please fill the category details in the form below to add a new
            category.
          </p>
          <Card className="add-product-form-card">
            <div className="add-product-input-div">
              <p>Category Name</p>
              <input
                type="text"
                name="name"
                value={newCategory.name}
                onChange={handleChange}
              ></input>
            </div>
            <div className="add-category-image-div">
              <div
                onClick={() => {
                  imageButtonRef.current.click();
                }}
                className="category-image-div"
              >
                <Form.Control
                  ref={imageButtonRef}
                  style={{ display: "none" }}
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {imagePreview ? (
                  <img src={imagePreview} alt="preview" />
                ) : (
                  <p>Add category image</p>
                )}
              </div>
            </div>
            <button onClick={addCategory} className="add-category-btn">
              Add Category
            </button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default AddCategory;
