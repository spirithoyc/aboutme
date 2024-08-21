import React from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Achievement from './components/Achievement';
import './style.css';
import resumeData from './resume.json'

function App() {
    return (
        <div className="app-container">
            <Banner data={resumeData.banner} />
            <PersonalInfo data={resumeData.personalInfo}/>
            <Education data={resumeData.education} />
            <Experience data={resumeData.experience}/>
            <Achievement data={resumeData.achievement}/>
            <Footer data={resumeData.footer}/>
        </div>
    );
}

export default App;
