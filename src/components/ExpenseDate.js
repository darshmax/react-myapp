import '../CSS/ExpenseDate.css'

const ExpenseDate = (props) => {

    
    return (
        <div>{props.date.toISOString()}</div>
    )
}

export default ExpenseDate