import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { NavLink } from "react-router-dom";
import { AddCircleOutline } from "@mui/icons-material";
import NewScenarioModal from "./NewScenarioModal";
import { useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        position={"absolute"}
        top={0}
        left={0}
        width={"100vw"}
        style={{
          color: "#ffffff",
          backgroundColor: "#0058A6",
          padding: "1rem 0.5rem 1rem 0.5rem",
        }}
      >
        <Grid container alignContent={"center"} alignItems={"center"}>
          <Grid item xs={8}>
            <Grid
              container
              justifyContent={"flex-start"}
              gap={"5rem"}
              alignItems={"center"}
            >
              <Grid item>
                <Typography fontSize={"1.3rem"} paddingLeft={"1.5rem"}>
                  Price Optimiser
                </Typography>
                <Typography fontSize={"0.9rem"} paddingLeft={"1.5rem"}>
                  powered by RxSense
                </Typography>
              </Grid>
              <Grid item>
                <NavLink
                  to={"/dashboard/dashboards"}
                  className={({ isActive }) =>
                    `${isActive ? `bg-sky-900` : `bg-transparent`} p-2
                    font-semibold
                    `
                  }
                  style={{
                    borderRadius: "0.3rem",
                    padding: "0.5rem 1rem 0.5rem 1rem",
                  }}
                >
                  Over View
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink
                  to={"/dashboard/running_sum"}
                  className={({ isActive }) =>
                    `${
                      isActive ? `bg-sky-900` : `bg-transparent`
                    } p-2 font-semibold `
                  }
                  style={{
                    borderRadius: "0.3rem",
                    padding: "0.5rem 1rem 0.5rem 1rem",
                  }}
                >
                  Running Sum
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink
                  to={"/dashboard/scenario"}
                  className={({ isActive }) =>
                    `${isActive ? `bg-sky-900` : `bg-transparent`} p-2
                    font-semibold `
                  }
                  style={{
                    borderRadius: "0.3rem",
                    padding: "0.5rem 1rem 0.5rem 1rem",
                  }}
                >
                  Scenarios
                </NavLink>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"flex-end"}
              gap={"3rem"}
            >
              <Grid item>
                <Button
                  startIcon={<AddCircleOutline />}
                  style={{
                    width: "100%",
                    backgroundColor: "green",
                    color: "#ffffff",
                    padding: "6px 12px",
                    textTransform: "capitalize",
                  }}
                  onClick={() => setOpen(true)}
                >
                  New scenario
                </Button>
              </Grid>
              {/* <Grid item>
                <NavLink to={"/details/tradeoff_curve"}>
                  <SettingsIcon />
                </NavLink>
              </Grid> */}
              <Grid item>
                <Box>
                  <Avatar sx={{ width: 35, height: 35 }} alt="A" />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <NewScenarioModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
