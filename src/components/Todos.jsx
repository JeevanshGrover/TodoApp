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
                        <button className='hidden group-hover:block px-2 ml-auto hover:font-bold hover:text-red-500' onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                        
                        {editId === todo.id ? (
                            <button className='hidden group-hover:block px-2' onClick={updateClickHandler}>
                                <svg className='h-5 w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M160 144C151.2 144 144 151.2 144 160L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 237.3C496 233.1 494.3 229 491.3 226L416 150.6L416 240C416 257.7 401.7 272 384 272L224 272C206.3 272 192 257.7 192 240L192 144L160 144zM240 144L240 224L368 224L368 144L240 144zM96 160C96 124.7 124.7 96 160 96L402.7 96C419.7 96 436 102.7 448 114.7L525.3 192C537.3 204 544 220.3 544 237.3L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 160zM256 384C256 348.7 284.7 320 320 320C355.3 320 384 348.7 384 384C384 419.3 355.3 448 320 448C284.7 448 256 419.3 256 384z"/></svg>
                            </button>
                        ):(
                            <button className='hidden group-hover:block px-2' onClick={() => handleEditClick(todo)}>
                                <svg className='h-5 w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M505 122.9L517.1 135C526.5 144.4 526.5 159.6 517.1 168.9L488 198.1L441.9 152L471 122.9C480.4 113.5 495.6 113.5 504.9 122.9zM273.8 320.2L408 185.9L454.1 232L319.8 366.2C316.9 369.1 313.3 371.2 309.4 372.3L250.9 389L267.6 330.5C268.7 326.6 270.8 323 273.7 320.1zM437.1 89L239.8 286.2C231.1 294.9 224.8 305.6 221.5 317.3L192.9 417.3C190.5 425.7 192.8 434.7 199 440.9C205.2 447.1 214.2 449.4 222.6 447L322.6 418.4C334.4 415 345.1 408.7 353.7 400.1L551 202.9C579.1 174.8 579.1 129.2 551 101.1L538.9 89C510.8 60.9 465.2 60.9 437.1 89zM152 128C103.4 128 64 167.4 64 216L64 488C64 536.6 103.4 576 152 576L424 576C472.6 576 512 536.6 512 488L512 376C512 362.7 501.3 352 488 352C474.7 352 464 362.7 464 376L464 488C464 510.1 446.1 528 424 528L152 528C129.9 528 112 510.1 112 488L112 216C112 193.9 129.9 176 152 176L264 176C277.3 176 288 165.3 288 152C288 138.7 277.3 128 264 128L152 128z"/></svg>
                            </button>
                        )}
                    </li>
                ))}
        </div>
    )
}

export default Todos