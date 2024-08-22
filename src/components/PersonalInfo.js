import React from 'react';
import emailIcon from '../res/ic_email.png';
import phoneIcon from '../res/ic_phone.png';
import locationIcon from '../res/ic_location.png';
import noteIcon from "../res/ic_note.png"

function PersonalInfo({ data }) {
    return (
        <div className="personal-info">
            <h2>Personal Information</h2>
            <div className="info-item">
                <img src={emailIcon} alt="Email" className="icon" />
                {data.email}
            </div>
            <div className="info-item">
                <img src={phoneIcon} alt="Phone" className="icon" />
                {data.phone}
            </div>
            <div className="info-item">
                <img src={locationIcon} alt="Location" className="icon" />
                {data.location}
            </div>
            <div className="info-item">
                <img src={noteIcon} alt="Github" className="icon" />
                <a href="{data.github}" target="_blank">{data.github}</a>
            </div>
        </div>
    );
}

export default PersonalInfo;
