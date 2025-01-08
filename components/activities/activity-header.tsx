import React from 'react';

// Assuming the structure of an Activity object
interface Activity {
  title: string;
  date: string;
  description: string;
  image: string; // If your activity includes an image
}

interface ActivityHeaderProps {
  activity: Activity; // Accept the entire activity object
}

const ActivityHeader: React.FC<ActivityHeaderProps> = ({ activity }) => {
  return (
    <header className="activity-header">
      <h1>{activity.title}</h1>
      <p>{activity.date}</p>
      <p>{activity.description}</p>
      {/* Optionally display an image */}
      {activity.image && <img src={activity.image} alt={activity.title} />}
    </header>
  );
};

export default ActivityHeader;
