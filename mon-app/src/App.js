import React from 'react'
import { Provider } from 'react-redux'
import AddTodo from './Components/AddTodo'
import FilterTodo from './Components/FilterTodo'
import ListTodo from './Components/ListTodo'
import store from "./Store"

const App = () => {
    return (
        <Provider store={store}>

            <div className="container text-center p-5">
                Hello I'm Really Here 🐰 !!
                <AddTodo />
                <hr />
                <FilterTodo />
                <ListTodo />
            </div>
        </Provider>
    )
}

export default App

