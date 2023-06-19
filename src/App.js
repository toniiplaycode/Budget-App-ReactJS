import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import Spent from './components/Spent';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';
import { AppProvider } from './context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h2 className="mt-3 text-center">MY BUDGET PLANNER</h2>
        <div className="row mt-3">
          <div className='col-md'>
            <Budget />
          </div>
          <div className='col-md'>
            <Remaining />
          </div>
          <div className='col-md'>
            <Spent />
          </div>
        </div>
        <h3 className='py-1'>Expenses</h3>
        <ExpenseList />
        <h3 className='py-1'>Add Expense</h3>
        <AddExpense />
      </div>
    </AppProvider>
  );
}

export default App; 