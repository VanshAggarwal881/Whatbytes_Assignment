import React from "react";
import { Doughnut } from "react-chartjs-2";

function QuestionAnalysis({ score, totalQuestions }) {
  const doughnutData = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        data: [score, totalQuestions - score],
        backgroundColor: ["#4F46E5", "#e2e8f0"],
        hoverBackgroundColor: ["#4338CA", "#cbd5e1"],
        borderWidth: 0,
        cutout: "75%",
      },
    ],
  };

  // Doughnut chart options
  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.formattedValue || "";
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <div className="flex justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">
            Question Analysis
          </h3>
          <span className="text-lg font-medium text-indigo-600">
            {score}/{totalQuestions}
          </span>
        </div>
        <p className="text-gray-700 mb-6">
          You scored {score} question correct out of {totalQuestions}. However
          it still needs some improvements
        </p>
        <div className="flex justify-center">
          <div className="h-40 w-40 relative">
            <Doughnut data={doughnutData} options={doughnutOptions} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">
                  {score}
                </div>
                <div className="text-sm text-gray-500">correct</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionAnalysis;
