import ExpenseItem from './Expenseltem'
import Card from './card'
import './expenses.css'

const Expenses = (props) => {
	console.log(props)

	return (
		<Card className="expenses">
			{props.expenses.map((expense, index) => (
				<ExpenseItem key={index} data={expense} />
			))}
		</Card>
	)
}

export default Expenses

