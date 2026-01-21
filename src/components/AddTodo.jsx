import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todoSlice.js'

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <div className='flex flex-col items-center w-full'>
            <div className='text-4xl text-amber-600 font-bold mt-10'>Taskify</div>
            <div className='text-3xl text-amber-200 font-bold mt-5'>Todo Application</div>
            <form className = 'm-4 p-2' onSubmit={addTodoHandler}>
                <input
                    type='text'
                    placeholder='enter a todo'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className='text-white border-2 rounded-xl p-1 w-64 md:w-80'
                />

                <button
                    type='submit'
                    disabled = {input.trim() === ''}
                    className='mx-2 border-2 p-1 rounded-xl bg-blue-400 hover:cursor-pointer hover:bg-blue-600'
                >
                    Add todo
                </button>
            </form>
        </div>
    )
}

export default AddTodo