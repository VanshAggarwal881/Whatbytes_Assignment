import React from "react";
import SkillProgressBar from "./SkillProgressBar";

function SyllabusAnalysis({ skillBreakdown }) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Syllabus Wise Analysis
        </h3>
        <div className="space-y-6">
          {skillBreakdown.map((skill, index) => (
            <SkillProgressBar
              key={index}
              skill={skill.skill}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SyllabusAnalysis;
