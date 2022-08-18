import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { delete_todo } from '../store/actions';
import { useNavigate } from 'react-router-dom';

const Todos = () => {
    const todos = useSelector(s => s.todo);
    const session = useSelector(s => s.session);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        
    }, [])

    const handleDelete = (data) => {
        dispatch(delete_todo(data));
    }
    const handleEdit = (id) => {
        return navigate(`/todo/${id}/edit`)
    }

    return ( 
        <div className='row justify-content-center my-3'>
            <div className='col-md-8'>
                {todos.length === 0 ? <div className='h5 badge bg-danger'>
                    No any todo added! Add todo to view here.</div> 
                :null}
                {todos.map(todo => {     
                    return(
                        <div key={todo.id}>
                            {session.user.username == todo.user.username &&
                            <div className='my-2'>
                                <div className='card bg-light border border-dark'>
                                    <div className='card-body'>
                                        <div className='row align-items-center justify-content-between'>
                                            <div className='col-md-8 my-1'>
                                                <div className='row text-capitalize'>
                                                    <div className='col-md-8 h3 me-3'>{todo.title}</div> 
                                                    <div className='col-md-4 h5 fw-bold text-primary'>By {todo.user.username}</div>
                                                </div>  
                                                <div className='small fw-bold'>
                                                    {todo.completed 
                                                        ? <div><span className='fa fa-check-circle text-success'></span> Completed</div> 
                                                        : <div><span class="fa-solid fa-circle-xmark text-danger"></span> Not Completed</div>
                                                    }
                                                </div> 
                                            </div>
                                            <div className='col-md-4 my-1'>
                                                <button className='btn btn-primary btn-sm me-2'
                                                 onClick={() => handleEdit(todo.id)}>Edit</button>
                                                <button className='btn btn-danger btn-sm me-2'
                                                    onClick={() => handleDelete(todo)}>Delete</button>
                                            </div>     
                                        </div>
                                    </div>
                                </div>
                            </div>
                            }           
                        </div>
                    )
                }).reverse()}
            </div>
        </div>
     );
}
 
export default Todos;