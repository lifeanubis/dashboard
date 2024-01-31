import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../Dashboard/Header";

const GraphContentDashBoard = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GraphContentDashBoard;
