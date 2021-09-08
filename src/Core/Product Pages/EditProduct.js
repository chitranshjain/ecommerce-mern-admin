import React, { useEffect, useRef, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar";
import axios from "axios";

import "./EditProduct.css";
import { useHistory } from "react-router";

function EditProduct(props) {
  const [productData, setProductData] = useState();
  const [categories, setCategories] = useState([]);

  const [imagePreview, setImagePreview] = useState("");
  const [image, setImage] = useState(null);
  const imageButtonRef = useRef();
  const types = ["image/png", "image/jpeg", "image/jpg"];
  const productId = props.match.params.productId;
  const history = useHistory();

  useEffect(() => {
    getCategories();
    getProduct();
  }, []);

  const getProduct = () => {
    setProductData();
    axios({
      method: "get",
      url: `https://ecommerceappcj.herokuapp.com/api/products/product/${productId}`,
    })
      .then((response) => {
        setProductData(response.data.product);
        setImagePreview(
          `https://ecommerceappcj.herokuapp.com/${response.data.product.image}`
        );
      })
      .catch((err) => {
        console.log("Error : " + err.message);
      });
  };

  const getCategories = () => {
    setCategories([]);
    axios({
      method: "get",
      url: "https://ecommerceappcj.herokuapp.com/api/categories/",
    }).then(function (response) {
      setCategories(response.data.categories);
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  function handleImageChange(event) {
    let selectedFile = event.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setImage(selectedFile);
      setImagePreview(URL.createObjectURL(selectedFile));
    } else {
      setImage(null);
    }
  }

  const editProduct = async (event) => {
    event.preventDefault();
    try {
      axios({
        method: "patch",
        url: `https://ecommerceappcj.herokuapp.com/api/products/update/${productId}`,
        data: {
          name: productData.name,
          price: productData.price,
          stockQuantity: productData.stockQuantity,
          categoryName: productData.category,
          description: productData.description,
        },
      }).then((response) => {
        if (image) {
          const formData = new FormData();
          formData.append("image", image);
          axios({
            method: "patch",
            url: `https://ecommerceappcj.herokuapp.com/api/products/update/image/${productId}`,
            data: formData,
          }).then((res) => {
            setImagePreview();
            setProductData({
              name: "",
              price: "",
              stock: "",
              category: "",
              desc: "",
            });
            history.push("/products");
          });
        } else {
          setImagePreview();
          setProductData({
            name: "",
            price: "",
            stock: "",
            category: "",
            desc: "",
          });
          history.push("/products");
        }
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
        <Col className="add-product-content" lg={10}>
          <h4>Add Product</h4>
          <p>
            Please fill the product details in the form below to add a new
            product.
          </p>
          <Card className="add-product-form-card">
            {productData && (
              <div>
                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Product Name</p>
                      <input
                        type="text"
                        name="name"
                        value={productData.name}
                        onChange={handleChange}
                      ></input>
                    </div>
                  </Col>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Product Price</p>
                      <input
                        type="text"
                        name="price"
                        value={productData.price}
                        onChange={handleChange}
                      ></input>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Product Category</p>
                      <select
                        className="add-product-dropdown"
                        name="category"
                        id="category"
                        value={productData.category}
                        onChange={handleChange}
                      >
                        <option className="add-product-dropdown-option">
                          Please select a product category
                        </option>
                        {categories.map((category) => {
                          return (
                            <option
                              className="add-product-dropdown-option"
                              value={category.name}
                            >
                              {category.name}
                            </option>
                          );
                        })}{" "}
                      </select>
                    </div>
                  </Col>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Stock Quantity</p>
                      <input
                        type="number"
                        name="stockQuantity"
                        min={0}
                        value={productData.stockQuantity}
                        onChange={handleChange}
                      ></input>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Product Description</p>
                      <textarea
                        rows={8}
                        name="description"
                        value={productData.description}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </Col>
                  <Col>
                    <div className="add-product-image-div">
                      <div
                        onClick={() => {
                          imageButtonRef.current.click();
                        }}
                        className="product-image-div"
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
                          <p>Add product image</p>
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>
                <button onClick={editProduct} className="add-product-btn">
                  Update Product
                </button>
              </div>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default EditProduct;
