import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Item } from "../types";

const EditTodo = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [isDone, setIsDone] = useState(0);
  const [item, setItem] = useState<Item>(null);

  useEffect(() => {
    fetch(`/api/items/${id}`)
      .then((res) => res.json())
      .then((data: Item) => {
        setItem(data);
        setIsDone(data.is_finished);
      });
  }, [id]);

  if (!item) return <></>;

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    isDone === 0 ? setIsDone(1) : setIsDone(0);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    fetch(`/api/items/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ is_finished: isDone }),
    })
      .then((res) => res.json())
      .then((res) => {
          history.push(`/todo/${id}`)
      })
      .catch((e) => console.log(e));
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (confirm('Are you sure you want to delete this?')) {
          fetch(`/api/items/${id}`, {
              method: "DELETE"
          })
          .then((res) => res.json())
          .then((res) => {
              history.push(`/todo/`)
          })
          .catch((e) => console.log(e));
      }
  }

  return (
    <div key={`editable-todolist-item-${item.id}`} className="card shadow-lg">
      <div className="card-header">{item.content}</div>
      <div className="card-body">
        {isDone ? (
          <p className="text-success">Finished!</p>
        ) : (
          <p className="text-warning">In progress!</p>
        )}
        <div className="card-footer">
          <button className="btn mx-1 btn-info" onClick={handleToggle}>
            Toggle status!
          </button>
          <button className="btn mx-1 btn-outline-info" onClick={handleSubmit}>
            Save Changes!
          </button>
          <button className="btn mx-1 btn-outline-danger" onClick={handleDelete}>
            DELETE (cannot be undone!)
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
