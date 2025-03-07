import "./App.css";
import { useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";

import ComparisonChart from "./components/assessment/ComparisonChart";
import StatSection from "./components/assessment/StatSection";
import TestHeader from "./components/assessment/TestHeader";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import SyllabusAnalysis from "./components/assessment/SyllabusAnalysis";
import QuestionAnalysis from "./components/assessment/QuestionAnalysis";

// Register ChartJS components including annotation plugin
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  annotationPlugin
);

function App() {
  // Default/initial state of assessment data
  const [assessmentData, setAssessmentData] = useState({
    rank: 1,
    percentile: 30,
    score: 10,
    totalQuestions: 15,
    skillBreakdown: [
      { skill: "HTML Tools, Forms, History", percentage: 80 },
      { skill: "Tags & References in HTML", percentage: 60 },
      { skill: "Tables & References in HTML", percentage: 24 },
      { skill: "Tables & CSS Basics", percentage: 96 },
    ],
  });

  // Distribution data for line chart
  // Uses a normal distribution curve based on percentile
  const generateDistributionData = () => {
    // Generate a bell curve-like distribution
    const points = [];
    const percentilePoint = assessmentData.percentile;

    for (let i = 0; i <= 100; i += 5) {
      let value;

      // Create a rough normal distribution with a peak around 50
      // and modify it to highlight the user's percentile
      if (i < 50) {
        value = 10 + i * 1.8;
      } else {
        value = 100 - (i - 50) * 1.8;
      }

      // Highlight user's percentile position
      if (Math.abs(i - percentilePoint) < 5) {
        value += 10;
      }

      points.push({ x: i, y: value });
    }

    return points;
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Sidebar />
      <TestHeader />
      <StatSection />
      <ComparisonChart
        percentile={assessmentData.percentile}
        generateDistributionData={generateDistributionData}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SyllabusAnalysis skillBreakdown={assessmentData.skillBreakdown} />

        <QuestionAnalysis
          score={assessmentData.score}
          totalQuestions={assessmentData.totalQuestions}
        />
      </div>
    </div>
  );
}

export default App;
