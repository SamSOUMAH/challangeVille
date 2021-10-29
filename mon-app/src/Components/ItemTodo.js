const ItemTodo = ({ task, onDelete, onToggle }) => {
	

    const onDeleteTast = () => {
        if (window.confirm("Are You sur delete") == true)
            onDelete(task.id)
    }
    const handleChange = ()=>{
        onToggle(task.id)
    }


    return (
        <li>
            <input
                onChange={handleChange}
                type="checkbox"
                value={task.isCompleted}/>

            <span className={task.isCompleted?"text-decoration-line-through":"" }>
                {task.title}</span>
            <button onClick={onDeleteTast}
            >DEL</button>
        </li>
    )
}


export default ItemTodo
