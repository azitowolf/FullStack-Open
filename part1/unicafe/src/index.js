import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const SingleStat = (props) => (
  <tr>
    <td>{props.text.toString()}</td> 
    <td>{props.value.toString()}</td>
  </tr>
)

const Statistics = (props) => {
  const {good, neutral, bad} = props.feedback;
  return(
    <table>
          <thead><tr><td>statistics</td></tr></thead>
      <tbody>
        <SingleStat text="good" value= {good} />
        <SingleStat text="neutral" value= {neutral} />
        <SingleStat text="bad" value= {bad} />
        <SingleStat text="all" value= {good+neutral+bad} />
        <SingleStat text="average" value= {(good*1 + neutral *0 + bad*-1)/3} />
        <SingleStat text="% positive" value= {good / good+ neutral + bad} />  
      </tbody>
    </table>
    )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics feedback = {{good:good, neutral:neutral, bad:bad}} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
