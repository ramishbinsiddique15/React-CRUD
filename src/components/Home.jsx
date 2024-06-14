import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { deleteUser } from '../UserReducer';
const Home = () => {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    }
  return (
    <div className='container'>
        <h2>React CRUD</h2>
        <NavLink to="/create">
        <button className="btn btn-success my-3">
            Create +
        </button>
        </NavLink>
        <table className="table">
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </thead>
            <tbody>
                {users.map((user,index) => (
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                        <NavLink to={`/update/${user.id}`}><button className="btn btn-primary btn-sm mx-2">Edit</button> </NavLink>
                            <button onClick={()=>handleDelete(user.id)} className="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                ))}
                
            </tbody>
        </table>
      
    </div>
  )
}

export default Home
