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
import DetailsSideNav from "../DetailsSideNav";
import { createElement, useState, useEffect } from "react";
import SummaryTable from "./Summary/SummaryTable";
import TimeSeries from "./TimeSeries";
import PriceTearDown from "./TearDown";
import axios from "axios";
import { useLocation } from "react-router-dom";
import _ from "lodash";

const RunDetails = () => {
  /**/
  const [summaryData, setSummaryData] = useState([]);
  const [timeSeriesData, setTimeSeriesData] = useState([]);
  const propsData = useLocation();

  // console.log(propsData?.state?.data, 'propsData')

  const getSummaryData = async () => {
    const summaryPostData = {
      run_id_date_dict: propsData?.state?.data,
      pharmacy: "CVS",
      pricing_client: "SC",
    };

    const timeSeriesPost = {
      run_id_date_dict: propsData?.state?.data,

      pharmacy: "CVS",
      pricing_client: "SC",
    };

    const tearDownPostData = {
      run_id_date_dict: propsData?.state?.data,
      pharmacy: "CVS",
      pricing_client: "SC",
    };

    try {
      const summary_json = await axios.post(
        "https://rxprice.internal2.singlecare.com/backend/price_breakdown",
        tearDownPostData
      );

      const timeSeries_json = await axios.post(
        "https://rxprice.internal2.singlecare.com/backend/time_series",
        timeSeriesPost
      );

      if (summary_json) {
        setSummaryData(summary_json?.data);
      }

      if (timeSeries_json) {
        setTimeSeriesData(timeSeries_json?.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  /*console.log(timeSeriesData, "timeSeriesData")
   */
  const cmpenseble_label = summaryData?.map((item) => item?.price_change_class);

  const cmpenseble_label_sets = [...new Set(cmpenseble_label)];

  useEffect(() => {
    getSummaryData();
  }, []);

  /**/

  const quadrants = {
    id: "quadrants",
    beforeDatasetDraw(chart, args, options) {
      const {
        ctx,
        chartArea: { left, top, right, bottom, width, height },
        scales: { x, y },
      } = chart;

      const midX = x.getPixelForValue(0);
      const midY = y.getPixelForValue(0);

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(midX, 0);
      ctx.lineTo(midX, height + top);
      ctx.strokeStyle = "#9AA4B2";

      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.restore();
    },
  };

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

  const config = {
    plugins: [quadrants],
  };

  const options = {
    responsive: true,
    scales: {
      xAxes: [
        {
          display: false,
          barPercentage: 5,
          ticks: {
            max: 5,
            stepSize: 15,
          },
        },
        {
          display: true,
          ticks: {
            autoSkip: false,
            max: 4,
            stepSize: 15,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
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

  const labels = ["0-5", "February", "March", "April", "May", "June", "July"];

  const localArrTeardown = summaryData?.map((item) => {
    return {
      x: item?.new_urr,
      y: item?.new_price,
    };
  });
  const localArr = summaryData?.map((item) => {
    return {
      x: item?.price_diff,
      y: item?.netscript_potential_360D,
    };
  });

  const timeSeriesDataArr = timeSeriesData?.map((item) => item?.date);

  const dailySurplusArr = timeSeriesData?.map((item) => item?.daily_surplus);

  const cumulativeSurplusArr = timeSeriesData?.map(
    (item) => item?.cumulative_surplus
  );

  const dailyMarginArr = timeSeriesData?.map((item) => item?.margin);

  const dailyUrrArr = timeSeriesData?.map((item) => item?.urr);

  const CompensableDataArray = summaryData?.map((item) => {
    return {
      x: item?.price_change_class,
      y: item?.compensable_gross_script_forecast,
    };
  });

  const dataNetScriptForcastArray = summaryData?.map(
    (item) => item?.netscript_forecast
  );
  const dataScriptPotentialForcast = summaryData?.map((item) => {
    return {
      x: item?.price_diff,
      y: item?.netscript_forecast,
    };
  });

  /*
   */
  const data = {
    labels: cmpenseble_label_sets,

    datasets: [
      {
        label: "101",
        data: CompensableDataArray,
        borderWidth: 1,
        backgroundColor: "#9B50E5",
        barPercentage: 1,
        categoryPercentage: 1,
      },
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

  const dolo = _.remove(summaryData, function (n) {
    return n.id === 101;
  });

  const uniqById = _.groupBy(
    dolo,
    (dolo,
    function (o) {
      return o.lastName;
    })
  );

  const arr = Object.entries(uniqById).map(([key, value]) => ({ key, value }));
  let mapped_array = _.map(arr, function square(n) {
    return {
      name: n.key,
      age: _.sum(
        _.map(n.value, function square(e) {
          return e.age;
        })
      ),
    };
  });

  console.log(mapped_array);

  const potential_forecast_label = summaryData?.map((item) => item?.price_diff);
  const potential_forecast_label_sets = [...new Set(potential_forecast_label)];

  // console.log(potential_forecast_label, "potential_forecast_label");

  const dataPotentialArray = {
    labels: potential_forecast_label_sets,

    datasets: [
      {
        data: dataScriptPotentialForcast,
        barPercentage: 25,
        categoryPercentage: 5,
        label: "101",
        backgroundColor: "#9B50E5",
        /*
            summaryData?.map(item =>
                    item?.netscript_forecast
                    ),
*/
      },
    ],
    options: {
      scales: {
        xAxes: [
          {
            display: false,
            barPercentage: 13,
            ticks: {
              max: 3,
            },
          },
          {
            display: true,
            ticks: {
              autoSkip: false,
              max: 4,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  };

  /*

    console.log(localArrAxis, "localArrAxislocalArrAxislocalArrAxis");

*/
  const dataScatter = {
    labels: ["Scatter"],
    datasets: [
      {
        label: "101s",
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
        data: localArr,
      },
    ],
  };

  const dataScatterTeardown = {
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
        data: localArrTeardown,
      },
      /* {
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
             },*/
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
      <Box
        position={"relative"}
        top={85}
        left={0}
        style={{
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
                margin={"1rem 1rem 1rem 1rem"}
              >
                Run Details
              </Typography>
            </Grid>

            <Grid item xs={12} className="p-3">
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab
                      label="Summary"
                      {...a11yProps(0)}
                      style={{
                        textTransform: "capitalize",
                      }}
                    />
                    <Tab
                      label="Time Series"
                      {...a11yProps(1)}
                      style={{
                        textTransform: "capitalize",
                      }}
                    />
                    <Tab
                      label="Price TearDown"
                      {...a11yProps(2)}
                      style={{
                        textTransform: "capitalize",
                      }}
                    />
                  </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                  <Grid container>
                    <Grid item xs={12}>
                      <SummaryTable />
                    </Grid>

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

                        <Grid
                          container
                          display={"flex"}
                          justifyContent={"space-between"}
                        >
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
                            <Bar options={options} data={data} />
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

                        <Grid
                          container
                          display={"flex"}
                          justifyContent={"space-between"}
                        >
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
                    <Grid item xs={12}>
                      <Paper
                        elevation={3}
                        sx={{
                          // margin: "1rem 0 0 0",
                          padding: "1rem",
                          backgroundColor: "#FCFCFD",
                          textAlign: "center",
                        }}
                      >
                        <Typography fontSize={"1rem"} fontWeight={600}>
                          Script price difference
                        </Typography>
                        <Scatter
                          style={{
                            height: "20rem",
                            //   width: "100%",
                          }}
                          id="myChart"
                          options={options}
                          data={dataScatter}
                          // {...config}
                        />
                      </Paper>
                    </Grid>
                  </Grid>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <TimeSeries
                    dailyUrr={dailyUrrArr}
                    dailyMargin={dailyMarginArr}
                    timeSeriesDataArr={timeSeriesDataArr}
                    dailySurplus={dailySurplusArr}
                    cumulativeSurplus={cumulativeSurplusArr}
                  />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                  <PriceTearDown
                    totalScripts={dataNetScriptForcastArray}
                    dataScatterTeardown={dataScatterTeardown}
                    dataPotentialArray={dataPotentialArray}
                    dataCompensable={data}
                  />
                </CustomTabPanel>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default RunDetails;
// real
