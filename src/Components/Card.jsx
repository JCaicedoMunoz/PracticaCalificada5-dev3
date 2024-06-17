import React from 'react';

const Card = ({ user }) => {
  return (
    <div className="card">
      <img src={`https://fastly.picsum.photos/id/134/300/300.jpg?hmac=b3gMz-pfa737vVp8dKmvrVyW-eLFdbJ6Zju4XLUr62k`} alt="photo" className="card-image" />
      <div className="card-info">
        <div className="card-details">
          <h3>{user.name}</h3>
          <span>{user.username}</span>
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
