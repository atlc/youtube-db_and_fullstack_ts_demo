import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Item } from "../types";

const SingleTodo = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Item>(null);

  useEffect(() => {
    fetch(`/api/items/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  if (!item) return <></>;

  return (
    <div key={`todolist-item-${item.id}`} className="card shadow-lg">
      <div className="card-header">{item.content}</div>
      <div className="card-body">
        {item.is_finished ? (
          <p className="text-success">Finished!</p>
        ) : (
          <p className="text-warning">In progress!</p>
        )}
        <div className="card-footer">
          <Link className='btn btn-info' to={`/todo/${item.id}/edit`}>Edit me!</Link>
        </div>
      </div>
    </div>
  );
};

export default SingleTodo;
