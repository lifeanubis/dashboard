// import { CheckBox, ThreeDRotation } from "@mui/icons-material";
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Avatar,
} from "@mui/material";
import Popover from "@mui/material/Popover";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ScenarioDetailsModal from "./DetailsModal/ScenarioDetailsModal";
import axios from "axios";
import { useSelector } from "react-redux";
import ListItemIcon from "@mui/material/ListItemIcon";
import SDIcon from "../../public/sdIcon.png";
import DDIcon from "../../public/ddIcon.png";
import RDIcon from "../../public/rdIcon.png";
import APIcon from "../../public/apIcon.png";
import PlusIcon from "../../public/plusIcon.png";
import DownloadIcon from "../../public/downloadIcon.png";
import { ScreenTitle, TableRowText } from "../comonents/GlobalTypography";

const columns = [
  { field: "Name", headerName: "Name", width: 70 },
  { field: "Runs", headerName: "Runs", width: 70 },
  { field: "Status", headerName: "Status", width: 70 },
  { field: "As of", headerName: "As of", width: 70 },
  { field: "MAC start", headerName: "MAC start", width: 70 },
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
const cableData = [
  {
    scenario_id: 1,
    scenario_name: "legacy",
    runs: 11,
    status: "Deployed",
    as_of_date: "2023-11-28",
    mac_start_date: "2023-11-29",
    surplus_target: -200000,
    competitive_target: 0.0,
    run_date: "2023-11-28",
    contract_type: "Exclusive",
    start_date: "2023-01-01",
    end_date: "2023-12-31",
    username: "legacy",
  },

  {
    scenario_id: 1,
    scenario_name: "legacy",
    runs: 11,
    status: "Unused",
    as_of_date: "2023-11-28",
    mac_start_date: "2023-11-29",
    surplus_target: -200000,
    competitive_target: 0.0,
    run_date: "2023-11-28",
    contract_type: "Exclusive",
    start_date: "2023-01-01",
    end_date: "2023-12-31",
    username: "legacy",
  },
];

export default function ScenarioTable() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [vertId, setvertId] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [detailsData, setDetailsData] = useState();
  const [runs, setRuns] = useState();
  const [propsData, setPropsData] = useState({});
  const [vertData, setVertData] = useState({});

  const details = useSelector((state) => state.sideNavDetails);

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
      [item?.scenario_id]: {
        run_date: item?.run_date,
        contract_type: item?.contract_type,
      },
    });
  };

  const getTableData = async () => {
    try {
      const scenario_json = await axios.post(
        "https://rxprice.internal2.singlecare.com/backend/scenario_list",
        {
          start_date: details?.startDate || "2023-11-01",
          end_date: details?.endDate || "2023-11-30",
          pharmacy: details?.pharmacy.name || "CVS",
          pricing_client: details?.client.value || "SC",
          username: "legacy",
          contract_type: details?.contractType.value || "Exclusive",
        }
      );
      if (scenario_json) {
        setTableData(scenario_json?.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTableData();
  }, [details]);

  const handleClick = (event, index, item) => {
    setAnchorEl(event.currentTarget);
    setvertId(index);
    setVertData({
      [item?.scenario_id]: {
        run_date: item?.run_date,
        contract_type: item?.contract_type,
      },
    });
  };
  console.log(vertData, "---vertdata");

  const handleClose = () => {
    setAnchorEl(null);
    setvertId(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Box
      position={"relative"}
      top={70}
      left={0}
      maxHeight={700}
      height={"100%"}
      overflow="auto"
    >
      <ScreenTitle>Scenarios</ScreenTitle>
      <Box
        style={{
          maxHeight: "70vh",
          margin: "0 0 2rem 0",
          overflow: "auto",
          borderRadius: "1rem",
        }}
      >
        <Table
          style={{
            maxHeight: "200px",
            margin: "0 0 2rem 0",
            border: "1px solid #EAECF0",
          }}
        >
          <TableHead>
            <TableRow className="bg-[#E3E8EF]">
              {columns.map((item, index) => (
                <TableCell
                  key={index}
                  style={{
                    fontSize: "0.875rem",
                    color: "#697586",
                    fontWeight: 500,
                    lineHeight: "20px",
                    background: "#EEF2F6",
                  }}
                >
                  <p
                    style={{
                      marginLeft: `${index === 0 ? "2rem" : "0"}`,
                    }}
                  >
                    {item.headerName}
                  </p>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {cableData?.map((item, index) => (
              <TableRow key={index} className="bg-white">
                <>
                  <TableCell
                    key={index}
                    style={{
                      // fontWeight: 600,
                      color: "#364152",
                      width: "19.75rem",
                      height: "3.5rem",
                    }}
                  >
                    <TableRowText>
                      <Checkbox onChange={(e) => handleCheckbox(item, e)} />

                      {item.scenario_name}
                    </TableRowText>
                  </TableCell>
                  <TableCell key={index}>
                    <TableRowText>{item.runs}</TableRowText>
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
                    <TableRowText>{item.as_of_date}</TableRowText>
                  </TableCell>

                  <TableCell key={index}>
                    <TableRowText>{item.mac_start_date}</TableRowText>
                  </TableCell>
                  <TableCell key={index}>
                    <TableRowText
                      style={{
                        marginLeft: "3rem",
                      }}
                    >
                      {item.surplus_target}
                    </TableRowText>
                  </TableCell>
                  <TableCell
                    key={index}
                    style={{
                      paddingLeft: "5rem",
                    }}
                  >
                    <TableRowText>{item.competitive_target}</TableRowText>
                  </TableCell>

                  <TableCell key={index}>
                    <Button
                      style={{
                        fontSize: "0.875rem",
                        textTransform: "capitalize",
                        fontWeight: 500,
                        color: "#1477CF",
                      }}
                      onClick={() => {
                        setDetailsOpen(true);
                        setRuns(item?.runs);
                        setDetailsData({
                          scenario_id: item?.scenario_id,
                          pharmacy: "CVS",
                          pricing_client: "SC",
                          contract_type: item?.contract_type,
                          run_date: item?.run_date,
                          as_of_date: item?.as_of_date,
                          mac_start_date: item?.mac_start_date,
                        });
                      }}
                    >
                      Details
                    </Button>
                    <MoreVert
                      aria-describedby={id}
                      variant="contained"
                      onClick={(args) => handleClick(args, index, item)}
                      className={`hover:text-[#364152]  
                    ${vertId === index ? "text-white" : "text-[#B8BEC7]"}
                    
                    ${vertId === index ? "bg-[#B8BEC7]" : "bg-transparent"}  `}
                    />
                  </TableCell>
                </>
              </TableRow>
            ))}

            <Popover
              elevation={2}
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
                }}
              >
                <Box
                  sx={{
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
                        src={SDIcon}
                        style={{
                          width: "1rem",
                          height: "1rem",
                        }}
                      />
                    </ListItemIcon>
                    Scenario Details
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
          </TableBody>
        </Table>
      </Box>

      <Box
        style={{
          backgroundColor: "#00427D",
          bottom: 60,
          right: 20,
          position: "absolute",
          padding: "0 1rem 0 1rem",
        }}
      >
        <NavLink
          to={{ pathname: "/details/tradeoff_curve" }}
          state={{ data: propsData, type: "scenario" }}
        >
          <Button
            sx={{
              color: "white",
            }}
          >
            Compare Runs
          </Button>
        </NavLink>
      </Box>
      <ScenarioDetailsModal
        open={detailsOpen}
        setOpen={setDetailsOpen}
        detailsPostData={detailsData}
        runs={runs}
      />
    </Box>
  );
}
