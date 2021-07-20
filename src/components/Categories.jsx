import React, { useState } from 'react';

const Categories = ({ items }) => {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items &&
          items.map((name, i) => {
            return (
              <li
                className={activeItem === i ? 'active' : ''}
                onClick={() => onSelectItem(i)}
                key={`${name}_${i}`}>
                {name}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Categories;
