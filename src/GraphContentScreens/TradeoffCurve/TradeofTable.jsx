import {
  AddOutlined,
  MonetizationOnOutlined,
  MoreVert,
  ShowChartOutlined,
    SortRounded,
Circle

} from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Grid,
  Popover,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Avatar,
} from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ListItemIcon from "@mui/material/ListItemIcon";
import DDIcon from "../../../public/ddIcon.png";
import RDIcon from "../../../public/rdIcon.png";
import APIcon from "../../../public/apIcon.png";
import PlusIcon from "../../../public/plusIcon.png";
import DownloadIcon from "../../../public/downloadIcon.png";


const TradeoffTable = ({tableData }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const columns = [
    { field: "run_id", headerName: "", width: 70 },

    { field: "run_id", headerName: "Run ID", width: 70 },
    { field: "comp", headerName: "Comp Target", width: 70 },
    { field: "Status", headerName: "Max Price Inc. %", width: 70 },
    { field: "As of", headerName: "Surplus Target", width: 70 },
    { field: "MAC start", headerName: "Current S/D + Spread", width: 70 },
    {
      field: "MAC start",
      headerName: "Pending Surplus (reversals to come)",
      width: 70,
    },
    {
      field: "MAC start",
      headerName: "Surplus Eop Forecast: Baseline",
      width: 70,
    },
    {
      field: "MAC start",
      headerName: "Surplus Eop Forecast: Optimized",
      width: 70,
    },
    { field: "MAC start", headerName: "Incremental Margin Target ", width: 70 },
    {
      field: "MAC start",
      headerName: "Average Margin Baseline",
      width: 70,
    },
    { field: "MAC start", headerName: "Average Margin: Optimized ", width: 70 },
    {
      field: "MAC start",
      headerName: "Avg Weighted Price: Baseline",
      width: 70,
    },
    {
      field: "MAC start",
      headerName: "Avg Weighted Price: Optimized",
      width: 70,
    },
    { field: "run_id", headerName: "", width: 70 },
  ];

  const rows = [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      age: 35,
      date: "11/11/11",
      target: "50%",
      status: "unused",
      value: "$100,000",
      runs: "1",
    },
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      age: 35,
      date: "11/11/11",
      target: "50%",
      status: "unused",
      value: "$100,000",
      runs: "1",
    },
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      age: 35,
      date: "11/11/11",
      target: "50%",
      status: "unused",
      value: "$100,000",
      runs: "1",
    },
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      age: 35,
      date: "11/11/11",
      target: "50%",
      status: "unused",
      value: "$100,000",
      runs: "1",
    },
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      age: 35,
      date: "11/11/11",
      target: "50%",
      status: "unused",
      value: "$100,000",
      runs: "1",
    },
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      age: 35,
      date: "11/11/11",
      target: "50%",
      status: "unused",
      value: "$100,000",
      runs: "1",
    },
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      age: 35,
      date: "11/11/11",
      target: "50%",
      status: "unused",
      value: "$100,000",
      runs: "1",
    },
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      age: 35,
      date: "11/11/11",
      target: "50%",
      status: "unused",
      value: "$100,000",
      runs: "1",
    },
  ];

  return (
    <div>
      <Box
        // position={"relative"}
        // top={70}
        // left={0}
        // style={{
        //   padding: "1rem",
        //   // backgroundColor: "red",
        // }}
        // width={"100%"}
        maxHeight={"50vh"}
       margin={"0 0 5rem 0"}
        // height={"80vh"}
        overflow="auto"
      >
        <Grid container>
          <Grid item xs={12}>
            <Table
              style={{
                maxHeight: "20rem",
                overflow: "auto",
                backgroundColor: "#EEF2F6",
                // margin: "2rem 0 2rem 0",
              }}
            >
              <TableHead
                style={
                  {
                    //   height: "7.3rem",
                    //   padding: " 0 0 5rem 0",
                    //   height: "2rem",
                  }
                }
              >
                <TableRow>
                  {columns.map((item, index) => (
                    <TableCell
                      style={{
                        boxShadow: `${index === 3 && "0.2rem 0 0 #1018280F"}`,
                      }}
                      key={index}
                    >
                      <Typography fontSize={"0.7rem"} fontWeight={500}>
                        {item.headerName}
                      </Typography>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                              <>
                                  {tableData?.map((item, index) => (
                    <TableRow key={index} className="bg-white">
                      <>
                        <TableCell key={index}>
                          <Checkbox />
                        </TableCell>

                                              <TableCell key={index} style={{

                                              }} >
                                                  <Box
                                                      sx={{
                                                          display: "flex",
                                                          alignItems:"center"

                                                      } }
                                                  >
                                                  <Circle
                                                      style={{
                                                          fontSize: "0.6rem",
                                                              margin: "0 0.2rem 0 0",

                                                      }}
                                                  />
                                                  {item.run_id}
                                                  </Box>
                                              </TableCell>
                                              <TableCell key={index}>{item.competitive_target}</TableCell>
                        <TableCell
                          key={index}
                          style={{
                            boxShadow: "0.2rem 0 0 #1018280F",
                          }}
                        >
                                                  {item.max_price_increase_percent}
                        </TableCell>
                                              <TableCell key={index}>{item.surplus_target}</TableCell>
                                              <TableCell key={index}>{item.current_surplus}</TableCell>
                        <TableCell key={index}>{item.runs}</TableCell>
                                              <TableCell key={index}>{item.baseline_surplus}</TableCell>
                                              <TableCell key={index}>{item.optimized_surplus}</TableCell>
                                              <TableCell key={index}>{item.incremental_margin_target}</TableCell>
                                              <TableCell key={index}>{item.avg_margin_baseline}</TableCell>
                                              <TableCell key={index}>{item.avg_margin_optimized}</TableCell>

                        <TableCell key={index}>{item.runs}</TableCell>
                        <TableCell key={index}>{item.runs}</TableCell>

                        <TableCell key={index}>
                          <MoreVert
                            aria-describedby={id}
                            variant="contained"
                            onClick={handleClick}
                          />
                          <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "left",
                            }}
                          >
                            <Box
                              sx={{
                                p: "1rem",
                                // bgcolor: "red",
                              }}
                            >
                              <Box
                                sx={{
                                  m: "1rem 0 0 0",
                                  cursor: "pointer",
                                }}
                              >
                                <Typography>
                                <ListItemIcon
                      style={{
                        minWidth: "20px",
                      }}
                    >
                      <Avatar
                        src={DDIcon}
                        style={{
                          width: "1rem",
                          height: "1rem",
                        }}
                      />
                    </ListItemIcon>
                                  Drug Details
                                </Typography>
                              </Box>
                              <Box
                                sx={{
                                  m: "1rem 0 0 0",
                                  cursor: "pointer",
                                }}
                              >
                                <NavLink to={"/details/run_details"}>
                                  <Typography>
                                  <ListItemIcon
                      style={{
                        minWidth: "20px",
                      }}
                    >
                      <Avatar
                        src={RDIcon}
                        style={{
                          width: "1rem",
                          height: "1rem",
                        }}
                      />
                    </ListItemIcon>
                                    Run Details
                                  </Typography>
                                </NavLink>
                              </Box>
                              <Box
                                sx={{
                                  m: "1rem 0 0 0",
                                  cursor: "pointer",
                                }}
                              >
                                <NavLink to={"/details/actual_prediction"}>
                                  <Typography>
                                  <ListItemIcon
                      style={{
                        minWidth: "20px",
                      }}
                    >
                      <Avatar
                        src={APIcon}
                        style={{
                          width: "1rem",
                          height: "1rem",
                        }}
                      />
                    </ListItemIcon>
                                    Act vs. Prediction
                                  </Typography>
                                </NavLink>
                              </Box>
                              <Box
                                sx={{
                                  m: "1rem 0 0 0",
                                  cursor: "pointer",
                                }}
                              >
                                <Typography>
                                <ListItemIcon
                      style={{
                        minWidth: "20px",
                      }}
                    >
                      <Avatar
                        src={PlusIcon}
                        style={{
                          width: "1rem",
                          height: "1rem",
                        }}
                      />
                    </ListItemIcon>
                                  New Scenario
                                </Typography>
                              </Box>
                            </Box>
                          </Popover>
                        </TableCell>
                      </>
                    </TableRow>
                  ))}
                </>
              </TableBody>
                      
            </Table>
          </Grid>
              </Grid>
              <Box
                  style={{
                      margin: "1rem 0 1rem 0",
                      float:"right"
                  }}

              >
                  <Button variant="contained">Compare</Button>
              </Box>
      </Box>
    </div>
  );
};

export default TradeoffTable;
