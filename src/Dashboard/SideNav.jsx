import {
  Box,
  Button,
  Divider,
  Grid,
  Select,
  TextField,
  Typography,
  Avatar,
  Icon,
  SvgIcon,
  IconButton,
} from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import { useState } from "react";
import { Formik } from "formik";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SelectGlobal from "../comonents/SelectGlobal";

import cvs from "../../public/cvs.png";
import riteaid from "../../public/riteaid.png";
import familywize from "../../public/familywize.png";
import walmart from "../../public/walmart.png";
import singlecare from "../../public/singlecare.png";
import walgreens from "../../public/walgreens.png";
import luscinia from "../../public/luscinia.png";
import { useDispatch, useSelector } from "react-redux";
import {
  addClient,
  addContractType,
  addPharmacy,
  addStartDate,
  addEndDate,
} from "../redux/feature/sideNavSlice";

import dayjs from "dayjs";
import { SidePanelText } from "../comonents/GlobalTypography";
import { DeleteForever } from "@mui/icons-material";

const SideNav = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [selectedClientsIndex, setSelectedClientsIndex] = useState(1);

  const dispatch = useDispatch();
  const details = useSelector((state) => state.sideNavDetails);

  const handleListItemClick = (item, index) => {
    setSelectedIndex(index);
    dispatch(addPharmacy(item));
  };
  const handleClientListItemClick = (item, index) => {
    setSelectedClientsIndex(index);
    dispatch(addClient(item));
  };

  const pharmacyNames = [
    { name: "Walgreens", url: walgreens },
    { name: "CVS", url: cvs },
    { name: "Rite Aid", url: riteaid },
    { name: "Walmart", url: walmart },
  ];
  const clients = [
    { name: "SingleCare", url: singlecare, value: "SC" },
    { name: "Familiwize", url: familywize, value: "FW" },
    { name: "Luscinia", url: luscinia, value: "LS" },
  ];

  const dashboardOptions = [
    {
      name: "Recent Activity",
      url: "/Recent_Activity.svg",
      value: "Recent Activity",
    },
    { name: "Deployed Pricing", url: "/Prices.svg", value: "Deployed Pricing" },
    {
      name: "Pharmacy Overview",
      url: "/Pharmacies.svg",
      value: "Pharmacy Overview",
    },
    { name: "Client Overview", url: "/Clients.svg", value: "Client Overview" },
  ];

  const dateStyle = {
    // width: "50%",
    outerHeight: "1rem",
    // maxHeight: "1rem",
    // padding: "0",
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        position={"relative"}
        top={70}
        left={0}
        // width={"100%"}
        maxHeight={"100vh"}
        style={{
          backgroundColor: "#FCFCFD",
          // color: "#0058A6",
          padding: "0 1rem 5rem 1rem",
          margin: "1rem 0 100rem 0",
        }}
        overflow={"hidden auto"}
      >
        <Typography
          fontSize={"1.2rem"}
          fontWeight={600}
          margin={"1.5rem 0 0 1rem"}
        >
          Filter Scenarios
        </Typography>
        {/* {dashboardOptions.map((item, index) => (
          <Box
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "transparent",
            }}
            key={index}
          >
            <List component="nav" aria-label="main mailbox folders">
              <ListItemButton
                selected={selectedIndex === index}
                style={{
                  backgroundColor: `${
                    selectedIndex === index ? "#DEF0FF" : "transparent"
                  }`,
                  display: "flex",
                  justifyContent: "flex-start",
                  borderRadius: "0.25rem",
                }}
                onClick={(event) => handleListItemClick(item, index)}
              >
                <ListItemIcon>
                  <Avatar
                    src={item.url}
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                      backgroundColor: "red",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  style={{
                    margin: "0 0 0 -1.2rem",
                  }}
                  primary={<SidePanelText>{item.name}</SidePanelText>}
                />
              </ListItemButton>
            </List>
          </Box>
        ))} */}

        <Typography
          fontSize={"1rem"}
          fontWeight={300}
          margin={"1.5rem 0 0 1rem"}
        >
          Pharmacies
        </Typography>
        <Divider
          style={{
            width: "60%",
            translate: "7rem -0.8rem",
          }}
        />
        {pharmacyNames.map((item, index) => (
          <Box
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "transparent",
            }}
            key={index}
          >
            <List component="nav" aria-label="main mailbox folders">
              <ListItemButton
                selected={selectedIndex === index}
                style={{
                  backgroundColor: `${
                    selectedIndex === index ? "#DEF0FF" : "transparent"
                  }`,
                  padding: "0.5rem",
                }}
                onClick={(event) => handleListItemClick(item, index)}
              >
                <ListItemIcon>
                  <Avatar
                    src={item.url}
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  style={{
                    margin: "0 0 0 -1.7rem",
                  }}
                  primary={<SidePanelText>{item.name}</SidePanelText>}
                />
              </ListItemButton>
            </List>
          </Box>
        ))}
        <Typography
          fontSize={"1rem"}
          fontWeight={300}
          margin={"1.5rem 0 0 1rem"}
        >
          Clients
        </Typography>
        <Divider
          style={{
            width: "70%",
            translate: "5rem -0.8rem",
          }}
        />
        {clients.map((item, index) => (
          <Box key={index}>
            <List component="nav" aria-label="main mailbox folders">
              <ListItemButton
                selected={selectedIndex === index}
                style={{
                  backgroundColor: `${
                    selectedIndex === index ? "#DEF0FF" : "transparent"
                  }`,
                  display: "flex",
                  justifyContent: "flex-start",
                  padding: "0.5rem",
                }}
                onClick={(event) => handleListItemClick(item, index)}
              >
                <ListItemIcon>
                  <Avatar
                    src={item.url}
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  style={{
                    margin: "0 0 0 -1.7rem",
                  }}
                  primary={<SidePanelText>{item.name}</SidePanelText>}
                />
              </ListItemButton>
            </List>
          </Box>
        ))}

        <Formik
          initialValues={{ email: "", password: "" }}
          // validate={(values) => {
          //   const errors = {};
          //   if (!values.email) {
          //     errors.email = "Required";
          //   } else if (
          //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          //   ) {
          //     errors.email = "Invalid email address";
          //   }
          //   return errors;
          // }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  m: "0 0 1rem 0",
                }}
              >
                <Typography
                  fontSize={"1rem"}
                  fontWeight={300}
                  margin={"1.5rem 0 0 1rem"}
                >
                  Contract Type
                </Typography>
                <Divider
                  style={{
                    width: "60%",
                    translate: "8rem -0.8rem",
                  }}
                />
                <Grid item xs={12}>
                  <SelectGlobal
                    placeholder="All"
                    fullWidth
                    size="small"
                    options={
                      ((selectedIndex === 0 || selectedIndex === 2) && [
                        { value: "Limited", label: "Limited" },
                      ]) ||
                      (selectedIndex === 1 && [
                        { value: "Limited", label: "Limited" },
                        { value: "Exclusive", label: "Exclusive" },
                      ]) ||
                      (selectedIndex === 3 && [
                        { value: "Nadac", label: "Nadac" },
                      ])
                    }
                    // value={values.email}
                    onChange={(e) => dispatch(addContractType(e))}
                    // onBlur={handleBlur}
                  />
                  {errors.email && touched.email && errors.email}
                </Grid>
              </Box>
              <Box>
                <Typography
                  fontSize={"1rem"}
                  fontWeight={300}
                  margin={"1.5rem 0 0 1rem"}
                >
                  Date Range
                </Typography>
                <Divider
                  style={{
                    width: "60%",
                    translate: "7rem -0.8rem",
                  }}
                />
                <Grid item xs={6}>
                  <SelectGlobal
                    placeholder="Quarter"
                    fullWidth
                    size="small"
                    // value={values.email}
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                  />
                  {errors.email && touched.email && errors.email}
                </Grid>
                <Grid item xs={12} margin={"1rem 0 0 0"}>
                  <DatePicker
                    // format=""
                    slots={{
                      openPickerIcon: () => (
                        <img
                          srcSet="/calendar.svg"
                          style={{
                            margin: "0 0.5rem 0 0",
                          }}
                        />
                      ),
                    }}
                    slotProps={{
                      textField: {
                        size: "small",
                        sx: {
                          fontSize: "0.875rem",
                        },

                        fullWidth: true,
                        style: {
                          fontSize: "0.875rem",
                        },
                        placeholder: "",
                      },
                    }}
                  />
                  {errors.email && touched.email && errors.email}
                </Grid>
              </Box>
              <Box
                sx={{
                  margin: "1rem 0 1rem 0",
                }}
              >
                <Typography align="center">or enter manually</Typography>
                <Grid container>
                  <Grid item xs={5} margin={"1rem 0 0 0"}>
                    <Box
                      sx={{
                        height: "1rem",
                      }}
                    >
                      <DatePicker
                        slots={{
                          openPickerIcon: () => (
                            <img
                              srcSet="/calendar.svg"
                              style={{
                                margin: "0 0.5rem 0 0",
                              }}
                            />
                          ),
                        }}
                        sx={
                          {
                            // borderRadius: 80,
                          }
                        }
                        slotProps={{
                          textField: {
                            color: "success",
                            size: "small",

                            sx: {
                              width: "96px",
                              fontSize: "0.875rem",
                            },

                            fullWidth: true,
                            style: {
                              fontSize: "0.875rem",
                              borderRadius: "8px",
                            },
                            borderRadius: "8px",
                            placeholder: "start",
                          },
                        }}
                        onChange={(e) =>
                          dispatch(addStartDate(dayjs(e).format("YYYY-MM-DD")))
                        }
                      />
                    </Box>
                    {errors.email && touched.email && errors.email}
                  </Grid>
                  <Grid item xs={1} margin={"1.5rem 0 0 0.8rem"}>
                    <Typography>to</Typography>
                  </Grid>
                  <Grid item xs={5} margin={"1rem 0 0 0"}>
                    <DatePicker
                      slots={{
                        openPickerIcon: () => (
                          <img
                            srcSet="/calendar.svg"
                            style={{
                              margin: "0 0.5rem 0 0",
                            }}
                          />
                        ),
                      }}
                      slotProps={{
                        textField: {
                          color: "success",
                          size: "small",
                          sx: {
                            width: "96px",
                            fontSize: "0.875rem",
                            border: "8px",
                          },

                          fullWidth: true,
                          style: {
                            fontSize: "0.875rem",
                          },
                          placeholder: "end",
                        },
                      }}
                      onChange={(e) =>
                        dispatch(addEndDate(dayjs(e).format("YYYY-MM-DD")))
                      }
                    />
                    {errors.email && touched.email && errors.email}
                  </Grid>
                </Grid>
              </Box>
              <Box
                sx={{
                  margin: "1rem 0 1rem 0",
                }}
              >
                <Typography
                  fontSize={"1rem"}
                  fontWeight={300}
                  margin={"1.5rem 0 0 1rem"}
                >
                  Surplus Target
                </Typography>
                <Divider
                  style={{
                    width: "60%",
                    translate: "8rem -0.8rem",
                  }}
                />
                <Grid container>
                  <Grid item xs={5} margin={"1rem 0 0 0"}>
                    <TextField size="small" placeholder="min $" />
                    {errors.email && touched.email && errors.email}
                  </Grid>
                  <Grid item xs={1} margin={"1.5rem 0 0 0.5rem"}>
                    <Typography>to</Typography>
                  </Grid>
                  <Grid item xs={5} margin={"1rem 0 0 0"}>
                    <TextField size="small" placeholder="max $" />
                    {errors.email && touched.email && errors.email}
                  </Grid>
                </Grid>
              </Box>
              {/* <Box
                sx={{
                  margin: "1rem 0 1rem 0",
                }}
              >
                <Typography>Status</Typography>
                <Divider
                  style={{
                    width: "60%",
                    translate: "6rem -0.8rem",
                  }}
                />
                <Grid item xs={12} margin={"1rem 0 0 0"}>
                  <Select fullWidth />
                  {errors.email && touched.email && errors.email}
                </Grid>
              </Box> */}
              <Button
                style={{
                  backgroundColor: "#DEF0FF",
                  margin: "1rem 0 2rem 0",
                  textTransform: "capitalize",
                  color: "#84C5FF",
                  width: "100%",
                }}
                disableElevation
                variant="contained"
              >
                Apply Filters
              </Button>
            </form>
          )}
        </Formik>
      </Box>
    </LocalizationProvider>
  );
};

export default SideNav;
