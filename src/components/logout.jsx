import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link} from 'react-router-dom';
import { logout_user } from '../store/actions';
import { useDispatch } from 'react-redux';

const Logout = () => {
    const session = useSelector(s => s.session);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if(session.isLogged){
            dispatch(logout_user(session.user));
        }else{
            return navigate('/');
        }
    })

    return ( 
        <div className='container'>
            <div className="row justify-content-center">
                <div className='col-md-8 my-3'>
                    <div className="card">
                        <div className="card-header py-3">
                            <div className='h5 py-2'>You are sucessfully logged out</div>
                            <Link to='/'>
                                <div className='btn btn-success'>Return Home</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Logout;