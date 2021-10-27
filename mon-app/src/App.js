import React from 'react'
import { Provider } from 'react-redux'
import ListTodo from './Components/ListTodo'
import store from "./Store"

const App = () => {
    return (
        <Provider store={store}>
            Hello I'm Really Here 🐰 !!
            <hr />
            <ListTodo/>
        </Provider>
    )
}

export default App
