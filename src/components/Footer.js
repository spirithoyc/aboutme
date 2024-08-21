import React from 'react';

function Footer({data}) {
    return (
        <div className="footer">
            <p>{data.text}</p>
        </div>
    );
}

export default Footer;
