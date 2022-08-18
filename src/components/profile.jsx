import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const session = useSelector(s => s.session);
    const navigate = useNavigate();
    
    useEffect(() => {
        if(!session.isLogged){
            return navigate('/')
        }
    }, [])

    return (
        <div className='container'>
            <div className='row justify-content-center my-3'>
                <div className='col-md-8'>
                    <div className='card'>
                        <div className='card-header'>
                            <div className='d-flex align-items-center py-2'>
                                <div className='h1 me-3'>
                                    <div className='border border-danger rounded-circle px-2 py-1'>
                                        <span className='fa fa-user-circle'></span>
                                    </div>
                                </div>
                                <div>
                                    <div className='text-capitalize h5'>{session.user.username}</div>
                                    <div className='small fw-bold'>{session.user.email}</div>
                                </div>
                            </div>
                            <div className='border-bottom pt-3'>
                                <div className='row align-items-center justify-content-between'>
                                    <div className='col-md-6'><b>First name:</b> {session.user.first_name}</div>
                                    <div className='col-md-6'><b>Last name:</b> {session.user.last_name}</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Profile;