import React, { useState } from "react";
import './index.css';

function Form({addItem}) {
    const [item, setItem] = useState('');
    const [selectedValue, setSelectedValue] = useState('1');

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        addItem({
            name:item,
            id:Date.now(),
            days:selectedValue
        });
        
        setItem('');
        setSelectedValue('1');
    }

    // Generate options for days using a loop
    const options = [];
    for (let i = 1; i <= 31; i++) {
        options.push(<option key={i} value={i}>{i}</option>);
    }

    return (
        <>
            <div className="formDiv">
                <p className="clrBlack">What do you need for your 🤩 trip?</p>
                <form className="todo" onSubmit={handleFormSubmit}>
                    <select className="input" value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
                        {options}
                    </select>
                    <input
                        className="input margin"
                        type="text"
                        value={item}
                        id="task"
                        placeholder="item..."
                        onChange={(e) => setItem(e.target.value)}
                        required
                    />
                    <button type="submit" className="input clrBlue clrBlack">ADD</button>
                </form>
            </div>
        </>
    );
}

export default Form;
