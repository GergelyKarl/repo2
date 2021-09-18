import React, { useState } from "react";
import "./ItemFind.css";
import { arr } from "../items";

const ItemFind: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [items, setItems] = useState<
    | {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
      }[]
    | undefined
  >(arr);

  const handleClick = () => {
    const findItems =
      items && items?.length > 0
        ? items?.filter(
            (item) => item.title === text
          )
        : undefined;
    setItems(findItems);
  };

const input1=document.querySelector(".input1")
input1?.addEventListener("keyup",handleClick)

  return (
    <div>
      <div className="title">
        <h1>Item find</h1>
      </div>
      <div className="input__wrapper">
        <input
        className="input1"
        
          type="text"
          placeholder="Type to search..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setItems(arr);
          }}
        />
        <button
          disabled={!text}
          onClick={handleClick}
        >
          Search
        </button>
      </div>
      <div className="result">
        {items && items?.length === 0 && (
          <div>Not Found</div>
        )}

        {items &&
          items.length > 0 &&
          items?.map((item) => (
            <div key={item.id}>
              <p>{item?.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ItemFind;
