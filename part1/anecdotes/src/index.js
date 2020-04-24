import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// End Imports

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [crowdFavorite, setCrowdFavorite] = useState(null); 
  const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0}); 
 
  const findCrowdFavorite = (pointsArray) => {
    return Object.keys(pointsArray).reduce(function(a, b){ return pointsArray[a] > pointsArray[b] ? a : b });
  }

  const onClickRandom = () => {
    const selectRandom = () => {
      let randomSelection = Math.floor(Math.random() * Math.floor(6));
      if (randomSelection != selected) {
        return setSelected(randomSelection);
      } else {
        selectRandom();
      }
    }
    selectRandom();
  }

  const onClickVote = () => {
    let copy = { ...points };
    copy[selected] += 1;
    let newFave = findCrowdFavorite(copy);
    setPoints(copy);
    setCrowdFavorite(newFave)
  }

  const crowdFavoriteJSX = () => {
    
    return crowdFavorite 
      ? 
        <>
          <div>{props.anecdotes[crowdFavorite]}</div>
          <div>has {points[crowdFavorite]} votes</div>
        </>
      : 
        <div>
          Sorry, no Favorite Selected. Vote to help choose!
        </div>
  }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <div>has {points[selected]} votes</div>
      <div>
      <Button handleClick={() => onClickRandom()} text="generate" />
      <Button handleClick={() => onClickVote()} text="vote" />
      </div>

      <div>
        <h1>Crowd Favorite</h1>
        {crowdFavoriteJSX()}
      </div>
      <div>
        {JSON.stringify(points)}
        {JSON.stringify(selected)}
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
