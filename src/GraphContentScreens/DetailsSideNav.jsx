import {
  Avatar,
  Box,
  Collapse,
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Popover,
    Typography,
    Card
} from "@mui/material";
import { useState } from "react";

import {
  AddOutlined,
  ArrowCircleDownOutlined,
  Circle,
  ExpandLess,
  ExpandMore,
  InfoOutlined,
  MonetizationOnOutlined,
  MoreVertOutlined,
  ShowChartOutlined,
  SortRounded,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ListItemIcon from "@mui/material/ListItemIcon";
import DDIcon from "../../public/ddIcon.png";
import RDIcon from "../../public/rdIcon.png";
import PlusIcon from "../../public/plusIcon.png";
import DownloadIcon from "../../public/downloadIcon.png";

const DetailsSideNav = () => {
  const [open, setOpen] = useState({ status: true, id: 0 });
  const [anchorEl, setAnchorEl] = useState(null);


    const dispatch = useDispatch()
    const details = useSelector(state => state.sideNavDetails)



  const handlePopClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopClose = () => {
    setAnchorEl(null);
  };

  const openPopover = Boolean(anchorEl);

  const popId = openPopover ? "simple-popover" : undefined;

  const handleClick = (id) => {
    setOpen({ status: !open.status, id: id });
  };
  const DropListUi = () => {
    return (
      <>
        <Grid item xs={12} className="p-4  border-r-2 ">
          <Box margin={"0 0 1rem 0"}>
            <Typography className="text-[#697586] text-base">
              As of date
            </Typography>
            <Typography margin={"0.5rem 0 0 0"}>25/05/2023</Typography>
          </Box>
          <Box margin={"0 0 1rem 0"}>
            <Typography className="text-[#697586] text-base">
              MAC start date
            </Typography>
            <Typography margin={"0.5rem 0 0 0"}>25/05/2023</Typography>
          </Box>
          <Box margin={"0 0 1rem 0"}>
            <Typography className="text-[#697586] text-base">
              Date Range
            </Typography>
            <Typography margin={"0.5rem 0 0 0"}>
              25/05/2023 - 04/05/2023
            </Typography>
          </Box>
          <Box margin={"0 0 1rem 0"}>
            <Typography className="text-[#697586] text-base">
              Target Surplus
            </Typography>
            <Typography margin={"0.5rem 0 0 0"}>$100,000</Typography>
          </Box>
          <Box margin={"0 0 1rem 0"}>
            <Typography className="text-[#697586] text-base">
              Competitiveness
            </Typography>
            <Typography margin={"0.5rem 0 0 0"}>52%</Typography>
          </Box>
        </Grid>
      </>
    );
    };

  return (
    <Box padding={"1rem"} height={"100vh"}>
      <Typography>Selected Runs</Typography>

      <Typography className="pt-4 pb-4 text-[#697586] text-base">
              Pharmacy
              {console.log(details) }

      </Typography>
      <Box display={"flex"} gap={"0.7rem"} margin={"0 0 1rem 0"}>
              <Avatar
                  src={details?.pharmacy?.url }
          alt="U"
          style={{
            width: "1.5rem",
            height: "1.5rem",
          }}
        />
              <Typography>                 {details?.pharmacy?.name}
</Typography>
      </Box>
      <Typography className="pt-2 pb-4 text-[#697586] text-base">
        Pricing Client
      </Typography>
      <Box display={"flex"} gap={"0.7rem"} margin={"0 0 1rem 0"}>
              <Avatar
                  src={details?.client?.url}

          alt="U"
          style={{
            width: "1.5rem",
            height: "1.5rem",
          }}
        />
              <Typography>                 {details?.client?.name}
</Typography>
      </Box>
      <Box margin={"0 0 1rem 0"}>
        <Typography className="text-[#697586] text-base">
          Contract Type
        </Typography>
              <Typography margin={"0.5rem 0 0 0"}>{details?.contractType?.value}</Typography>
      </Box>

      {/*  */}
      <List
        sx={{ width: "100%", maxWidth: 360 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        // subheader={
        //   <ListSubheader component="div" id="nested-list-subheader">
        //     Nested List Items
        //   </ListSubheader>
        // }
      >
        <Box>
          <ListItemButton
            sx={{
              bgcolor: "#EEF2F6",
              m: "1rem 0 0 0",
            }}
          >
            <ListItemText
              onClick={() => handleClick(1)}
              primary={
                  <>
                      <p
                          style={{
                              display:"flex"

                          } }
                      >
                    <Circle
                      sx={{
                        color: "#05E5C0",
                        margin: "0 0.2rem 0 0",

                              }}
                    />
                          101
                          <Card
                              elevation={0.1 }

                          >
                          <p
                              style={{
                                      backgroundColor: "#E3E8EF",
                                      padding:"0 0.3rem 0 0.3rem",

                                  }}
                          >
                          Unused
                          </p>
                          </Card>
                      </p>

                </>
              }
            >
              {/* <Badge color="red" badgeContent={""} /> */}
              {/* <MailIcon color="action" /> */}
            </ListItemText>
            {open.status && open.id === 1 ? <ExpandLess /> : <ExpandMore />}
            <MoreVertOutlined />
          </ListItemButton>
          <Collapse
            in={open.status && open.id === 1}
            timeout="auto"
            unmountOnExit
            className="bg-[#E3E8EF]"
          >
            <DropListUi />
          </Collapse>
          <ListItemButton
            sx={{
              bgcolor: "#E3E8EF",
              m: "1rem 0 0 0",
            }}
          >
            <ListItemText
              onClick={() => handleClick(2)}
                          primary={

                              <>
                      <p
                          style={{
                              display:"flex"

                          } }
                      >
                    <Circle
                      sx={{
                        color: "#50CAE5",
                        margin: "0 0.2rem 0 0",

                              }}
                    />
                          101
                          <Card
                              elevation={0.1 }

                          >
                          <p
                              style={{
                                      backgroundColor: "#E3E8EF",
                                      padding:"0 0.3rem 0 0.3rem",

                                  }}
                          >
                          Unused
                          </p>
                          </Card>
                      </p>

                </>
              }
            />
            {open.status && open.id === 2 ? <ExpandLess /> : <ExpandMore />}
            <MoreVertOutlined
              aria-describedby={popId}
              variant="contained"
              onClick={handlePopClick}
            />
            <Popover
              id={popId}
              open={openPopover}
              anchorEl={anchorEl}
              onClose={handlePopClose}
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
                <Divider />
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
          </ListItemButton>
          <Collapse
            in={open.status && open.id === 2}
            timeout="auto"
            unmountOnExit
            className="bg-[#E3E8EF]"
          >
            <DropListUi />
          </Collapse>
          <ListItemButton
            sx={{
              bgcolor: "#E3E8EF",
              m: "1rem 0 0 0",
            }}
          >
            <ListItemText
              onClick={() => handleClick(3)}
              primary={
                <>
                  <h5>
                    <Circle
                      sx={{
                        color: "#9B50E5",
                        margin: "0 0.2rem 0 0",
                      }}
                    />
                    103
                  </h5>
                </>
              }
            />
            {open.status && open.id === 3 ? <ExpandLess /> : <ExpandMore />}
            <MoreVertOutlined />
          </ListItemButton>
          <Collapse
            in={open.status && open.id === 3}
            timeout="auto"
            unmountOnExit
            className="bg-[#E3E8EF]"
          >
            <DropListUi />
          </Collapse>
        </Box>
      </List>
    </Box>
  );
};

export default DetailsSideNav;
