import React, { useCallback } from "react";

const AccordionItem = ({ item, isActive, onSelect }) => {
  const topClassName = ['accordion__item', isActive ? 'accordion-active' : ''].join(' ');

  const onClick = useCallback((event) => {
    onSelect(event, isActive ? null : item.id);
  }, [onSelect, item.id, isActive]);

  return (
    <div className={topClassName}>
      <div className="row">
        <h2 className="accordion__item-title">{item.heading}</h2>
        <button
          className="accordion__item-button"
          onClick={onClick}
        >
          <span>+</span>
        </button>
      </div>
      <div className="accordion__item-content">
        <p>{item.text}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
