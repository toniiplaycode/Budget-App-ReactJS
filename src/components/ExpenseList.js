
import { useContext, useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
    const {expenses, dispath} = useContext(AppContext);

    const handleDelete = (id) => {
        dispath({
            type: "DELETE_EXPENSE",
            payload: id
        })
    }

    let [searchExpenses, setSearchExpenses] = useState(expenses || []);
    let [search, setSearch] = useState('');

    useEffect(()=>{
        let newSearchExpenses = expenses.filter((expense) => {
            return expense.name.toLowerCase().includes(search);
        })

        setSearchExpenses(newSearchExpenses);
    }, [search])

    // khi expense bị xoá thì set lại
    useEffect(()=>{
        setSearchExpenses(expenses);
    }, [expenses])
    
    return(
        <>
            <input className="form-control" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Type to search..."/>
            <ul className="list-group my-3">
                {searchExpenses.length > 0
                ?
                    searchExpenses.map((expense) => {
                        return(
                            <li className="list-group-item" key={expense.id}>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        {expense.name}
                                    </div>
                                    <div>
                                        <span className="badge bg-primary mx-2">
                                            {expense.cost.toLocaleString('vi', {style : 'currency', currency : 'VND'})}
                                        </span>
                                        <AiOutlineDelete size={20} color="red" style={{cursor: 'pointer'}} onClick={()=>handleDelete(expense.id)}/>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                :
                    <h4 style={{color:  'red'}}>No expense !</h4>
                }
            </ul>
        </>
    )   
}

export default ExpenseList;