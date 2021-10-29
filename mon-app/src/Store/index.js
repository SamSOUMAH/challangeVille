import {createStore} from 'redux'
	import {ReducerToDo} from './Reducers/todo';
	

	const store = createStore(ReducerToDo,
	    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
	

	export default store



