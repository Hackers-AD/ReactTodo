import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { create_user, login_user } from '../store/actions';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [user, setUser] = useState(() => ({
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        confirm_password: ''
    }))
    const [errors, setErrors] = useState(() => [])
    const users = useSelector(s => s.auth)
    const session = useSelector(s => s.session);
    
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
        setErrors(() => []);
        let errorcount = 0;

        users.map(u => {
            if (u.username == user.username) {
                setErrors(prevErrors => ([...prevErrors, 'Username already taken']));
                errorcount ++;
            }
        })
        if(user.password.length < 8){
            setErrors(prevErrors => ([...prevErrors, 'Password length must be 8 or greater']))
            errorcount ++;
        }
        if(user.password != user.confirm_password){
            setErrors(prevErrors => ([...prevErrors, 'Pasword didn\'t match']))
            errorcount ++;
        }
        if (errorcount == 0){
            dispatch(create_user(user));
            dispatch(login_user(user));
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
                                {errors.map(err => (
                                    <ul key={err}>
                                        <li>{err}</li>
                                    </ul>
                                ))}
                                
                                <input type="text" name="username" className="form-control my-1" placeholder='Username' 
                                    required value={user.username} onChange={(e) => handleOnChange(e, 'username')}/>
                                <input type="email" name="email" className="form-control my-1" placeholder='Email address' 
                                    required value={user.email} onChange={(e) => handleOnChange(e, 'email')}/>
                                <input type="text" name="first_name" className="form-control my-1" placeholder='First name' 
                                    value={user.first_name} onChange={(e) => handleOnChange(e, 'first_name')}/>
                                <input type="text" name="last_name" className="form-control my-1" placeholder='Last name' 
                                    value={user.last_name} onChange={(e) => handleOnChange(e, 'last_name')}/>
                                <input type="password" name="password" className="form-control my-1" placeholder='New password' 
                                    required value={user.password} onChange={(e) => handleOnChange(e, 'password')}/>
                                <input type="password" name="matchpassword" className="form-control my-1" placeholder='Confirm password' 
                                    required value={user.confirm_password} onChange={(e) => handleOnChange(e, 'confirm_password')}/>
                                <input type="submit" className="btn btn-primary my-3" value='Create User'/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Register;