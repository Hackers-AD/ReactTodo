import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { edit_todo } from '../store/actions';
import { Link, useParams, useNavigate } from 'react-router-dom';

const EditTodo = (props) => {
    const {id} = useParams();
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const todo = useSelector(s => s.todo).filter(t => t.id == id)[0]
    const session = useSelector(s => s.session);

    const [title, setTitle] = useState(() => todo.title);
    const [completed, setCompleted] = useState(() => todo.completed);
    const [error, setError] = useState(() => '')

    useEffect(() => {
        if(todo.user.username != session.user.username){
            return navigate('/')
        }
    }, [])

    const handleOnChangeCompleted = () => {
        setCompleted(s => !s);
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
                        <p>You must be logged in to edit this todo. <Link to='/login'>Click here to login</Link></p>
                    </div>
                )
            })
        }
        else{
            let data = {
                user: session.user,
                id: id,
                title: title,
                completed: completed,
            }
            dispatch(edit_todo(data))
            return navigate('/');
        }
    }

    return ( 
        <div className='row justify-content-center my-3'>
            <div className='col-md-8'>
                <div className="card">
                    <div className='card-header'>
                        <div className='text-center my-2 h4'>Edit Todo</div>
                        <form method='get' className='p-2' onSubmit={handleSubmit}>
                            {error ? <div className='text-danger'>{error}</div> : null}
                            <div className='d-flex align-items-center my-1'>
                                <div className='fw-bold me-2'>Title: </div>
                                <input type='text' name='title' className='form-control' 
                                    value={title} required onChange={(e) => setTitle(e.target.value)}/>
                            </div>
                            <div className='d-flex align-items-center my-2'>
                                <div className='fw-bold me-2 text-capitalize'>Completed: 
                                    <span className={completed ? 'ms-2 text-success' : 'ms-2 text-danger'}>
                                        {completed.toString()}
                                    </span>
                                </div>
                                <div className='btn btn-sm btn-dark ms-3' onClick={handleOnChangeCompleted}>
                                    {completed ? <span className='fa fa-close'></span>  : <span className='fa fa-check'></span>}
                                </div>
                            </div>

                            <div className='mx-5 my-2 pt-3'>
                                <button type='submit' className='btn btn-primary'>Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default EditTodo;