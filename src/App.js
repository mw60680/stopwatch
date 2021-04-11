import './App.css';
import './Stopwatch'
import Stopwatch from './Stopwatch';
import Timer from './Timer';

function App() {
  return (
    <div className='timer-container'>
      <Timer />
      <Stopwatch />
    </div>
  );
}

export default App;
