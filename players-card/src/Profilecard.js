// After fixing code

// ProfileCard.js
import React from 'react';

const ProfileCard = React.memo(({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.description}</p>
    </div>
  );
});

export default ProfileCard;
