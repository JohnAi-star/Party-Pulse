import React from 'react';

interface ActivityHeaderProps {
    title: string;
    date: string;
    description: string;
}

const ActivityHeader: React.FC<ActivityHeaderProps> = ({ title, date, description }) => {
    return (
        <header className="activity-header">
            <h1>{title}</h1>
            <p>{date}</p>
            <p>{description}</p>
        </header>
    );
};

export default ActivityHeader;