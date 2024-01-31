import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";

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
import PricingTable from "./PricingTable";
import SelectGlobal from "../../comonents/SelectGlobal";

const PricingDetails = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <Box
        position={"relative"}
        top={70}
        left={0}
        style={{
          padding: "1rem",
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
              // margin: "0 1rem 0 0",
            }}
          >
            <DetailsSideNav />
          </Grid>

          <Grid
            item
            xs={10}
            sx={{
              padding: "0 1rem 1rem 1rem",
            }}
          >
            <Grid item xs={12}>
              <Typography
                color={"#364152"}
                fontWeight={700}
                fontSize={"1.5rem"}
                margin={"0 1rem 1rem 1rem"}
              >
                Pricing Details
              </Typography>
            </Grid>

            <Paper
              elevation={2}
              sx={{
                bgcolor: "#E3E8EF",
                padding: "1rem",
              }}
            >
              <Grid container gap={"1rem"} alignItems={"center"}>
                <Grid item xs={2}>
                  <Typography>
                    Drug Tier <InfoOutlined fontSize="1rem" />
                  </Typography>
                  <SelectGlobal />
                </Grid>{" "}
                <Grid item xs={2}>
                  <Typography>
                    Price Change Bins <InfoOutlined fontSize="1rem" />
                  </Typography>
                  <SelectGlobal />
                </Grid>{" "}
                <Grid item xs={3}>
                  <Typography>
                    GPI Search <InfoOutlined fontSize="1rem" />
                  </Typography>
                  <TextField
                    variant="outlined"
                    className="bg-[#F8FAFC]"
                    placeholder="Search"
                    fullWidth
                  />
                </Grid>{" "}
                <Grid item xs={3}>
                  <Typography>
                    Drug Name Search <InfoOutlined fontSize="1rem" />
                  </Typography>
                  <TextField
                    variant="outlined"
                    className="bg-[#F8FAFC]"
                    placeholder="Search"
                    fullWidth
                  />
                </Grid>{" "}
                <Grid item xs={1}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#DEF0FF",
                      color: "#84C5FF",
                      margin: "1.2rem 0 0 0",
                    }}
                  >
                    Filter
                  </Button>
                </Grid>
              </Grid>
            </Paper>
            <Grid
              sx={{
                margin: "1rem 0 0 0",
              }}
              item
              xs={12}
            >
              <PricingTable />
            </Grid>
          </Grid>
          {/* <Grid container> */}
        </Grid>
      </Box>
    </div>
  );
};

export default PricingDetails;
// real
