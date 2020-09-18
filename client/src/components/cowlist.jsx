import React from 'react';

const CowList = ({cows}) => (
  <div>
    {cows.map((cow) => (
      <div>
        <div>{cow.id}</div>
        <div>{cow.name}</div>
        <div>{cow.description}</div>
      </div>
    ))}
  </div>
);

// get information from server

export default CowList;
