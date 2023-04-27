import React from 'react';
import PropTypes from 'prop-types';
import Css from '../ContactList/ContactList.module.css'

export function Section({ title, children }) {
  return (
    <>
      <div className={Css.section}>
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
