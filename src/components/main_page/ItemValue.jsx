import React, { useState } from 'react';

const ItemValue = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleQuestion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`item-value`}>
      <div className={`faq_question ${isOpen ? 'item-value_shadow' : '' }`} onClick={toggleQuestion}>
        <div className="faq_question_text">{item.name}</div>
        <div className="faq_question_arrow">
          <img 
          className={`${isOpen ? 'img-open' : '' }`}
          src="/icons/icon_arrow-purple.svg" alt="icon" />
        </div>
      </div>
      {isOpen && (
        <div className="item-value-content">
          <p>{item.value}</p>
        </div>
      )}
    </div>
  );
};

export default ItemValue;