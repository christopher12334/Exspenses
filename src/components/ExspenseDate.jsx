const ExpenseDate = (props) => {

   const day = props.date.toLocaleString('en-EU', {day: '2-digit'})
   const month = props.date.toLocaleString('en-EU', {month: 'long'})
   const year = props.date.getFullYear()
   
   return(
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>
        </div>
    )
}


export default ExpenseDate