// Loader.jsx
import React from 'react';
import CardLoader from './CardLoader.jsx';
import TabLoader from './TabLoader.jsx';
import './Loader.css';

const Loader = () => {
  return (
    <div className="skeleton-loader">
      <CardLoader />
      <TabLoader />
    </div>
  );
};

export default Loader;
