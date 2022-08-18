import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar(){
    const todos = useSelector(s => s.todo)
    const session = useSelector(s => s.session)

    useEffect(() => {
        
    }, []);

    return(
        <nav className='navbar navbar-expand navbar-dark bg-dark sticky-top shadow-md'>
            <div className='container'>
                <a href="/" className="navbar-brand">
                    <div className='d-flex justify-content-center'>
                        <div className='me-2'>React Todo App</div>
                        <div>
                            <span className='badge bg-danger rounded-circle'>
                                {todos.filter(t => t.user.username == session.user.username).length}
                            </span>
                        </div>
                    </div>
                </a>
                <div>
                    {!(session.isLogged) && 
                        <ul className='navbar-nav ms-auto'>
                            <Link to='/register' className='routeLink'>
                                <li className="nav-item">
                                    <div className="nav-link">Register</div>
                                </li>
                            </Link>
                            <Link to='/login' className='routeLink'>
                                <li className="nav-item">
                                    <div className="nav-link">Login</div>
                                </li>
                            </Link>
                        </ul>
                    }
                    {session.isLogged && 
                        <ul className='navbar-nav ms-auto'>
                            <Link to='/profile' className='routeLink'>
                                <li className="nav-item">
                                    <div className="nav-link text-capitalize">{session.user.username}</div>
                                </li>
                            </Link>
                            <Link to='/logout' className='routeLink'>
                                <li className="nav-item">
                                    <div className="nav-link">Logout</div>
                                </li>
                            </Link>
                        </ul>
                    }
                </div>
            </div>
        </nav>
    )
}