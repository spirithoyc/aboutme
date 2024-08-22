import React from 'react';
import './style.css'; 
import avatarImage from './res/avatar.png';

function Avatar({data}) {
    return (
        <div className="avatar-container">
            <div className="avatar">
                <img src={avatarImage} alt="Avatar" className="avatar-image" />
            </div>
            <h2>{data.name}</h2>
            <p>{data.position}</p>
        </div>
    );
}

export default Avatar;
