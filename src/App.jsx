import './App.css'
import Expenses from './components/Expenses/Expenses'

const App = () => {

  const expenses = [
    {
      id: 'e1',
      date: new Date(2026, 0, 9),
      title: 'New book',
      price: 30.99
    },
    {
    id: 'e2',
    date: new Date(2026, 0, 9),
    title: 'New jeans',
    price: 90.99
  }
  ]

  return (
    <div className="App">
      <Expenses expenses={expenses} />
    </div>
  )
}


export default App
