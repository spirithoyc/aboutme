import React from 'react';

function Achievement({ data }) {
    return (
        <div className="achievement">
            <h2>Achievements</h2>
            {data.map((item, index) => (
                <div key={index} className="achievement-item">
                    <h3>{item.title}</h3>
                    <p>{item.year}</p>
                    {item.ref && (
                        <p>
                            <a href={item.ref} target="_blank" rel="noopener noreferrer">
                                Reference Link
                            </a>
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Achievement;
