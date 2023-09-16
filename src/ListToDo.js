import React, { useState } from "react";
import Form from "./Form";
import Message from "./Message";
import './index.css';

function ListToDo() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems((prevState) => [...prevState, item]);
    console.log(item);
  };

  const handleCheckboxChange = (index) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index].checked = !updatedItems[index].checked;
      return updatedItems;
    });
  };

  const handleDeleteItem = (index) => {
    setItems((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.splice(index, 1);
      return updatedTasks;
    });
  };

  const clearItems = () => {
    const confirmed = window.confirm("Are you sure you want to clear all items?");
    if (confirmed) {
      setItems([]);
      handleDeleteItem("");
    }
  };

  return (
    <>
      <Form addItem={addItem} />
      <div className="listDiv">
        <div className="itemList">
          {items.map((item, index) => (
            <div key={index} className="item">
              <input
                type="checkbox"
                className="marginRight"
                // checked={item.checked}
                onChange={() => handleCheckboxChange(index)}
              />
              <span className={`marginRight item-name ${item.checked ? 'checked' : ''}`}>
                {item.days}
              </span>
              <span className={`marginRight item-name ${item.checked ? 'checked' : ''}`}>
                {item.name}
              </span>
              <button className={"marginLeft"} onClick={() => handleDeleteItem(index)}>❌</button>
            </div>
          ))}
        </div>
        <div className="clearBtn">
          <button className={"input clrBtn"} onClick={clearItems}>CLEAR LIST</button>
        </div>
      </div>
      <Message items={items} />
    </>
  );
}

export default ListToDo;


