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
import { Scatter } from "react-chartjs-2";

import { Box, Grid, Paper, Typography } from "@mui/material";

const TradeoffGraph = ({graphData ,run_ids}) => {
    // start
    const localArr = graphData?.map(item => {
        return ({
            x: item?.competitiveness,
            y: item?.pct_diff
        })

            


    })



  const quadrants = {
    id: "quadrants",
    beforeDatasetDraw(chart, args, options) {
      const {
        ctx,
        chartArea: { left, top, right, bottom, width, height },
        scales: { x, y },
      } = chart;
      const midX = x.getPixelForValue(30);
      const midY = y.getPixelForValue(30);

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(midX, 10);
      ctx.lineTo(midX, height + top);

      //   ctx.lineTo(midX, height + top);
      ctx.font = "0.8rem Arial";
      ctx.fillText("current 45%", midX + 10, bottom - 10);

      ctx.strokeStyle = "#9AA4B2";

      ctx.lineWidth = 2;
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
    // title:{

    // }
  }; 

  const options = {
    responsive: true,
      plugins: {
      title: {
        display: true,
        text: "Weighted Competitiveness",
        position: "bottom",
      },
      legend: {
        position: "bottom",
      },
      //   title: {
      //   },

          tooltip: {
          enabled: true,
          callbacks: {
              label: (context) => {
                  return (
                      `Wighted Competitiveness:${context.raw.x}% Net Script 360D Pct Diff: ${context.raw.x}% `
                  )
              },

          },
        backgroundColor: "#0D121CCC",

          },
    },
  };

    console.log( Object.keys( run_ids),"propsData?.state?.type")

  const dataScatter = {
    labels: ["Scatter"],
    datasets: [
      {
            label: Object.keys(run_ids)?.[0],
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
            data: localArr
      },
    /*  {
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

  return (
    <div>
      <Box
      // position={"relative"}
      // top={70}
      // left={0}
      // style={{
      //   padding: "1rem",
      //   margin: "0 0 10rem 0",
      //   maxHeight: "100vh",
      //   overflow: "auto",
      // }}
      // overflow="auto"
      >
        <Paper
          elevation={3}
          sx={{
            // height: "10rem",
            // width: "100%",
            padding: "2rem",
            backgroundColor: "#FCFCFD",
            textAlign: "center",
          }}
        >
          <Grid
            container
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid
              item
              xs={1}
              //    margin={"0 1rem 0 0"}
              //   alignItems={"flex-end"}
              //   bgcolor={"green"}
            >
              <Typography
                fontSize={"1rem"}
                fontWeight={600}
                className="-rotate-90 w-max h-32 "
              >
                Net Script 360D Pct Diff
              </Typography>
            </Grid>
            <Grid item xs={11}>
              <Scatter
                // height={"100%"}
                // width={"100%"}
                // style={{
                //   height: "100%",
                //   width: "100%",
                // }}
                id="myChart"
                options={options}
                data={dataScatter}
                {...config}
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
};

export default TradeoffGraph;
