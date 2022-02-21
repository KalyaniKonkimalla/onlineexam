import React from "react";
import { Link } from "react-router-dom";
const ReadOnlyRow=({user,handleEditClick})=>{

    return(
                    <tr>
                    <td>{user.Name}</td>
                   <td>{user.course_id}</td>
                   <td>{user.test_id}</td>
                   <td>{user.courseType}</td>
                   <td>{user.statusCheck}</td>
                   <td>
                       <Link className="btn btn-primary badge rounded-pill btn-lg" 
                            to={`/TestEnroll/${user.tid}`}
                        onClick={(event)=>handleEditClick(event,user)}>EDIT</Link>
                   </td>
                   </tr>
    )
}
export default ReadOnlyRow;