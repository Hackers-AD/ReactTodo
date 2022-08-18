import React, {useEffect} from 'react';
import Todos from './todos';
import AddTodo from './addTodo';

const Home = () => {

    return ( 
        <div className='container'>
            <AddTodo />
            <Todos />
        </div> 
    );
}
 
export default Home;