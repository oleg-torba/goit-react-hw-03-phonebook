import React from 'react';
import PropTypes from 'prop-types';

export function Section({ title, children }) {
  return (
    <>
      <div className="section">
        <h2>{title}</h2>
        {children}
      </div>
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
