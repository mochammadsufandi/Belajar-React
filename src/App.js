import './App.css';
import {useState} from 'react';
import {logicBoard} from './logic';


function CreateSquare({index,array,setArray}) {
  function clickHandler () {
    const winner = logicBoard.calculateWinner(array);
    const nextValue = logicBoard.nextValueSquare(array);
    const nextArray = array.slice();

    if(array[index]) return
    if(winner) return
    nextArray[index] = nextValue;
    setArray(nextArray);
    console.log(nextValue);
  }
  return (
    <button className='game-btn' onClick={() => {clickHandler()}}>
      {array[index]}
    </button>
  )
}

function RestartGame({array,setArray}) {
  return (
    <div>
      <button onClick={()=>{setArray(Array(9).fill(null))}}>
        RESET
      </button>
    </div>
  )
}

function Board() {
  const[array,setArray] = useState(Array(9).fill(null));
  const winner = logicBoard.calculateWinner(array);
  const nextValue = logicBoard.nextValueSquare(array);

  return (
    <div className='Board'>
      <div className='game-status'>{logicBoard.gameStatus(winner,array,nextValue)}</div>
      <div>
        <CreateSquare index={0} array={array} setArray={setArray}/>
        <CreateSquare index={1} array={array} setArray={setArray}/>
        <CreateSquare index={2} array={array} setArray={setArray}/>
      </div>
      <div>
        <CreateSquare index={3} array={array} setArray={setArray}/>
        <CreateSquare index={4} array={array} setArray={setArray}/>
        <CreateSquare index={5} array={array} setArray={setArray}/>
      </div>
      <div>
        <CreateSquare index={6} array={array} setArray={setArray}/>
        <CreateSquare index={7} array={array} setArray={setArray}/>
        <CreateSquare index={8} array={array} setArray={setArray}/>
      </div>
      <RestartGame array={array} setArray={setArray}/>
    </div>
  );
}



function ButtonCounter ({countHandler,typeOperator}) {
  return (
    <div>
      <button onClick={countHandler}>{typeOperator}</button>
    </div>
  )
}


function App() {
  const [number,setNumber] = useState(0);
  function countHandler (typeOperator) {
    if(typeOperator === 'plus'){
      setNumber(number+1);
    } else if(typeOperator === 'minus') {
      if(number<=0) return
      setNumber(number-1);
    }
    
 }

  return (
    <div className="App">
      <h1>START</h1>
      <ButtonCounter countHandler={()=>{countHandler('plus')}} typeOperator={'plus'}/>
      <p>{number}</p>
      <ButtonCounter countHandler={()=>{countHandler('minus')}} typeOperator={'minus'}/>
      <div>
        <Board></Board>
      </div>
    </div>
    
  );
}

export default App;
