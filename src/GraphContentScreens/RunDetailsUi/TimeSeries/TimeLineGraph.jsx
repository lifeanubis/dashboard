import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function TimeLineGraph({
  timeSeriesDataArr,
  dailyData,
  different,
  dailySurplus,
  cumulativeSurplus,
}) {
  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      legend: {
        position: "bottom",
      },

      title: {
        display: true,
        // text: "Chart.js Line Chart - Multi Axis",
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const optionsSingleVert = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      legend: {
        position: "bottom",
      },

      title: {
        display: true,
        // text: "Chart.js Line Chart - Multi Axis",
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
    },
  };

  const labels = timeSeriesDataArr;

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: dailyData,
        borderColor: "#47CD89",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
      /*{
                label: "Dataset 2",
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
                yAxisID: "y1",
            },*/
    ],
  };
  console.log(cumulativeSurplus, "cumulativeSurplus");

  const dataLarge = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: cumulativeSurplus,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
      {
        label: "Dataset 2",
        data: dailySurplus,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y1",
        borderDash: [5, 5],
      },

      /* {
                label: "Dataset 2",
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
                yAxisID: "y1",
            },

            

           */
    ],
  };

  return (
    <Line
      id="myChart"
      options={different ? options : optionsSingleVert}
      data={different ? dataLarge : data}
    />
  );
}
