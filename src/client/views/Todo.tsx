import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Item } from '../types';

const Todo = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        fetch('/api/items')
            .then(pizza => pizza.json())
            .then(ice_cream => setItems(ice_cream));
    }, []);

    return (
        <>
            <h1 className="display-1">Todo</h1>
            {items.map(pizza => (
                <div key={`todolist-item-${pizza.id}`} className="card shadow-lg">
                    <div className="card-header">
                        {pizza.content}
                    </div>
                    <div className="card-body">
                        {pizza.is_finished ? 
                            <p className="text-success">Finished!</p>
                            : <p className="text-warning">In progress!</p>
                        }
                        <Link to={`/todo/${pizza.id}`} className='btn btn-outline-info'>See just me!</Link>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Todo;
