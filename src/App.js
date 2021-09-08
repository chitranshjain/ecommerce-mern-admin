import "./App.css";
import Dashboard from "./Core/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./Core/User Pages/Users";
import Orders from "./Core/Orders Pages/Orders";
import Categories from "./Core/Category Pages/Categories";
import Products from "./Core/Product Pages/Products";
import Complaints from "./Core/Complaints/Complaints";
import AddProduct from "./Core/Product Pages/AddProduct";
import AddCategory from "./Core/Category Pages/AddCategory";
import EditCategory from "./Core/Category Pages/EditCategory";
import EditProduct from "./Core/Product Pages/EditProduct";
import User from "./Core/User Pages/User";
import Order from "./Core/Orders Pages/Order";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/users" exact component={Users} />
          <Route path="/users/:userId" exact component={User} />
          <Route path="/orders" exact component={Orders} />
          <Route path="/orders/:orderId" exact component={Order} />
          <Route path="/categories" exact component={Categories} />
          <Route path="/categories/add" exact component={AddCategory} />
          <Route
            path="/categories/edit/:categoryId"
            exact
            component={EditCategory}
          />
          <Route path="/products" exact component={Products} />
          <Route path="/complaints" exact component={Complaints} />
          <Route path="/products/add" exact component={AddProduct} />
          <Route
            path="/products/edit/:productId"
            exact
            component={EditProduct}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
