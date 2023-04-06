import Home from "./screens/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useMatch,
} from "react-router-dom";
import { Paths } from "./utils/Paths";

import SupplierQuantity from "./screens/SupplierQuantity";
import Transport from "./screens/Transport/Transport";
import Warehouse from "./screens/Warehouse";
import CustomerOrder from "./screens/CustomerOrder";
import Machine from "./screens/Machine";
import Finance from "./screens/Finance";
import TimeTarget from "./screens/TimeTarget";
import SupplierPayment from "./screens/SupplierPayment";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={Paths["Home"]} element={<Home />} />
        <Route
          path={Paths["SupplierQuantity"]}
          element={<SupplierQuantity />}
        />
        <Route path="/transport/*" element={<Transport />} />
        <Route path={Paths["Warehouse"]} element={<Warehouse />} />
        <Route path={Paths["CustomerOrder"]} element={<CustomerOrder />} />
        <Route path={Paths["Machine"]} element={<Machine />} />
        <Route path={Paths["Finance"]} element={<Finance />} />
        <Route path={Paths["TimeTarget"]} element={<TimeTarget />} />
        <Route path={Paths["SupplierPayment"]} element={<SupplierPayment />} />
      </Routes>
    </Router>
  );
}

export default App;
