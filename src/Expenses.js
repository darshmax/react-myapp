import ExpenseDate from './ExpenseDate';
import './Expenses.css'

const Expenses = (props) => {


  return (
    <div className="expense-item">
      <ExpenseDate/>
      <div className="expense-item__description">{props.title}</div>
      <div className="expense-item__price">{props.amount}</div>
    </div>
  );
};

export default Expenses;
