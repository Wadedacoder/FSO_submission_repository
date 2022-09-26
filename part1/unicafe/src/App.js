import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [history, setHistory] = useState([])

  const handleGoodClick = () => {
    setGood(good + 1)
    setHistory(history.concat('G'))
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setHistory(history.concat('B'))
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setHistory(history.concat('N'))
  }

  return (
    <div>
      <button onClick= { handleGoodClick } > good
      </button>
      <button onClick= { handleNeutralClick } > neutral
      </button>
      <button onClick= { handleBadClick } > bad
      </button>
      <h1>statistics</h1>
      <p>Good: {good} </p>
      <p>Neutral: {neutral} </p>
      <p>Bad: {bad} </p>
      <p>history: {history.reverse()} </p>
    </div>
  )
}

export default App