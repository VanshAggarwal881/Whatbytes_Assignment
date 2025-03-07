# WhatBytes Application

## Overview

WhatBytes is a web application built with React that helps users track and visualize their performance on skill assessments and tests. The application offers a clean, modern UI with interactive charts to display test results and progress tracking.

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

#### StatSection.js

Combines multiple StatCard components to create a "Quick Statistics" section showing rank, percentile, and correct answers.

#### ComparisonChart.js

Displays a line chart that compares the user's percentile with the distribution of other test takers, using the Chart.js library.
