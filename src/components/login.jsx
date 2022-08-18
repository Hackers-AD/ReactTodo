import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login_user } from '../store/actions';

const Login = () => {
    const session = useSelector(s => s.session);
    const users = useSelector(s => s.auth)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [user, setUser] = useState(() => ({
        username: '',
        password: '',
    }))
    const [error, setError] = useState(() => '')

    useEffect(() => {
        if(session.isLogged){
            return navigate('/');
        }
    })

    const handleOnChange = (event, param) => {
        setUser(prevUser => (
            {
                ...prevUser,
                [param]: event.target.value,
            }
        ));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(() => '');

        const finduser = users.filter(u => {
            if(u.username == user.username && u.password == user.password){
                return u;
            }
        })
        if (finduser.length == 0){
            setError('Credentials doen\'t exist with provided information');
        }else{
            dispatch(login_user(finduser[0]));
            return navigate('/');
        }
    }

    return ( 
        <div className='container'>
            <div className="row justify-content-center">
                <div className='col-md-8 my-3'>
                    <div className="card">
                        <div className="card-header py-3">
                            <form method='get' onSubmit={handleSubmit}>
                                {error ? <div className='text-danger'>{error}</div> : null}
                                <input type="text" name="username" className="form-control my-1" placeholder='Username' 
                                    required value={user.username} onChange={(e) => handleOnChange(e, 'username')}/>
                                <input type="password" name="password" className="form-control my-1" placeholder='Password' 
                                    required value={user.password} onChange={(e) => handleOnChange(e, 'password')}/>
                                <input type="submit" className="btn btn-primary my-3" value='Login User'/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Login;