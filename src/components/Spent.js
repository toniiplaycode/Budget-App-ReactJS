import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Spent = () =>  {
    
    const {expenses} = useContext(AppContext);
    const spent = expenses.reduce((total, expense) => {
        return total += expense.cost;
    }, 0);
    
    return(
        <div className="bg-primary-subtle p-4 mt-1" style={{borderRadius: "5px", height: "80px"}}>
            Spent: {spent.toLocaleString('vi', {style : 'currency', currency : 'VND'})}
        </div>
    )
}

export default Spent;