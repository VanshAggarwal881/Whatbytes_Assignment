import React from "react";
import { Line } from "react-chartjs-2";

function ComparisonChart({ percentile, generateDistributionData }) {
  const lineChartData = {
    datasets: [
      {
        label: "Score Distribution",
        data: generateDistributionData(),
        borderColor: "#6366F1",
        backgroundColor: "rgba(99, 102, 241, 0.1)",
        tension: 0.4,
        pointRadius: 3,
        pointHoverRadius: 5,
      },
    ],
  };

  // Line chart options with vertical annotation for percentile
  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "linear",
        title: {
          display: true,
          text: "Percentile",
        },
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 25,
        },
        min: 0,
        max: 100,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: (context) => `Percentile: ${context[0].parsed.x}`,
          label: (context) =>
            `Number of students: ${Math.round(context.parsed.y / 2)}`,
        },
      },
      annotation: {
        annotations: {
          line1: {
            type: "line",
            scaleID: "x",
            value: percentile,
            borderColor: "#3730A3",
            borderWidth: 2,
            borderDash: [6, 6],
            label: {
              display: true,
              content: "Your percentile",
              position: "start",
              backgroundColor: "#4F46E5",
              color: "white",
              font: {
                size: 12,
                weight: "bold",
              },
              padding: 6,
            },
          },
          point1: {
            type: "point",
            xValue: percentile,
            yValue:
              generateDistributionData().find(
                (p) => Math.abs(p.x - percentile) < 5
              )?.y || 50,
            backgroundColor: "#4F46E5",
            radius: 6,
            borderWidth: 2,
            borderColor: "white",
          },
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
  };

  return (
    <div className="bg-white rounded-lg shadow mb-6">
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Comparison Graph
        </h3>
        <div className="mb-4">
          <p className="text-gray-700">
            You scored {percentile}% percentile which is lower than the average
            percentile 72% of all the engineers who took this assessment
          </p>
        </div>
        <div className="h-64">
          <Line data={lineChartData} options={lineChartOptions} />
        </div>
        <div className="text-center mt-4">
          <div className="inline-flex items-center text-sm text-indigo-700">
            <span className="w-4 h-0.5 bg-indigo-600 mr-2"></span>
            <span>Your percentile: {percentile}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComparisonChart;
