import './App.css'
import ExpenseItem from './components/Expenseltem'

const App = () => {

  const expenses = [
    {
      date: new Date(2026, 0, 9),
      title: 'New book',
      price: 30.99
    },
    {
    date: new Date(2026, 0, 9),
    title: 'New jeans',
    price: 90.99
  }
  ]

  return (
    <div className="App">
      <ExpenseItem data={expenses[0]}/>
      <ExpenseItem data={expenses[1]}/>
    </div>
  )
}


export default App
