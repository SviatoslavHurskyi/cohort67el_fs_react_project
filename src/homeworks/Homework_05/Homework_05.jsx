import { useState } from "react";
import { v4 } from "uuid";

import Button from "../../components/Button/Button";

import "./styles.css";

function Homework_05() {
  const [order, setOrder] = useState([]); // ["Burger"] => ["Burger", "Fries"]

  const menuItems = [
    "Burger", 
    "Fries", 
    "Cola", 
    "Salad", 
    "Ketchup", 
    "Ice-cream"
  ];

  const addMenuElement = (menuEl) => {
    setOrder((prevValue) => {
      return [...prevValue, menuEl];
    });
  };

  const menuButtons = menuItems.map((name) => (
    <div key={v4()} className="button_control">
      <Button name={name} onClick={() => addMenuElement(name)} />
    </div>
  ));

  // map() JSX
  // ["Burger", "Fries"] => [<li>Burger</li>, <li>Fries</li>]
  const finalOrder = order.map((orderEl) => {
    return <li key={v4()} className="order_item">{orderEl}</li>;
  });

  return (
    <div className="homework_05_wrapper">
      <div className="menu_wrapper">
        <h1 className="menu">Menu:</h1>
        <div className="button_wrapper">
         {menuButtons}
        </div>
      </div>

      <div className="order_wrapper">
        <p className="order_title">Your Order:</p>
        <ol className="order_list">{finalOrder}</ol>
      </div>
    </div>
  );
}

export default Homework_05;
