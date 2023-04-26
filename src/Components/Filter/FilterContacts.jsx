import React from 'react';
import PropTypes from 'prop-types';

export function Filter({ value, onChange }) {
  return (
    <div className="find">
      <label>
        <input
          className="formInput"
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
