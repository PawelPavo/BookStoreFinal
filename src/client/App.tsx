import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import BookDetails from './pages/BookDetails';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import NavBar from './components/NavBar';


const App: React.FC<IAppProps> = () => {

	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/login">
					<Login />
				</Route>
				<Route exact path="/register">
					<Register />
				</Route>
				<Route exact path="/books">
					<Books />
				</Route>
				<Route exact path="/books/new">
					<AddBook />
				</Route>
				<Route exact path="/:id/update">
					<EditBook />
				</Route>
				<Route exact path="/:id/details">
					<BookDetails />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export interface IAppProps { }

export default App;



