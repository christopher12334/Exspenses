import ExpenseItem from './Expenseltem.jsx'
import Card from './Card.jsx'
import './Expenses.css'

function Expenses(props){
    const expenses = props.expenses ?? []
    return (
        <Card className='expenses'>
            {expenses.map((expense) => (
            <ExpenseItem key={expense.id} data={expense} />
            ))}
        </Card>
    )
}

export default Expenses;

