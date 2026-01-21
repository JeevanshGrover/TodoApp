import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todoSlice.js'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return (
        <div className='flex flex-col items-center'>
            <div className='text-3xl font-bold bg-amber-200 rounded-2xl px-6'>Todos</div>
                {todos.map((todo) => (
                    <li key={todo.id} 
                        className='group flex items-center p-1 mt-3 font-semibold w-84 sm:w-xl border-2 rounded-2xl'
                    >
                        <div className='w-6 h-5'>
                            <input
                                type="checkbox"
                                className='hidden group-hover:block w-5 h-5 cursor-pointer mx-2 relative left-0'
                            />
                        </div>

                        <div className='ml-3 overflow-auto'>{todo.text}</div>
                        <button className='hidden group-hover:block px-2 ml-auto' onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                    </li>
                ))}
        </div>
    )
}

export default Todos