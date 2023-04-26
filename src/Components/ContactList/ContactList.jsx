import React from 'react';
import PropTypes from 'prop-types';

export function ContactList({ contacts, removeContact }) {
  return (
    <div className="contactBlock">
      <ul className="contactsList">
        {contacts.map(item => {
          return (
            <>
              <li className="contactsItem" key={item.id}>
                <div className="contact">
                  <span>
                    <span className="contactValue">Name:</span> {item.data.name}
                  </span>
                  <span>
                    <span className="contactValue">Number:</span>{' '}
                    {item.data.number}
                  </span>
                  <button type="button" onClick={() => removeContact(item.id)}>
                    Delete
                  </button>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    })
  ),
  removeContact: PropTypes.func.isRequired,
};