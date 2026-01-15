import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

const ExpenseItem = (props) => {

   return(
        <div className="expense-item">
            <ExpenseDate date={props.data.date}/>
            <h2 className="expense-item__title">{props.data.title}</h2>
            <div className='expense-item__price'>{props.data.price}</div>
        </div>
    )
}


export default ExpenseItem