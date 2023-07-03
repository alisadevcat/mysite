import React, { useCallback, useState } from "react";
import AccordionItem from "./AccordionItem.jsx";

const Accordion = () => {
  const array = [
    { id: 1, heading: "Heading 0", text: "Lorem0 ipsum dolor sit amet consectetur, adipisicing elit. Velit liberosunt repellat magnam, deleniti, ullam sapiente vero impedit provident nulla aliquid ut quia dicta laboriosam aliquam! Sequi, voluptates vel! Amet." },
    { id: 2, heading: "Heading 1", text: "Lorem1 ipsum dolor sit amet consectetur, adipisicing elit. Velit liberosunt repellat magnam, deleniti, ullam sapiente vero impedit provident nulla aliquid ut quia dicta laboriosam aliquam! Sequi, voluptates vel! Amet." },
    { id: 3, heading: "Heading 2", text: "Lorem2 ipsum dolor sit amet consectetur, adipisicing elit. Velit liberosunt repellat magnam, deleniti, ullam sapiente vero impedit provident nulla aliquid ut quia dicta laboriosam aliquam! Sequi, voluptates vel! Amet." },
    { id: 4, heading: "Heading 3", text: "Lorem3 ipsum dolor sit amet consectetur, adipisicing elit. Velit liberosunt repellat magnam, deleniti, ullam sapiente vero impedit provident nulla aliquid ut quia dicta laboriosam aliquam! Sequi, voluptates vel! Amet." }
  ];

  const [currentActive, setCurrentActive] = useState(array[0]?.id || null);

  const onSelect = useCallback((e, newActive) => {
    setCurrentActive(newActive);
  }, []);

  return (
    <div className="accordion">
      {array.map((item) => 
        <AccordionItem key={item.id} item={item} onSelect={onSelect} isActive={item.id === currentActive} />
      )}
    </div>
  );
};

export default Accordion;
