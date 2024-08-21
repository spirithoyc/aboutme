import React from 'react';

function PersonalInfo({data}) {
    return (
        <div className="personal-info">
            <h2>Personal Information</h2>
            <div className="info-item">{data.name}</div>
            <div className="info-item">{data.email}</div>
            <div className="info-item">{data.github}</div>
        </div>
    );
}

export default PersonalInfo;
