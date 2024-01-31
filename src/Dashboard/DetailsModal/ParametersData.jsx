import { Box, Grid, Typography ,Button} from "@mui/material";
import { NavLink } from "react-router-dom";
const ParametersData = ({ data, runs }) => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={6}>
          <Box margin={"0 0 1rem 0"}>
                      <Typography className="text-[#697586]">Surplus Target</Typography>
                      <Typography className="text-[#364152]">{data?.[0]?.surplus_target}</Typography>
                  </Box>
          <Box margin={"0 0 1rem 0"}>
            <Typography className="text-[#697586]">
              Max Deficit per Script
                      </Typography>
                      <Typography className="text-[#364152]">${data?.[0]?.max_deficit_per_script}</Typography>
          </Box>
          <Box margin={"0 0 1rem 0"}>
            <Typography className="text-[#697586]">
              Max Price Increase
            </Typography>
                      <Typography className="text-[#364152]">{data?.[0]?.max_price_increase_percent}%</Typography>
          </Box>
          <Box margin={"0 0 1rem 0"}>
            <Typography className="text-[#697586]">
              Maximum UNC Value Offset:
            </Typography>
                      <Typography className="text-[#364152]">{data?.[0]?.unc_value_offset}</Typography>
          </Box>
          <Box margin={"0 0 1rem 0"}>
            <Typography className="text-[#697586]">
              Initial Flat Discount
            </Typography>
                      <Typography className="text-[#364152]">{data?.[0]?.initial_flat_discount}%</Typography>
          </Box>
          <Box margin={"0 0 1rem 0"}>
            <Typography className="text-[#697586]">
              Manage Dispensing Fee:
            </Typography>
                      <Typography className="text-[#364152]">{data?.[0]?.manage_discount_fee}</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box margin={"0 0 1rem 0"}>
            <Typography className="text-[#697586]">
              Competitive Target
            </Typography>
                      <Typography className="text-[#364152]">{data?.[0]?.competitive_target}</Typography>
          </Box>{" "}
          <Box margin={"0 0 1rem 0"}>
            <Typography className="text-[#697586]">
              Max Surplus per Script
            </Typography>
                      <Typography className="text-[#364152]">${data?.[0]?.max_surplus_per_script}</Typography>
          </Box>{" "}
          <Box margin={"0 0 1rem 0"}>
            <Typography className="text-[#697586]">
              Max Price Decrease
            </Typography>
                      <Typography className="text-[#364152]">{data?.[0]?.max_price_decrease_percent}%</Typography>
          </Box>{" "}
          <Box margin={"0 0 1rem 0"}>
            <Typography className="text-[#697586]">Price Below UNC:</Typography>
                      <Typography className="text-[#364152]">${data?.[0]?.price_below_unc}</Typography>
          </Box>{" "}
          <Box margin={"0 0 1rem 0"}>
            <Typography className="text-[#697586]">
              Flat Discount Cut Off Price:
            </Typography>
                      <Typography className="text-[#364152]">${data?.[0]?.flat_discount_cutoff_percent}</Typography>
          </Box>
        </Grid>
      </Grid>
          {runs === 1 && (
              <Box
                  position={"absolute"}
                  bottom={10}
                  right={10}
                  display={"flex"}
                  gap={"1rem"}
              >
                  <Button variant="outlined"
                      style={{
                          textTransform: "capitalize",
                      }}
                  >Drug Details</Button>
                  <NavLink to={"/details/run_details"}>
                      <Button variant="contained"
                          style={{
                              textTransform: "capitalize",
                          }}
                      >Run Details</Button>
                  </NavLink>
              </Box>
          )}

          {runs > 1 && (
              <Box
                  position={"absolute"}
                  bottom={10}
                  right={10}
                  display={"flex"}
                  gap={"1rem"}
              >
                  <Button variant="outlined"
                      style={{
                          textTransform: "capitalize",
                      }}
                  >Run Details</Button>
                  <NavLink to={"/details/tradeoff_curve"}>
                      <Button variant="contained"
                          style={{
                              textTransform: "capitalize",
                          }}
                      >Trade off curve</Button>
                  </NavLink>
              </Box>
          )}

      </Box>
  );
};

export default ParametersData;
