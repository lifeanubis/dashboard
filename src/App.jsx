import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Dashboard from "./Dashboard";
import ScenarioTable from "./Dashboard/ScenarioTable";
import RunningSum from "./Dashboard/RunningSum";
import Dashboards from "./Dashboard/Dashboards";
import RunDetails from "./GraphContentScreens/RunDetailsUi/RunDetails";
import GraphContentDashBoard from "./GraphContentScreens";
import PricingDetails from "./GraphContentScreens/PricingDetails";
import ActualVsPrediction from "./GraphContentScreens/ActualVsPrediction";
import TradeoffCurve from "./GraphContentScreens/TradeoffCurve";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="dashboards" element={<Dashboards />} />
            <Route path="scenario" element={<ScenarioTable />} />
            <Route path="running_sum" element={<RunningSum />} />
          </Route>
          <Route path="details" element={<GraphContentDashBoard />}>
            <Route path="run_details" element={<RunDetails />} />
            <Route path="price_details" element={<PricingDetails />} />
            <Route path="actual_prediction" element={<ActualVsPrediction />} />
            <Route path="tradeoff_curve" element={<TradeoffCurve />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
