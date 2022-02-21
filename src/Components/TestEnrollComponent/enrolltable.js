import { useState ,Fragment,Component, useEffect} from "react";
import axios from "axios";
import {nanoid} from "nanoid";
import ReadOnlyRow from "./readonlyrow";
import EditableRow from "./editablerow";
import { useHistory,useParams} from "react-router-dom";

const defaultData={
    
    Name:"",
    course_id:"",
    test_id:"",
    courseType:"",
    statusCheck:""
};
function EnrollForm()
{
    const {tid} = useParams();
    const [userData,setUserData]=useState(defaultData);
    const [userList, setUserList] = useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newUser={
          id: nanoid(),
          Name:userData.Name,
          course_id:userData.course_id,
          test_id:userData.test_id,
          courseType:userData.courseType,
          statusCheck:userData.statusCheck
        };
        const newUsers=[...userList,newUser];
        setUserList(newUsers);
        axios.post("http://localhost:8080/testEnroll/saveEnrollment",userData)
        .then((res)=>console.log(res));
    };

    const handleUser=(e)=>
    {
    const name=e.target.name;
    const value=e.target.value;
    setUserData({
        ...userData,[name]:value
    });
    };
    console.log(userData,userList);

    useEffect(() =>{
      loadUsers();
  },[]);
  const loadUsers = async ()=>{
      const result = await axios.get("http://localhost:8080/testEnroll/getEnrollment")
      // .then((postData)=>setUserData(postData.data));
      setUserList(result.data.reverse());
  };
//   const EditUser =()=>{
//     let history =useHistory();
//     const { tid } =useParams();
//     const [user,setUser] = useState({
//       Name:"",
//       course_id:"",
//       test_id:"",
//       courseType:"",
//       statusCheck:""  
//     });
//     const {Name,course_id,test_id,courseType,statusCheck}=user;
//     const onInputChange = e=>{
//       setUser({...user,[e.target.name]:e.target.value})
//     };
//   }
//   const onSubmit = async e=>{
//     e.preventDefault();
//     await axios.put(`http://localhost:8080/testEnroll/saveEnrollment/${tid}`,user);
//     history.push("/");
//   };
//   const getUsers=async ()=>{
//     const result=await axios.get(`http://localhost:8080/testEnroll/saveEnrollment/courseType/${courseType}`)
//     setUserList(result.data);
//   }

    const [editTestId,setEditTestId]=useState(null);
    const [editFormData,setEditFormData]=useState(defaultData)


    const handleEditClick=(event,user)=>{
        event.preventDefault();
        setEditTestId(user.tid);
        console.log(user);
        // const formValues={
        //     Name: user.Name,
        //     course_id: user.course_id,
        //     test_id: user.test_id,
        //     courseType: user.courseType,
        //     statusCheck: user.statusCheck
        // }
        setEditFormData(user);
    }

    const handleEditFormChange =(event)=>{
        event.preventDefault();
        const name=event.target.name;
        const value=event.target.value;
        setEditFormData({
            ...editFormData,[name]:value
    })
}
const handleCancelClick=()=>{
  setEditTestId(null);
}

const handleEditFormSubmit=(event)=>{
    event.preventDefault();
    const editedUser={
        id:editTestId,
        Name: editFormData.Name,
        course_id: editFormData.course_id,
        test_id: editFormData.test_id,
        courseType: editFormData.courseType,
        statusCheck: editFormData.statusCheck
    }
    const newUser=[...userList];
    const index=userList.findIndex((user)=>user.tid==editTestId);
    newUser[index] = editedUser;
    setUserList(newUser);
    setEditTestId(null);
    // const result= axios.get(`http://localhost:8080/testEnroll/saveEnrollment/${tid}`)
    axios.put(`http://localhost:8080/testEnroll/saveEnrollment/${tid}`,newUser);
    // history.pushState("/");
    // console.log(result);
}
    return(
        <>
                

{/* <!-- Modal --> */}
<div className="modal fade" id="add" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Enroll For a Test</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body col-auto">
        
      <form>
    <div className="col-auto">
      {/* <label htmlFor="Name" >Name</label> */}

      <input type="text" className="form-control" name="Name" id="Name" placeholder="Name" value={userData.Name}  onChange={handleUser} />
    </div>
  
    <div className="col-auto">
    {/* <label htmlFor="courseId" > CourseId </label> */}
    <input type="text" className="form-control" name="course_id" id="courseId" placeholder="courseId" value={userData.course_id}  onChange={handleUser} />
  </div>

  <div className="col-auto">
    {/* <label htmlFor="test_id" > TestId </label> */}
    <input type="text" className="form-control" name="test_id" id="test_id" placeholder="TestId" value={userData.test_id}  onChange={handleUser} />
  </div>
  
  <div className="col-auto">
    {/* <label htmlFor="courseType" > Course </label> */}
    <input type="text" className="form-control" name="courseType" id="courseType" placeholder="Course" value={userData.courseType}  onChange={handleUser} />
  </div>

  <div className="col-auto">
    {/* <label htmlFor="statusCheck" > Status </label> */}
    <input type="text" className="form-control" name="statusCheck" id="statusCheck" placeholder="Status" value={userData.statusCheck}  onChange={handleUser} />
  </div>
</form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="Submit" className="btn btn-primary" onClick={handleSubmit}>Save </button>
      </div>
    </div>
  </div>
</div>
<div className="container">
<form onSubmit={handleEditFormSubmit}>
<div className="card">
  <div className="card-body">
    <div className="row">
      <div className="col-md-12 d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#add">ADD</button>
      </div>
    </div>
<table className="table table-success table-striped">
<thead>
    <tr>
      <th sccope="col">Name</th>
      <th scope="col">CourseId</th>
      <th scope="col">TestId</th>
      <th scope="col">Course</th>
      <th scope="col">Status</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
                 <tbody>
         {userList.map((user)=>
         {
          //  console.log(editTestId);
          return(
                    <Fragment>
                        { editTestId===user.tid ? (
                        <EditableRow
                        editFormData = {editFormData}
                        handleEditFormChange ={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                        ></EditableRow>
                        ):
                          (   <ReadOnlyRow 
                            user={user}
                            handleEditClick={handleEditClick}
                            ></ReadOnlyRow>
                        )}
                    </Fragment>
                )}
              )
              
            }
              </tbody>
              </table>
              </div>
</div>
</form>
</div>
</>
    )
}
export default EnrollForm;
