import React from "react";
import './index.css';

function Message({ items }) {

  const message = () => {
    const totalItems = items.length;
    const packedItems = items.filter((item) => item.checked).length;
    const percentagePacked = totalItems === 0 ? 0 : (packedItems / totalItems) * 100;

    if (totalItems === packedItems && totalItems !== 0) {
      return <p>You got everything! Ready to go 🛫</p>;
    } else if (totalItems === 0) {
      return <p>Start adding some items to your packing list 🚀</p>;
    } else {
      return (
        <p>
          💼 You have {totalItems} item{totalItems === 1 ? "" : "s"} on your list
          and you already packed {packedItems} ({percentagePacked.toFixed(0)}%)
        </p>
      );
    }
  };

  return (
    <div className="messageDiv">
      {message()}
    </div>
  );
}

export default Message;
