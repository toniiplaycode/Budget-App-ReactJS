import { useState } from "react";

const EditBudget = ({budget, handleSaveEdit}) => {
    const [inputBudget, setInputBudget] = useState(budget);

    return(
        <div className="d-flex align-items-center justify-content-between">
            <input type="number" className="form-control me-2" value={inputBudget} onChange={(e)=>setInputBudget(e.target.value)}/>
            <button className="btn btn-primary" onClick={()=>handleSaveEdit(inputBudget)}>Save</button>
        </div>
    )
}

export default EditBudget;  