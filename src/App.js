import React from 'react';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Achievement from './components/Achievement';
import './style.css';
import resumeData from './resume.json'
import Avatar from './Avatar';

function App() {
    return (
        <div className="app-container">
          <div className='section-profession'>
            <Experience data={resumeData.experience}/>
            <Achievement data={resumeData.achievement}/>
          </div>
          <div className="section-profile">
            <Avatar data={resumeData.personalInfo}/>
            <PersonalInfo data={resumeData.personalInfo}/>
            <Education data={resumeData.education} />
          </div>
        </div>
    );
}

export default App;
