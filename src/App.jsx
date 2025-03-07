import { useState } from "react";
import { asset } from "./assets/assest";
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

import {
  ComparisonChart,
  StatSection,
  TestHeader,
  Header,
  Sidebar,
  SyllabusAnalysis,
  QuestionAnalysis,
  UpdateScoreModal,
} from "./index.js";

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

  // State for modal visibility
  const [showModal, setShowModal] = useState(false);

  // State for form inputs
  const [formInputs, setFormInputs] = useState({
    rank: assessmentData.rank,
    percentile: assessmentData.percentile,
    score: assessmentData.score,
  });

  // Update form input state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInputs({
      ...formInputs,
      [name]: parseInt(value) || 0,
    });
  };

  // Save form data and update main state
  const handleSave = () => {
    setAssessmentData({
      ...assessmentData,
      rank: formInputs.rank,
      percentile: formInputs.percentile,
      score: formInputs.score,
    });
    setShowModal(false);
  };

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <Sidebar activeItem="skilltest" />

          {/* Main Content */}
          <div className="flex-1 md:ml-8">
            {/* Skill Test Header */}
            <TestHeader
              title="Hyper Text Markup Language"
              details="Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021"
              icon={asset.testheaderasset}
              onUpdate={() => setShowModal(true)}
            />

            {/* Quick Statistics */}
            <StatSection
              rank={assessmentData.rank}
              percentile={assessmentData.percentile}
              score={assessmentData.score}
              totalQuestions={assessmentData.totalQuestions}
            />

            {/* Comparison Graph */}
            <ComparisonChart
              percentile={assessmentData.percentile}
              generateDistributionData={generateDistributionData}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Syllabus Wise Analysis */}
              <SyllabusAnalysis
                skillBreakdown={assessmentData.skillBreakdown}
              />

              {/* Question Analysis */}
              <QuestionAnalysis
                score={assessmentData.score}
                totalQuestions={assessmentData.totalQuestions}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Update Modal */}
      <UpdateScoreModal
        show={showModal}
        onClose={() => setShowModal(false)}
        formInputs={formInputs}
        handleInputChange={handleInputChange}
        handleSave={handleSave}
        iconSrc={asset.updatemodalasset}
      />
    </div>
  );
}

export default App;
