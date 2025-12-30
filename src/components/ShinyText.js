import React from 'react';

const ShinyText = ({ text, disabled = false, speed = 3, className = '' }) => {
    const animationDuration = `${speed}s`;

    return (
        <div
            className={`inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
            style={{
                backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 1) 40%, rgba(16, 185, 129, 1) 50%, rgba(255, 255, 255, 1) 60%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animationDuration: animationDuration,
            }}
        >
            {text}
        </div>
    );
};

export default ShinyText;
