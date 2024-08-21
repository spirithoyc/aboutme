import React from 'react';

function Experience({ data }) {
    return (
        <div className="experience">
            <h2>Experience</h2>
            {data.map((item, index) => (
                <div key={index} className="experience-item">
                    <h3>{item.position} at {item.company}</h3>
                    <h4>{item.years}</h4>
                    <p>{item.description}</p>
                    <p><strong>Skills:</strong> {item.skill.join(', ')}</p>
                </div>
            ))}
        </div>
    );
}

export default Experience;
