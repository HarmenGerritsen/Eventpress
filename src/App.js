import plus from "./plus.png";
import Popup from 'reactjs-popup';
import './App.css';
import 'reactjs-popup/dist/index.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
          <p className="title">
          Eventpress
          </p>
          <Popup trigger={<a href="#"><img className="plus" src={plus} alt=''></img></a>} position="right center">
            <div classNam="popup">
              popup!
            </div>
          </Popup>
      </div>
    </div>
  );
}

export default App;
