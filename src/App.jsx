import Header from "./components/Header";
import Footer from "./components/Footer";
import InputArea from "./components/InputArea";
import ListItems from "./components/ListItems";
import { useState } from "react";
import "./App.css"
export default function App() {
  const [items, setItems] = useState([]);

  function handleAdd(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function handleDelete(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <Header />
      <div className="container">
        <InputArea onAdd={handleAdd} />
        <div className="listItems">
          <ul>
            {items.map((item, index) => (
              <ListItems
                onDelete={handleDelete}
                key={index}
                id={index}
                text={item}
              />
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
