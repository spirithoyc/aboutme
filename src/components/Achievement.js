import React from 'react';
import img_dora from '../res/dora.png';
import img_think from '../res/think.png';
import img_ifami from '../res/iFami.png';

function Achievement({ data }) {
    // 创建图像映射对象
    const imageMap = {
        img_dora,
        img_think,
        img_ifami,
    };

    const handleImageClick = (image) => {
        const imageUrl = imageMap[image];
        if (imageUrl) {
            window.open(imageUrl, '_blank');
        }
    };

    return (
        <div className="achievement">
            <h2>Achievements</h2>
            {data.map((item, index) => (
                <div key={index} className="achievement-item">
                    <h3>
                        ({item.year}) {item.title}
                    </h3>
                    <p>{item.description}</p>
                    {item.ref && item.ref.length > 0 && (
                        <div className="references">
                            {item.ref.map((reference, refIndex) => (
                                <div key={refIndex} className="reference-item">
                                    {reference.url ? (
                                        <a
                                            href={reference.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {reference.text}
                                        </a>
                                    ) : reference.image && imageMap[reference.image] ? (
                                        <div 
                                            className="image-container"
                                            onClick={() => handleImageClick(reference.image)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <span className="hover-text">{reference.text}</span>
                                            <img
                                                src={imageMap[reference.image]}
                                                alt={reference.text}
                                                className="reference-image"
                                            />
                                        </div>
                                    ) : (
                                        <p>Invalid reference</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Achievement;
