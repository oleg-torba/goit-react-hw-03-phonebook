import React from 'react';
import PropTypes from 'prop-types';
import Css from './ContactList.module.css'

export function ContactList({ contacts, removeContact }) {
  return (
    <div>
      <ul className={Css.contactBlock}>
        {contacts.map(item => {
          return (
            <>
              <li className={Css.contactList} key={item.id}>
                <div className={Css.contactValue}>
                  <span className={Css.contactItem}>
                   {item.data.name}
                  </span>
                  <span className={Css.contactItem}>
                    {item.data.number}
                  </span>
                  </div>
                  <button type="button" onClick={() => removeContact(item.id)}>
                    Delete
                  </button>
               
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