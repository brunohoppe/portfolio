import React from 'react';
import './styles.css';
const Content = ({ children }) => (
  <div className="content">
    <div className="inner">
      {children}
    </div>
  </div>
);

export default Content;