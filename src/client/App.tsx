import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Create from "./views/Create";
import EditTodo from "./views/EditTodo";
import Home from "./views/Home";
import SingleTodo from "./views/SingleTodo";
import Todo from "./views/Todo";

const App = () => {
  return (
    <BrowserRouter>
      <main className="container m-2">
		<Navbar />
		<Switch>
			<Route exact path='/'>
				<Home />
			</Route>
			<Route exact path='/todo'>
				<Todo />
			</Route>
			<Route exact path='/todo/create'>
				<Create />
			</Route>
			<Route exact path='/todo/:id'>
				<SingleTodo />
			</Route>
			<Route exact path='/todo/:id/edit'>
				<EditTodo />
			</Route>
			<Route path='*'>
				<h1 className="display-1">404, ya ding-dong</h1>
			</Route>
		</Switch>
	  </main>
    </BrowserRouter>
  );
};

export default App;
