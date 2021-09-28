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
        <PopupButton />
      </div>
      <div>
        <PopupExample />
      </div>
    </div>
  );
}

const PopupButton = () => (
  <a href="#">
    <img className="plus" src={plus} alt=''>
    </img>
  </a>
)

const PopupExample = () => (
  <Popup trigger={PopupButton} position="left center">
  {close => (
    <div className="popup">
      popup!
      <a className="close" onClick={close}>
      &times;
      </a>
    </div>
  )}
</Popup>
);

export default App;
