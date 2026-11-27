# Finals Grade Calculator: React CI/CD Pipeline

A React based Grade Calculator designed for teachers, featuring a custom transmutation table and a 0.0 (lowest) - 4.0 (highest) grading scale. This project demonstrates a complete, automated CI/CD pipeline using GitHub, Jenkins, SonarQube, and Docker.

## 📌 Project Overview

This application allows teachers to input weighted scores for Activities, Performance Tasks, Midterms, and Finals. It calculates the weighted average and transmutes it into a reverse grading scale (where 4.0 is the highest and 0.0 is failing).

The core business logic resides in pure JavaScript functions, making it easily testable.

## 🚀 Tech Stack

- **Frontend:** React using CRA
- **Testing:** Jest & React Testing Library
- **CI/CD:** Jenkins (Multibranch & Parameterized Pipelines)
- **Code Quality:** SonarQube (Community Build)
- **Containerization:** Docker & Nginx

## 🌴 Branch Strategy

The repository contains three specific branches to demonstrate branch-specific CI behavior:

- **`main`**: Stable application. Triggers the full CI pipeline (Checkout, Install & Test, Coverage, SonarQube Analysis, Quality Gate, Build, Archive Artifact).
- **`develop`**: Integration branch. Triggers Checkout, Install & Test, Coverage, and Build.
- **`feature/add-validation`**: Feature development. Triggers Checkout, Install & Test, and Coverage only.

## 💻 Local Setup

To run this project locally on your machine:

1. **Clone the repository:**
   ```
   git clone https://github.com/AnamXI/finals-grade-calculator
   cd finals-grade-calculator
   ```
2. **Install dependencies:**
   ```
   npm install
   ```
3. **Run the development server:**
   ```
   npm start
   ```
   (The app will be available at http://localhost:3000)

## How to Use the Application

Once the app is running in your browser, follow these steps to calculate a student's grade:

1. **Customize the Header:** At the top, click and edit the text fields to input your specific **University Name**, **Subject**, and **Section**.
2. **Enter the Scores:** On the left panel, input the percentage equivalent (0–100) for each category:
   - Activities (30%)
   - Performance Tasks (30%)
   - Midterm Exam (20%)
   - Final Exam (20%)
     _(Note: If a score is out of a different total, like 60/70, calculate the percentage first (e.g., 85.71... and enter that))._
3. **Calculate:** Click the **"Calculate Final Grade"** button.
4. **View Results:** The app will display the Weighted Average percentage and the Transmuted Grade (e.g., 4.0, 3.5, 1.0).
5. **Reference the Table:** Use the Transmutation Table on the right side to see the full reverse grading scale.
6. **Error Handling:** If a score exceeds 100 or is below 0, the app will display a validation error and prevent calculation.
