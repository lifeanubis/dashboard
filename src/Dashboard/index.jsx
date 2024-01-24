import { Box, Grid } from "@mui/material";
import Header from "./Header";
import SideNav from "./SideNav";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={{
              width: "15.5rem",
              padding: "0",
              margin: "0",
              overflowX: "hidden",
            }}
          >
            <SideNav />
          </Box>
        </Grid>
        <Grid item xs={10}>
          <div
            style={{
              height: "100vh",
              overflow: "hidden",
              backgroundColor: "#FFF",
              padding: "1.5rem",
            }}
          >
            <Outlet />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
