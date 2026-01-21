import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todoSlice.js'

function Todos() {
    const todos = useSelector(state => state.todos)
    const [editText, setEditText] = useState('');
    const [editId, setEditId] = useState('');
    const dispatch = useDispatch()

    const handleEditClick = (todo) => {
        setEditId(todo.id)
        setEditText(todo.text)
    }

    const updateClickHandler = () => {
        dispatch(updateTodo({id: editId, text: editText}))
        setEditId('')
        setEditText('')
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='text-3xl font-bold bg-amber-200 rounded-2xl px-6'>Todos</div>
                {todos.map((todo) => (
                    <li key={todo.id} 
                        className='group flex items-center p-1 mt-3 font-semibold w-84 sm:w-xl border-3 rounded-2xl bg-cyan-500'
                    >
                        <div className='w-6 h-5'>
                            <input
                                type="checkbox"
                                className='hidden group-hover:block w-5 h-5 cursor-pointer mx-2 relative left-0'
                            />
                        </div>

                        {editId === todo.id ? (
                            <input
                                type='text'
                                value = {editText}
                                onChange={(e) => setEditText(e.target.value)}
                                className='h-6 ml-3 border-2 border-amber-50 p-0.5'
                            />
                        ) : (
                            <div className='ml-3 overflow-auto'>{todo.text}</div>
                        )}
                        <button className='hidden group-hover:block px-2 ml-auto' onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                        
                        {editId === todo.id ? (
                            <button className='hidden group-hover:block px-2' onClick={updateClickHandler}>save</button>
                        ):(
                            <button className='hidden group-hover:block px-2' onClick={() => handleEditClick(todo)}>Y</button>
                        )}
                    </li>
                ))}
        </div>
    )
}

export default Todos