import React from 'react';

function Education({ data }) {
    return (
        <div className="education">
            <h2>Education</h2>
            {data.map((item, index) => (
                <div key={index} className="education-item">
                    <h3>{item.degree}</h3>
                    <p>{item.school}, {item.year}</p>
                </div>
            ))}
        </div>
    );
}

export default Education;
