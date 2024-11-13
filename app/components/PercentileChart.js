// components/PercentileChart.js
import React from "react";
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

const PercentileChart = ({ percentile, studentsData }) => {
  const data = {
    labels: Array.from({ length: 101 }, (_, i) => i),
    datasets: [
      {
        label: "Student Distribution",
        data: studentsData,
        borderColor: "rgba(85, 85, 255, 0.5)",
        borderWidth: 2,
        pointRadius: studentsData.map((_, i) => (i === percentile ? 6 : 3)),
        pointBackgroundColor: studentsData.map((_, i) =>
          i === percentile ? "purple" : "rgba(85, 85, 255, 0.3)"
        ),
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          title: function (context) {
            return `Percentile: ${context[0].label}`;
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
            label: {
              content: "Your Percentile",
              enabled: true,
              position: "top",
              backgroundColor: "rgba(0,0,0,0.6)",
              color: "white",
              font: {
                size: 12,
              },
              yAdjust: -15, // Adjusts label position above the point
            },
          },
          text1: {
            type: "label",
            xValue: percentile,
            yValue: studentsData[percentile],
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderColor: "purple",
            borderWidth: 1,
            content: ["Your Percentile"],
            font: {
              size: 12,
              weight: "bold",
            },
            padding: 6,
            xAdjust: 10,
            yAdjust: -20,
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Percentile",
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
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
  };

  return <Line data={data} options={options} />;
};

export default PercentileChart;
