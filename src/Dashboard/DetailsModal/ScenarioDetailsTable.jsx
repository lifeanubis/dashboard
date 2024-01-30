import {
  AddOutlined,
  ArrowCircleDownOutlined,
  InfoOutlined,
  MonetizationOnOutlined,
  MoreVert,
  ShowChartOutlined,
  SortRounded,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Popover,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Avatar,
} from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ListItemIcon from "@mui/material/ListItemIcon";
import DDIcon from "../../../public/ddIcon.png";
import RDIcon from "../../../public/rdIcon.png";
import APIcon from "../../../public/apIcon.png";
import PlusIcon from "../../../public/plusIcon.png";
import DownloadIcon from "../../../public/downloadIcon.png";
import { DetailsFooter, TableRowText } from "../../comonents/GlobalTypography";

const columns = [
  { field: "run_id", headerName: "Run ID", width: 70 },
  { field: "status", headerName: "Status", width: 70 },
  { field: "Surplus Target", headerName: "Surplus Target", width: 70 },
  { field: "Comp target", headerName: "Comp target", width: 70 },
  { field: "Actions", headerName: "Actions", width: 70 },

  //   {
  //     field: "fullName",
  //     headerName: "Full name",
  //     description: "This column has a value getter and is not sortable.",
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  //   },
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
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    date: "11/11/11",
    target: "50%",
    status: "unused",
    value: "$100,000",
    runs: "1",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,

    date: "11/11/11",
    target: "50%",
    status: "unused",
    value: "$100,000",
    runs: "1",
  },

  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    age: 16,
    date: "11/11/11",
    target: "50%",
    status: "unused",
    value: "$100,000",
    runs: "1",
  },
];

export default function ScenarioDetailsTable({
  data,
  runs,
  setRunIdData,
  runIdData,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [propsData, setPropsData] = useState({});
  const [vertData, setVertData] = useState({});
  const cableData = [
    {
      scenario_id: 1,
      scenario_name: "legacy",
      username: "legacy",
      run_id: 100,
      pharmacy: "CVS",
      pricing_client: "SC",
      contract_type: "Exclusive",
      run_date: "2023-11-28",
      surplus_target: -2800000,
      competitive_target: 0.28,
      max_deficit_per_script: -15.0,
      max_surplus_per_script: 15.0,
      max_price_increase_percent: 0.15,
      max_price_decrease_percent: 1.0,
      unc_value_offset: 0.0,
      price_below_unc: 0.001,
      initial_flat_discount: 0.55,
      flat_discount_cutoff_percent: 1.0,
      manage_discount_fee: "On",
      status: "Unused",
    },
  ];

  const handleCheckbox = (item, e) => {
    /*
                if (e.target.checked === false) {
                    const filtered = propsData?.filter((ele) => ele.id !== item.id);
                    setPropsData(filtered);
                }
                if (e.target.checked === true) {
                    setPropsData([...propsData, item]);
                }*/
    setPropsData({
      ...propsData,
      [item?.run_id]: {
        run_date: item?.run_date,
        contract_type: item?.contract_type,
      },
    });
  };

  useEffect(() => {
    console.log(runIdData, "--");
  }, [propsData]);

  const handleClick = (event, item) => {
    setAnchorEl(event.currentTarget);

    setVertData({
      [item?.run_id]: {
        run_date: item?.run_date,
        contract_type: item?.contract_type,
      },
    });
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Box
      sx={{
        maxHeight: "50vh",
        overflow: "auto",
        borderRadius: "8px",
      }}
    >
      <Table
        style={{
          margin: "0 0 2rem 0",
          border: "1px solid #EAECF0",
          borderRadius: "8px",
        }}
      >
        <TableHead>
          <TableRow>
            {columns.map((item, index) => (
              <TableCell
                key={index}
                style={{
                  backgroundColor: "#EEF2F6",
                }}
              >
                <DetailsFooter>{item.headerName}</DetailsFooter>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {cableData?.map((item, index) => (
            <TableRow key={index} className="bg-white">
              <>
                <TableCell key={index}>
                  {/* for multiple runs conditionally render */}

                  <TableRowText>
                    {runs > 1 && (
                      <Checkbox onChange={(e) => handleCheckbox(item, e)} />
                    )}
                    {item.run_id}
                  </TableRowText>
                </TableCell>
                <TableCell key={index}>
                  {item.status === "Deployed" && (
                    <TableRowText
                      style={{
                        padding: "0.2rem 0.6rem",
                        backgroundColor: "#ABEFC6",
                        width: "max-content",
                        color: "#085D3A",
                        borderRadius: "4px",
                      }}
                    >
                      {item.status}
                    </TableRowText>
                  )}
                  {item.status === "Unused" && (
                    <TableRowText
                      style={{
                        padding: "0.2rem 0.6rem",
                        backgroundColor: "#E3E8EF",
                        width: "max-content",
                        color: "#121926",
                        borderRadius: "4px",
                        fontSize: "12px",
                      }}
                    >
                      {item.status}
                    </TableRowText>
                  )}
                  {item.status === "failed" && (
                    <TableRowText
                      style={{
                        padding: "0.2rem 0.6rem",
                        backgroundColor: "#FEE4E2",
                        width: "max-content",
                        color: "#7A271A",
                        borderRadius: "4px",
                      }}
                    >
                      {item.status}
                    </TableRowText>
                  )}
                  {item.status === "Previous" && (
                    <TableRowText
                      style={{
                        padding: "0.2rem 0.6rem",
                        backgroundColor: "#def0ff",
                        width: "max-content",
                        color: "#00427D",
                        borderRadius: "4px",
                      }}
                    >
                      {item.status}
                    </TableRowText>
                  )}

                  {item.status === "computing" && (
                    <TableRowText
                      style={{
                        padding: "0.2rem 0.6rem",
                        backgroundColor: "#FEF0C7",
                        width: "max-content",
                        color: "#7A2E0E",
                        borderRadius: "4px",
                      }}
                    >
                      {item.status}
                    </TableRowText>
                  )}
                </TableCell>
                <TableCell key={index}>
                  <TableRowText>{item.surplus_target}</TableRowText>
                </TableCell>
                <TableCell key={index}>
                  <TableRowText>{item.competitive_target}</TableRowText>
                </TableCell>

                <TableCell key={index}>
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <TableRowText
                      style={{
                        color: "#1477CF",
                      }}
                    >
                      Details
                    </TableRowText>
                    <MoreVert
                      aria-describedby={id}
                      variant="contained"
                      onClick={(args) => handleClick(args, item)}
                    />
                  </div>
                </TableCell>
              </>
            </TableRow>
          ))}
        </TableBody>
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
              <NavLink
                to={{
                  pathname: "/details/run_details",
                }}
                state={{ data: vertData }}
              >
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
            <Divider
              style={{
                paddingTop: "1rem",
              }}
            />
            <Box
              sx={{
                m: "1rem 0 0 0",
                cursor: "pointer",
              }}
            >
              <Typography
                sx={{
                  color: "#17B26A",
                }}
              >
                <ListItemIcon
                  style={{
                    minWidth: "20px",
                  }}
                >
                  <Avatar
                    src={DownloadIcon}
                    style={{
                      width: "1rem",
                      height: "1rem",
                    }}
                  />
                </ListItemIcon>
                Export MAC File
              </Typography>
            </Box>
          </Box>
        </Popover>
      </Table>
      {runs === 1 && (
        <Box
          position={"absolute"}
          bottom={10}
          right={10}
          display={"flex"}
          gap={"1rem"}
        >
          <Button
            variant="outlined"
            style={{
              textTransform: "capitalize",
            }}
          >
            Drug Details
          </Button>
          <NavLink to={"/details/run_details"}>
            <Button
              variant="contained"
              style={{
                textTransform: "capitalize",
              }}
            >
              Run Details
            </Button>
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
          <NavLink
            to={{ pathname: "/details/run_details" }}
            state={{ data: propsData }}
          >
            <Button
              variant="outlined"
              style={{
                textTransform: "capitalize",
              }}
            >
              Run Details
            </Button>
          </NavLink>
          <NavLink
            to={{ pathname: "/details/tradeoff_curve" }}
            state={{ data: propsData, type: "run_id" }}
          >
            <Button
              variant="contained"
              style={{
                textTransform: "capitalize",
              }}
            >
              Trade off curve
            </Button>
          </NavLink>
        </Box>
      )}
    </Box>
  );
}
