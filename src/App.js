import React, { useState } from 'react';
import { computeWeightedGrade } from './utils/grades';
import './App.css';

function App() {
  const [schoolInfo, setSchoolInfo] = useState({ university: 'UA College', subject: '3D Modeling', section: 'BMMA - 1A' });
  const [scores, setScores] = useState({ activities: '', performance: '', midterm: '', finals: '' });
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setScores({ ...scores, [e.target.name]: e.target.value });
    setError('');
  };

  const handleCalculate = () => {
    // Check if any input is invalid
    const inputs = Object.values(scores);
    const hasInvalid = inputs.some(val => val !== '' && (Number(val) < 0 || Number(val) > 100)); //blank, below 0 or above 100

    if (hasInvalid) {
      setError('All scores must be between 0 and 100.');
      return;
    }

    const computed = computeWeightedGrade(scores.activities, scores.performance, scores.midterm, scores.finals);
    setResult(computed);
  };

  return (
    <div className="app-container">
      {/* HEADER SECTION */}
      <header className="app-header">
        <div className="logo-placeholder">
          LOGO
        </div>
        <div className="logo-placeholder">
          LOGO
        </div>
         <div className="logo-placeholder">
          LOGO
        </div>
         <div className="logo-placeholder">
          LOGO
        </div>
        <div className="header-info">
          <input
            className="header-input university-name"
            value={schoolInfo.university}
            onChange={(e) => setSchoolInfo({ ...schoolInfo, university: e.target.value })}
          />
          <input
            className="header-input subject-name"
            value={schoolInfo.subject}
            onChange={(e) => setSchoolInfo({ ...schoolInfo, subject: e.target.value })}
          />
          <input
            className="header-input section-name"
            value={schoolInfo.section}
            onChange={(e) => setSchoolInfo({ ...schoolInfo, section: e.target.value })}
          />
        </div>
      </header>

      <main className="app-main">
        {/* GRADE CALCULATOR */}
        <div className="calculator-panel">
          <h2 style={{ margin: 0, padding: 0 }}>Grade Input</h2>
          <p style={{ margin: 0, marginBottom: 20, padding: 0, fontSize: '14px', color: 'var(--accent-green)' }}>
            Enter the percentage equivalent for each category (0-100).
            <br /><em>Example: 60/70 on an exam = 85.71</em>
          </p>


          <div className="input-group">
            <label>Activities (30%)</label>
            <input type="number" name="activities" value={scores.activities} onChange={handleChange} placeholder="0-100" />
          </div>

          <div className="input-group">
            <label>Performance Tasks (30%)</label>
            <input type="number" name="performance" value={scores.performance} onChange={handleChange} placeholder="0-100" />
          </div>

          <div className="input-group">
            <label>Midterm Exam (20%)</label>
            <input type="number" name="midterm" value={scores.midterm} onChange={handleChange} placeholder="0-100" />
          </div>

          <div className="input-group">
            <label>Final Exam (20%)</label>
            <input type="number" name="finals" value={scores.finals} onChange={handleChange} placeholder="0-100" />
          </div>

          <button className="calculate-btn" onClick={handleCalculate}>Calculate Final Grade</button>

          {error && <p className="error-msg">{error}</p>}

          {result && (
            <div className="result-box">
              <h3>Final Result</h3>
              <p>Weighted Average: <span>{result.average}</span></p>
              <p>Transmuted Grade: <span className="transmuted-highlight">{result.transmuted}</span></p>
            </div>
          )}
        </div>

        {/* GRADE TRANSMUTATION TABLE */}
        <div className="transmutation-panel">
          <h2>Transmutation Table</h2>
          <table>
            <thead>
              <tr>
                <th>Average</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>90 - 100</td><td>4.00</td></tr>
              <tr><td>80 - 89</td><td>3.50</td></tr>
              <tr><td>70 - 79</td><td>3.00</td></tr>
              <tr><td>65 - 69</td><td>2.50</td></tr>
              <tr><td>60 - 64</td><td>2.00</td></tr>
              <tr><td>55 - 59</td><td>1.50</td></tr>
              <tr><td>50 - 54</td><td>1.00</td></tr>
              <tr className="failed-row"><td>Below 50</td><td>0.00</td></tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default App;