import React from 'react'
	import { Provider } from 'react-redux'
	import AddTodo from './Components/AddTodo'
	import ListTodo from './Components/ListTodo'
	import store from "./Store"
	

	const App = () => {
	    return (
	        <Provider store={store}>
	            Hello I'm Really Here 🐰 !!
	            <AddTodo/>
	            <hr />
	            <ListTodo />
	        </Provider>
	    )
	}
	
	export default App

