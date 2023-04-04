import logo from './logo.svg';
import './App.css';
import FuncProps from './Components/Props/FuncProps';
import ClassProps from './Components/Props/ClassProps';
import ProfileClass from './Components/Example/ProfileClass';

function App() {

  function parentFunc(child){
    alert(child)
  }

  return (
    <div className="App">
      <FuncProps name="Bala" work="Driver" func1={parentFunc}/>
      <ClassProps name="Krish" work="Teacher" func1={parentFunc}/>

      {/* <ProfileClass /> */}

    </div>
  );
}

export default App;
