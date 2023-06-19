import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import ViewBudget from "./ViewBudget";
import EditBudget from "./EditBudget";

const Budget = () =>  {
    const {budget, dispath} = useContext(AppContext);

    const [isEdit, setIsEdit] = useState(false);

	const handleEditClick = () => {
		setIsEdit(true);
	};

    const handleSaveEdit = (value) => {
        dispath({
            type: "EDIT_BUDGE",
            payload: parseInt(value)
        })
        setIsEdit(false);
    }

    return(
        <div className="bg-body-secondary p-4 mt-1" style={{borderRadius: "5px", height: "80px"}}>
            {isEdit ? 
            <EditBudget budget={budget} handleSaveEdit={handleSaveEdit}/>
            :
            <ViewBudget budget={budget} handleEditClick={handleEditClick}/>   
            }
        </div>
    )
}

export default Budget