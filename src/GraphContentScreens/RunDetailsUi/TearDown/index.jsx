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
import { Bar, Scatter } from "react-chartjs-2";

import {
  Box,
  Button,
  Card,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { faker } from "@faker-js/faker";
import { createElement, useState } from "react";

const PriceTearDown = ({ totalScripts, dataScatterTeardown, dataPotentialArray, dataCompensable }) => {
  // start

  // end

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement
  );

  const optionsSingle = {
    responsive: true,
    
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        // text: "Chart.js Bar Chart",
        enabled: true,
        backgroundColor: "#0D121CCC",
      },
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  };
  const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: "top",
        },
        label: {
            display: false
        },
      tooltip: {
        // text: "Chart.js Bar Chart",
        enabled: true,
        backgroundColor: "#0D121CCC",
      },
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,

    datasets: [
      {
        label: "101",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: "#9B50E5",
      },
      //   {
      //     label: "100",
      //     data: [12, 5, 2, 3],
      //     borderWidth: 1,
      //     backgroundColor: "#05E5C0",
      //   },
    ],

    // options: {
    //   backgroundColor: "rgba(53, 162, 235, 0.5)",
    //   //   scales: {
    //   //     y: {
    //   //       beginAtZero: true,
    //   //     },
    //   //   },
    // },
  };
  const dataSingle = {
      labels: [0],

      datasets: [
          {
              showLabel:false,
              data: [totalScripts?.map(item => item)],
              backgroundColor: "#5069E5",
              barPercentage: 100,
              categoryPercentage:100,

      },
    ],
    };

    totalScripts?.slice(0, 5)?.map(item => console.log(item));

  const dataScatter = {
    labels: ["Scatter"],
    datasets: [
      {
        label: "My First dataset",
        fill: false,
        backgroundColor: "red",
        pointBackgroundColor: "#05E5C0",
        pointBorderWidth: 0,
        pointHoverRadius: 9,
        pointHoverBackgroundColor: "rgba(233, 120, 100, 1)",
        pointHoverBorderColor: "rgba(233, 120, 100, 1)",
        pointHoverBorderWidth: 0,
        pointRadius: 7,
        pointHitRadius: 10,
        data: [
          { x: -65, y: 75, label: "label 1" },
          { x: 59, y: 49, label: "label 2" },
          { x: 80, y: -90, label: "label 3" },
          { x: -81, y: 29, label: "label 4" },
          { x: 56, y: 36, label: "label 5" },
          { x: -55, y: 25, label: "label 6" },
          { x: 40, y: 100, label: "label 7" },
        ],
      },
      {
        label: "My First dataset",
        fill: false,
        backgroundColor: "red",
        pointBackgroundColor: "#9B50E5",
        pointBorderWidth: 0,
        pointHoverRadius: 9,
        pointHoverBackgroundColor: "rgba(233, 120, 100, 1)",
        pointHoverBorderColor: "rgba(233, 120, 100, 1)",
        pointHoverBorderWidth: 0,
        pointRadius: 7,
        pointHitRadius: 10,
        data: [
          { y: -65, x: 75, label: "label 1" },
          { y: 59, x: 49, label: "label 2" },
          { y: 80, x: -90, label: "label 3" },
          { y: -81, x: 29, label: "label 4" },
          { y: 56, x: 36, label: "label 5" },
          { y: -55, x: 25, label: "label 6" },
          { y: 40, x: 100, label: "label 7" },
        ],
      },
    ],
  };
  const [value, setValue] = useState(0);

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
          overflow: "auto",
          padding: "0 0 2rem 0",
        }}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

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
      <Grid container>
        <Grid item xs={7}>
          <Paper
            elevation={3}
            sx={{
              padding: "1rem",
              backgroundColor: "#FCFCFD",
              textAlign: "center",
              margin: "0 1rem 1rem 0",
            }}
          >
                      <Scatter
                          id="myChart"
                          options={options}
                          data={dataScatterTeardown}
                      // {...config}
                      />
          </Paper>
              </Grid>

              
              <Grid item xs={2}>
                  <Bar options={optionsSingle} data={dataSingle} />
                      
              </Grid>

                  

                          <Grid item xs={2}>
                  <Bar options={optionsSingle} data={dataSingle} />

              </Grid>



      </Grid>
      <Grid container>
        {/* <Grid item xs={12}>
          <SummaryTable />
        </Grid> */}

        <Grid item xs={6}>
          <Paper
            elevation={3}
            sx={{
              padding: "1rem",
              backgroundColor: "#FCFCFD",
              textAlign: "center",
              margin: "0 1rem 1rem 0",
            }}
          >
            <Typography fontSize={"1rem"} fontWeight={600}>
              Total Compensable Gross Script Forecast
            </Typography>

            <Grid container display={"flex"} justifyContent={"space-between"}>
              <Grid
                item
                xs={1}
                // position={"absolute"}
              >
                <Typography
                  fontSize={"1rem"}
                  fontWeight={500}
                  className="-rotate-90 translate-y-28 w-[4rem]  h-[2rem] "
                >
                  GPIs
                </Typography>
              </Grid>
              <Grid item xs={11}>
                              <Bar options={options} data={dataCompensable} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            elevation={3}
            sx={{
              margin: "0 0 1rem 1rem",
              padding: "1rem",
              backgroundColor: "#FCFCFD",
              textAlign: "center",
            }}
          >
            <Typography fontSize={"1rem"} fontWeight={600}>
              Net Script Potential Forecast: Optimized
            </Typography>

            <Grid container display={"flex"} justifyContent={"space-between"}>
              <Grid item xs={1}>
                <Typography
                  fontSize={"1rem"}
                  fontWeight={500}
                  className="-rotate-90 translate-y-14 w-[10rem]  h-[10rem]"
                >
                  Net Script forecast
                </Typography>
              </Grid>
                          <Grid item xs={11}>
                              <Bar options={options} data={dataPotentialArray} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default PriceTearDown;
// real
