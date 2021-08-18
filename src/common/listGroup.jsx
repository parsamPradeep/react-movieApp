import React from 'react';

const ListGroup = props => {
  return (
    <div>
      <ul className="list-group">
        {props.items.map(genre => (
          <li
            key={genre._id}
            onClick={() => props.onItemSelect(genre)}
            className={
              props.selectedItem === genre
                ? 'list-group-item active'
                : 'list-group-item'
            }
            style={{ cursor: 'pointer' }}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;