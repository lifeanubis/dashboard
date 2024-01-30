import { Close } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Dialog,
  DialogContent,
  Divider,
  Grid,
  Tab,
  Tabs,
  Typography,
  DialogActions,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import ScenarioDetailsTable from "./ScenarioDetailsTable";
import ParametersData from "./ParametersData";
import axios from "axios";
import cvs from "../../../public/cvs.png";
import singlecare from "../../../public/singlecare.png";
import { NavLink } from "react-router-dom";
import {
  DetailsContent,
  DetailsFooter,
  DetailsHeader,
  DetailsPopupHeading,
  DetailsSideTitle,
} from "../../comonents/GlobalTypography";

export default function ScenarioDetailsModal({
  open,
  setOpen,
  detailsPostData,
  runs,
}) {
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const [value, setValue] = useState(0);
  const [detailsData, setDetailsData] = useState([]);
  const [runIdData, setRunIdData] = useState();

  const getDetailsData = async () => {
    try {
      const details_json = await axios.post(
        "https://rxprice.internal2.singlecare.com/backend/scenario_details",
        detailsPostData
      );
      if (details_json) {
        setDetailsData(details_json);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDetailsData();
  }, [open]);

  console.log(runIdData, "runIdDatarunIdDatarunIdDatarunIdData");

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        style={{
          maxHeight: "30rem",
          overflow: "auto",
        }}
      >
        {value === index && (
          <Box sx={{ padding: "1.5rem 1.5rem 0 1rem" }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  //   CustomTabPanel.propTypes = {
  //     children: PropTypes.node,
  //     index: PropTypes.number.isRequired,
  //     value: PropTypes.number.isRequired,
  //   };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-dialog-title"
        aria-describedby="dialog-dialog-description"
        fullWidth
        maxWidth="md"
        PaperProps={{
          style: {
            borderRadius: "10px",
          },
        }}
      >
        <DialogContent
          style={{
            height: "1050px",
            // width: "968px",
          }}
        >
          <Grid container justifyContent={"space-between"} padding={"1rem"}>
            <Grid item xs={11}>
              <DetailsHeader>Scenario Details</DetailsHeader>
            </Grid>
            <Grid item xs={1}>
              <div
                className="font-black cursor-pointer "
                onClick={() => setOpen(false)}
              >
                <Close />
              </div>
            </Grid>
          </Grid>
          <Divider />

          <Grid container>
            <Grid item xs={3} className="p-4  border-r-2 ">
              <DetailsSideTitle>Details</DetailsSideTitle>
              <DetailsPopupHeading>Pharmacy</DetailsPopupHeading>
              <Box display={"flex"} gap={"0.7rem"} margin={"0 0 1rem 0"}>
                <Avatar
                  alt="U"
                  src={cvs}
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                  }}
                />
                <DetailsContent>{detailsPostData?.pharmacy}</DetailsContent>
              </Box>
              <DetailsPopupHeading>Pricing Client</DetailsPopupHeading>

              <Box display={"flex"} gap={"0.7rem"} margin={"0 0 1rem 0"}>
                <Avatar
                  src={singlecare}
                  alt="U"
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                  }}
                />
                <DetailsContent>
                  {detailsPostData?.pricing_client}
                </DetailsContent>
              </Box>
              <Box margin={"0 0 1rem 0"}>
                <DetailsPopupHeading>Contract Type</DetailsPopupHeading>
                <DetailsContent>
                  {detailsPostData?.contract_type}
                </DetailsContent>
              </Box>
              <Box margin={"0 0 1rem 0"}>
                <DetailsPopupHeading> As of date</DetailsPopupHeading>
                <DetailsContent>{detailsPostData?.as_of_date}</DetailsContent>
              </Box>
              <Box margin={"0 0 1rem 0"}>
                <DetailsPopupHeading> MAC start date</DetailsPopupHeading>
                <DetailsContent>
                  {detailsPostData?.mac_start_date}
                </DetailsContent>
              </Box>
              <Box margin={"0 0 1rem 0"}>
                <DetailsPopupHeading> Date Range</DetailsPopupHeading>
                <DetailsContent>25/05/2023 - 04/05/2023</DetailsContent>
              </Box>
              <Box margin={"0 0 1rem 0"} position={"absolute"} bottom={0}>
                <DetailsFooter>Created : 05/05/2025</DetailsFooter>
                <DetailsFooter>By : admin@admin.com</DetailsFooter>
              </Box>
            </Grid>
            <Grid item xs={9} className="p-3">
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab
                      label="Runs"
                      {...a11yProps(0)}
                      style={{
                        textTransform: "capitalize",
                        fontSize: "1rem",
                        fontWeight: 500,
                        lineHeight: "1.5rem",
                        color: "#0058A6",
                      }}
                    />
                    <Tab
                      label="Parameters"
                      {...a11yProps(1)}
                      style={{
                        textTransform: "capitalize",
                        fontSize: "1rem",
                        fontWeight: 500,
                        lineHeight: "1.5rem",
                        color: "#0058A6",
                      }}
                    />
                  </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                  <ScenarioDetailsTable
                    data={detailsData?.data}
                    runs={runs}
                    runIdData={runIdData}
                    setRunIdData={setRunIdData}
                  />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <ParametersData runs={runs} data={detailsData?.data} />
                </CustomTabPanel>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          {/* {runs === 1 && (
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
          )}*/}
        </DialogActions>
      </Dialog>
    </div>
  );
}
