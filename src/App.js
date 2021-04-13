import './App.css';
import './Stopwatch'
import Stopwatch from './Stopwatch';
import Timer from './Timer';
import Nav from './components/Nav';
import { Fragment, useState, useEffect } from 'react';
import wrapper from './Wrapper'

function App() {
  const initialState = {
    'countdown': 'none',
    'stopwatch': 'none'
  };
  const [display, setDisplay] = useState({...initialState, 'stopwatch': 'block'});

  const navigate = (target) => {
    const changedDisplay = initialState;
    console.debug(target);
    changedDisplay[target] = 'block';
    setDisplay(changedDisplay);
  }

  return (
    <Fragment>
      <Nav onSelect={navigate} />
      <div className='timer-container'>
        { wrapper(<Timer />, display.countdown) }
        { wrapper(<Stopwatch />, display.stopwatch) }
      </div>
    </Fragment>
  );
}

export default App;
