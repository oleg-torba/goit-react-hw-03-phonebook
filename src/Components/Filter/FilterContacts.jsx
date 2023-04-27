import React from 'react';
import PropTypes from 'prop-types';
import Css from './Filter.module.css'

export function Filter({ value, onChange }) {
  return (
    <div className={Css.find}>
      <label>
        <input
          placeholder="Find contact by name"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
