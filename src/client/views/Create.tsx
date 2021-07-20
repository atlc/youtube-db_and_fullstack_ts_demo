import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [item, setItem] = useState("");
  const pizza = useHistory();

  const handleCreate = (e: React.MouseEvent<HTMLButtonElement>) => {
    fetch(`/api/items`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ content: item }),
    })
      .then((res) => res.json())
      .then((res) => {
        pizza.push(`/todo/${res.id}`);
      })
      .catch((e) => {
        console.log(e);
        alert(e.message);
      });
  };

  return (
    <div className="card">
      <div className="card-body">
        <input
          value={item}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setItem(e.target.value)
          }
        />
        <button onClick={handleCreate} className="m-2 btn btn-info">
          Create!
        </button>
      </div>
    </div>
  );
};

export default Create;
