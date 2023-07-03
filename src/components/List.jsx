import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUser,userDelete } from '../redux/actions'

const List = ({onEdit}) => {
  const dispatch = useDispatch()
  const {loading,users} = useSelector((state)=>state.appStore)

  // console.log(users)

  useEffect(()=>{
    dispatch(getAllUser())
  },[dispatch])


  const onDelete = (id) =>{
    dispatch(userDelete(id))
  }

  if(loading){
    return <h1>Loading...</h1>
  }

  return (
    <div>
    <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Gender</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((ele,index)=>(
            <tr key={ele.id}>
              <td>{index+1}</td>
              <td>{ele.name}</td>
              <td>{ele.email}</td>
              <td>{ele.salary}</td>
              <td>{ele.gender}</td>
              <td><button onClick={()=>onEdit(index)}>Edit</button></td>
              <td><button onClick={()=>onDelete(ele.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default List
