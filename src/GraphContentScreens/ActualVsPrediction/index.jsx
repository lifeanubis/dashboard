import {
  Box,
  Button,
  Grid,
  Input,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import DetailsSideNav from "../DetailsSideNav";
import { createElement, useState } from "react";
import { InfoOutlined } from "@mui/icons-material";
import TimeSeries from "../RunDetailsUi/TimeSeries";
import { TimeLineGraph } from "../RunDetailsUi/TimeSeries/TimeLineGraph";

const ActualVsPrediction = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <Box
        position={"relative"}
        top={70}
        left={0}
        style={{
          padding: "1rem 1rem 10rem 1rem",
          margin: "0 0 10rem 0",
          maxHeight: "100vh",
          overflow: "auto",
        }}
        overflow="auto"
      >
        <Grid container>
          <Grid
            item
            xs={2}
            sx={{
              backgroundColor: "#FCFCFD",
              margin: "0 0 1rem 0",
              padding: "0 0 5rem 0",
            }}
          >
            <DetailsSideNav />
          </Grid>

          <Grid item xs={10}>
            <Grid item xs={12}>
              <Typography
                color={"#364152"}
                fontWeight={700}
                fontSize={"1.5rem"}
                margin={"0 1rem 1rem 1rem"}
              >
                Actual vs Prediction
              </Typography>
            </Grid>
            <Paper
              elevation={3}
              sx={{
                margin: "0 0 1rem 0",
                padding: "1rem",
                backgroundColor: "#FCFCFD",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid item xs={1} className="-rotate-90 ">
                <Typography
                  fontSize={"1rem"}
                  fontWeight={600}
                  className="w-max  h-max flex items-center "
                  margin={"0 0 0 -4rem"}
                >
                  Surplus/Deficit
                </Typography>
              </Grid>

              <Grid item xs={10}>
                <Typography fontSize={"1rem"} fontWeight={600}>
                  Running Sum of Surplus/Deficit Comparison
                </Typography>

                <TimeLineGraph different={true} />
              </Grid>
            </Paper>
            <Paper
              elevation={3}
              sx={{
                margin: "0 0 1rem 0",
                padding: "1rem",
                backgroundColor: "#FCFCFD",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid item xs={1} className="-rotate-90 ">
                <Typography
                  fontSize={"1rem"}
                  fontWeight={600}
                  className="w-max  h-max flex items-center "
                  margin={"0 0 0 -4rem"}
                >
                  Surplus/Deficit
                </Typography>
              </Grid>

              <Grid item xs={10}>
                <Typography fontSize={"1rem"} fontWeight={600}>
                  Net Script Comparison
                </Typography>

                <TimeLineGraph different={true} />
              </Grid>
            </Paper>
            <Paper
              elevation={3}
              sx={{
                margin: "0 0 1rem 0",
                padding: "1rem",
                backgroundColor: "#FCFCFD",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid item xs={1} className="-rotate-90 ">
                <Typography
                  fontSize={"1rem"}
                  fontWeight={600}
                  className="w-max  h-max flex items-center "
                  margin={"0 0 0 -4rem"}
                >
                  Goss Scripts
                </Typography>
              </Grid>

              <Grid item xs={10}>
                <Typography fontSize={"1rem"} fontWeight={600}>
                  Gross Script Comparison
                </Typography>

                <TimeLineGraph different={true} />
              </Grid>
            </Paper>
          </Grid>

          {/* <Grid container> */}
        </Grid>
      </Box>
    </div>
  );
};

export default ActualVsPrediction;
