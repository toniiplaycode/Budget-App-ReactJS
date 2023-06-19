import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import {v4 as uuidv4}  from 'uuid';

const AddExpense = () => {
    const [name, setName] = useState('');  
    const [cost, setCost] = useState('');  

    const {dispath, budget, expenses} = useContext(AppContext);

    const maxCostAdd = budget - expenses.reduce((total, expense) => {
        return total += expense.cost;
    }, 0);

    const handleAddExpense = (event) => {
		event.preventDefault();
        const expense = {
            id: uuidv4(),
            name,
            cost: parseInt(cost)
        }

        dispath({
            type: "ADD_EXPENSE",
            payload: expense
        });

        setName('');
        setCost('');
    }

    return (
        <form onSubmit={handleAddExpense}>
            <div className="row">
                <div className="col-md-6">
                    <label className="mb-1">Name</label>
                    <input required='required' value={name} className="form-control"  onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="col-md-6">
                    <label className="mb-1">Cost</label>
                    <input required='required' value={cost} className="form-control" max={maxCostAdd} type="number" onChange={(e)=>setCost(e.target.value)}/>
                </div>
            </div>
            <button className="btn btn-primary mt-3 mb-5" type="submit">Save</button>
        </form>
    )
}

export default AddExpense;