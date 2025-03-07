# WhatBytes Application

## Overview

WhatBytes is a web application built with React that helps users track and visualize their performance on skill assessments and tests. The application offers a clean, modern UI with interactive charts to display test results and progress tracking.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Component Breakdown](#component-breakdown)
- [Data Structure](#data-structure)
- [Dependencies](#dependencies)

## Features

- **Dashboard view** for quick statistics and performance overview
- **Skill test results visualization** with multiple chart types
- **Performance comparison** with other test takers
- **Syllabus-wise analysis** of performance across different topics
- **Question analysis** breakdown of correct and incorrect answers
- **Score updating functionality** through a modal interface
- **Responsive design** that works on desktop and mobile devices

## Project Structure

```
whatbytes/
├── Components/
│   ├── Layout/
│   │   ├── Header.js
│   │   └── Sidebar.js
│   └── Assessment/
│       ├── TestHeader.js
│       ├── StatCard.js
│       ├── StatsSection.js
│       ├── ComparisonChart.js
│       ├── SkillProgressBar.js
│       ├── SyllabusAnalysis.js
│       ├── QuestionAnalysis.js
│       └── UpdateScoreModal.js
└── App.js
```

## Component Breakdown

### Layout Components

#### Header.js

The top navigation bar that displays the application name (WhatBytes) and the current user's name.

#### Sidebar.js

A navigation sidebar that enables users to switch between different sections of the application (Dashboard, Skill Test, Internship). It highlights the currently active section.

### Assessment Components

#### TestHeader.js

Displays information about the current test/assessment including title, duration, submission date, and provides an update button to modify scores.

#### StatCard.js

A reusable card component that displays a statistic with an icon, value, and label, using customizable background and text colors.

#### StatsSection.js

Combines multiple StatCard components to create a "Quick Statistics" section showing rank, percentile, and correct answers.

#### ComparisonChart.js

Displays a line chart that compares the user's percentile with the distribution of other test takers, using the Chart.js library.

#### SkillProgressBar.js

A reusable progress bar component that visualizes performance in a specific skill area, with color coding based on the percentage.

#### SyllabusAnalysis.js

Uses multiple SkillProgressBar components to display performance across different skill areas or topics.

#### QuestionAnalysis.js

Shows a doughnut chart visualization of correct vs. incorrect answers, with a central display of the number of correct answers.

#### UpdateScoreModal.js

A modal dialog that allows users to update their rank, percentile, and score information.

## Data Structure

The application uses a central state in `App.js` to maintain assessment data with the following structure:

```javascript
{
  rank: Number,              // User's rank among all test takers
  percentile: Number,        // User's percentile (0-100)
  score: Number,             // Number of correct answers
  totalQuestions: Number,    // Total number of questions in the test
  skillBreakdown: [          // Array of skills with performance percentages
    {
      skill: String,         // Name of the skill/topic
      percentage: Number     // Performance percentage (0-100)
    },
    // more skills...
  ]
}
```

## Dependencies

- **React**: Frontend library for building the user interface
- **Chart.js**: Data visualization library for creating interactive charts
- **react-chartjs-2**: React components for Chart.js
- **chartjs-plugin-annotation**: Plugin for adding annotations to Chart.js charts
- **Tailwind CSS**: Utility-first CSS framework for styling
