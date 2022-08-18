import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { add_todo } from '../store/actions';
import { Link } from 'react-router-dom';

const AddTodo = () => {
    const dispatch = useDispatch();
    const users = useSelector(s => s.auth)
    const todos = useSelector(s => s.todo)
    const session = useSelector(s => s.session);

    const [title, setTitle] = useState(() => '');
    const [error, setError] = useState(() => '')

    useEffect(() => {
        
    }, [])

    const handleOnChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(() => '');
        if(/^\s/.test(title)){
            setError(() => ('Title cannot start from white space.'))
        }else if (title.match(/\S/g).length < 5) {
            setError(() => ('Title must contains at least 5 characters excluding white space'))
        }else if(!session.isLogged){
            setError(() => { 
                return (
                    <div className="">
                        <p>You must be logged in to create new todo. <Link to='/login'>Click here to login</Link></p>
                    </div>
                )
            })
        }
        else{
            let data = {
                user: session.user,
                id: todos.length + 1,
                title: title,
                completed: false,
            }
            dispatch(add_todo(data))
            setTitle(() => '');
        }
    }

    return ( 
        <div className='row justify-content-center my-3'>
            <div className='col-md-8'>
                <div className="card">
                    <div className='card-header'>
                        <form method='get' className='p-2' onSubmit={handleSubmit}>
                            {error ? <div className='text-danger'>{error}</div> : null}
                            {/* <div className='d-flex align-items-center my-1'>
                                <div className='fw-bold me-2'>User: </div>
                                <select className="form-select " name="user" onChange={handleOnChangeUser}>
                                    {users.map(user => {
                                        return(
                                            <option key={user.id} value={user.username}>{user.username}</option>
                                        )
                                    })}
                                </select>
                            </div> */}
                            <div className='d-flex align-items-center my-1'>
                                <div className='fw-bold me-2'>Title: </div>
                                <input type='text' name='title' className='form-control' 
                                    value={title} required onChange={handleOnChangeTitle}/>
                            </div>
                            <div className='mx-5 my-2'>
                                <button type='submit' className='btn btn-primary'>Create Todo</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AddTodo;