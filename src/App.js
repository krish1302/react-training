import logo from './logo.svg';
import './App.css';
import FuncProps from './Components/Props/FuncProps';
import ClassProps from './Components/Props/ClassProps';
import ProfileClass from './Components/Example/ProfileClass';
import ClassRef from './Components/Ref/ClassRef';
import FuncRef from './Components/Ref/FuncRef';
import { useRef } from 'react'

function App() {

  const child1 = useRef()
  const child2 = useRef()

  function parentFunc(child){
    alert(child)
  }

  return (
    <div className="App">
      {/* <FuncProps name="Bala" work="Driver" func1={parentFunc}/>
      <ClassProps name="Krish" work="Teacher" func1={parentFunc}/> */}

      {/* <ProfileClass /> */}

      <ClassRef ref={child1} name="Bala"/>
      <FuncRef ref={child2} name="krish"/>

      <button onClick={() => child1.current.childFunc()}>child1</button>
      <button onClick={() => child2.current.childFunc()}>child2</button>
    </div>
  );
}

export default App;
