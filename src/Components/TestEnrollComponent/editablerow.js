import React from "react";

const EditableRow=({editFormData,handleEditFormChange,handleEditFormSubmit,handleCancelClick})=>
{
    return(
        
      <tr>
          <td>
          <input type="text" className="form-control" required="required" name="Name"
                     value={editFormData.Name} onChange={handleEditFormChange} />
                     </td>

          <td>
          <input type="text" className="form-control" required="required" name="course_id"
                     value={editFormData.course_id} onChange={handleEditFormChange} />
                    </td>

          <td>
          <input type="text" className="form-control" required="required" name="test_id"
                      value={editFormData.test_id} onChange={handleEditFormChange}/>
                    </td>
          <td>
          <input type="text" className="form-control" required="required" name="courseType"
                  value={editFormData.courseType} onChange={handleEditFormChange}/>
                 </td>
          <td>
          <input type="text" className="form-control" required="required" name="statusCheck"
                  value={editFormData.statusCheck} onChange={handleEditFormChange}/>
                 </td>

        
      <td>
        <button type="button" className="btn btn-secondary" onClick={handleCancelClick}>Cancel</button>
        <button type="Submit" className="btn btn-primary" onSubmit={handleEditFormSubmit} >Save</button>
        </td>
</tr>
    )
}
export default EditableRow;