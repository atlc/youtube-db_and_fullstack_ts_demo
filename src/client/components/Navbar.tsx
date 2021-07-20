import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to='/' className="btn btn-info mx-1">Home</Link>
            <Link to='/todo' className="btn btn-info mx-1">To-Do List</Link>
            <Link to='/todo/create' className="btn btn-info mx-1">Create Item</Link>
        </div>
    )
}

export default Navbar;
