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

import { Grid, Paper, Typography } from "@mui/material";

import { Bar, Scatter } from "react-chartjs-2";
import { TimeLineGraph } from "./TimeLineGraph";

const TimeSeries = ({ timeSeriesDataArr, dailyUrr,dailyMargin, dailySurplus, cumulativeSurplus }) => {
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

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Paper
            elevation={3}
            sx={{
              // margin: "1rem 0 0 0",
              padding: "1rem",
              backgroundColor: "#FCFCFD",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid item xs={1} className="-rotate-90 ">
              <Typography
                fontSize={"1rem"}
                fontWeight={600}
                className="w-max  h-max flex items-center "
                margin={"0 0 0 -4rem"}
              >
                <hr className="w-10 bg-black h-[0.2rem]" />
                Cumulative Surplus
              </Typography>
            </Grid>

            <Grid item xs={10}>
              <Typography fontSize={"1rem"} fontWeight={600}>
                Net Script Potential Forecast: Optimized
              </Typography>

                          <TimeLineGraph timeSeriesDataArr={timeSeriesDataArr} dailySurplus={dailySurplus} different={true} cumulativeSurplus={cumulativeSurplus} />
            </Grid>
            <Grid item xs={1} className="rotate-90">
              <Typography
                fontSize={"1rem"}
                fontWeight={600}
                className="w-max  h-max flex items-center"
              >
                <hr className="w-10 border-dashed border-2 bg-black" />
                Daily Surplus
              </Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            elevation={3}
            sx={{
              padding: "1rem",
              backgroundColor: "#FCFCFD",
              textAlign: "center",
              margin: "1rem 1rem 1rem 0",
            }}
          >
            <Typography fontSize={"1rem"} fontWeight={600}>
              Margin
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
                  className="-rotate-90 translate-y-14 w-[10rem]  h-[10rem]"

                  //   className="-rotate-90 translate-y-28 w-[4rem] bg-green-400  h-[2rem] "
                >
                  Daily Average Margin
                </Typography>
              </Grid>
              <Grid item xs={11}>
                              <TimeLineGraph timeSeriesDataArr={timeSeriesDataArr} dailyData={dailyMargin}  />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            elevation={3}
            sx={{
              margin: "1rem 0 1rem 1rem",
              padding: "1rem",
              backgroundColor: "#FCFCFD",
              textAlign: "center",
            }}
          >
            <Typography fontSize={"1rem"} fontWeight={600}>
              Reversal Rate
            </Typography>

            <Grid container display={"flex"} justifyContent={"space-between"}>
              <Grid item xs={1}>
                <Typography
                  fontSize={"1rem"}
                  fontWeight={500}
                  className="-rotate-90 translate-y-14 w-[10rem]  h-[10rem]"
                >
                  Daily URR
                </Typography>
              </Grid>

              <Grid item xs={11}>
                              <TimeLineGraph dailyData={dailyUrr} timeSeriesDataArr={timeSeriesDataArr } />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default TimeSeries;
