import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  annotationPlugin
);

const PercentileChart = ({ percentile }) => {
  const keyPercentiles = [10, 20, 40, 50, 55, 60, 70, 80, 85, 100];
  
  const studentsData = [
    2, 2, 3, 3, 4, 4, 5, 5, 5, 5,
    6, 7, 8, 10, 12, 13, 14, 14, 15, 15,
    16, 18, 20, 22, 25, 27, 28, 29, 30, 30,
    32, 35, 38, 42, 45, 47, 48, 49, 50, 55,
    65, 75, 85, 95, 105, 115, 120, 118, 115, 110,
    108, 105, 102, 100, 95, 90, 80, 70, 60, 45,
    43, 40, 38, 35, 33, 31, 30, 30, 30, 30,
    28, 25, 22, 18, 15, 12, 10, 10, 10, 10,
    12, 15, 17, 19, 20, 20, 19, 17, 15, 12,
    10, 8, 6, 5, 4, 3, 3, 2, 2, 2,
  ];

  const data = {
    labels: Array.from({ length: 101 }, (_, i) => i),
    datasets: [
      {
        label: "Student Distribution",
        data: studentsData,
        borderColor: "#6a6b6b",
        borderWidth: 1,
        tension: 1,
        cubicInterpolationMode: "monotone",
        fill: false,
        spanGaps: true,
        pointRadius: (context) => {
          const index = context.dataIndex;
          if (index === percentile) return 6;
          if (keyPercentiles.includes(index)) return 4;
          return 0;
        },
        pointHoverRadius: 6,
        pointBackgroundColor: (context) => {
          const index = context.dataIndex;
          if (index === percentile) return "purple";
          if (keyPercentiles.includes(index)) return "rgba(85, 85, 255, 0.8)";
          return "rgba(85, 85, 255, 0.3)";
        },
        pointBorderColor: (context) => {
          const index = context.dataIndex;
          if (index === percentile) return "purple";
          if (keyPercentiles.includes(index)) return "rgba(85, 85, 255, 0.8)";
          return "rgba(85, 85, 255, 0.3)";
        },
        pointHoverBackgroundColor: "rgba(85, 85, 255, 0.8)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: true,
        displayColors: false,
        callbacks: {
          title: function (context) {
            return `Percentile: ${context[0].label}%`;
          },
          label: function (context) {
            const index = context.dataIndex;
            return `Number of Students: ${studentsData[index]}`;
          },
        },
      },
      annotation: {
        annotations: {
          line1: {
            type: "line",
            xMin: percentile,
            xMax: percentile,
            borderColor: "gray",
            borderWidth: 1,
          },
          text1: {
            type: "label",
            xValue: percentile,
            yValue: studentsData[percentile],
            content: ["Your Percentile"],
            font: {
              size: 14,
            },
            padding: 6,
            xAdjust: 0,
            yAdjust: -50,
          },
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Percentile",
        },
        ticks: {
          callback: function (value) {
            if ([0, 25, 50, 75, 100].includes(value)) {
              return value;
            }
            return "";
          },
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0,
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Students",
        },
        beginAtZero: true,
        ticks: {
          maxTicksLimit: 8,
        },
      },
    },
    elements: {
      point: {
        hitRadius: 10,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default PercentileChart;
