import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const Remaining = () => {
    const {expenses, budget} = useContext(AppContext);
    const remaining = budget - expenses.reduce((total, expense) => {
        return total += expense.cost;
    }, 0);

    return(
        <div className="bg-info-subtle p-4 mt-1" style={{borderRadius: "5px", height: "80px"}}>Remaining: {remaining.toLocaleString('vi', {style : 'currency', currency : 'VND'})}
        </div>
    )
}

export default Remaining;