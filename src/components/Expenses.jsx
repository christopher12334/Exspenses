import ExpenseItem from './Expenseltem'
import './expenses.css'

const Expenses = (props) => {
	console.log(props)

	return (
		<div className="expenses">
			{props.expenses.map((expense, index) => (
				<ExpenseItem key={index} data={expense} />
			))}
		</div>
	)
}

export default Expenses

