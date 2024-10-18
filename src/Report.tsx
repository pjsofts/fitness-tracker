import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const options = {
  chart: {
    type: "column",
    backgroundColor: "transparent",
  },
  title: {
    text: "Fitness Weekly Tracker",
    align: "left",
  },
  xAxis: {
    categories: [
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Friday",
    ],
    crosshair: true,
    accessibility: {
      description: "Countries",
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "Minutes",
    },
  },
  tooltip: {
    valueSuffix: " (1000 MT)",
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: "Running",
      data: [20, 0, 40, 60, 0, 20],
    },
    {
      name: "Weight Training",
      data: [20, 10, 50, 30, 10, 20],
    },
  ],
};

function Report() {
  return (
    <div className="flex-1 flex flex-col justify-center gap-8">
      {" "}
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default Report;
