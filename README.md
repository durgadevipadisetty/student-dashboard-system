# Student Dashboard 🎓

A React-based student dashboard that lets you browse, search, and filter student records by name and department.

## Features
- Summary cards showing total student count and department-wise counts (e.g. CSE, ECE)
- Live search by student name
- Filter students by department via dropdown
- Clean table view with profile info: name, department, year, mobile number, and email
- Responsive UI built with Bootstrap

## Tech Stack
- **React** (with Hooks — `useState`)
- **Vite** for build tooling
- **Bootstrap** for layout and styling
- **Font Awesome** for icons
- Local JSON (`students.json`) as the data source — no backend required

## How to run
npm install
npm run dev

## Project structure
src/
├── App.jsx          # Main dashboard component (search, filter, table)
├── App.css           # Custom styles
├── students.json     # Student records data
└── main.jsx          # App entry point
