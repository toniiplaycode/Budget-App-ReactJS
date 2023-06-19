const ViewBudget = ({budget, handleEditClick}) => {
    return(
        <div className="d-flex align-items-center justify-content-between">
            <span>
                Budget: {budget.toLocaleString('vi', {style : 'currency', currency : 'VND'})}
            </span>
            <button className="btn btn-success" onClick={handleEditClick}>Edit</button>
        </div>
    )
}

export default ViewBudget;