import React from 'react';

function Banner({data}) {
    return (
        <div className="banner">
            <h1>{data.title}</h1>
            <p>{data.subtitle}</p>
        </div>
    );
}

export default Banner;
