import logo from './logo.svg';
import './App.css';
import FuncProps from './Components/Props/FuncProps';
import ClassProps from './Components/Props/ClassProps';
import ProfileClass from './Components/Example/ProfileClass';
import ClassRef from './Components/Ref/ClassRef';
import FuncRef from './Components/Ref/FuncRef';
import { useRef } from 'react'
import Func2Ref from './Components/Ref/Func2Ref';
import ClassCLifecycle from './Components/Lifecycle/ClassCLifecycle';

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
      <Func2Ref ref={child2} name="Raj"/>

      <button onClick={() => child1.current.childFunc()}>child1</button>
      <button onClick={() => child2.current.child2Func()}>Func2 Child</button>

      <ClassCLifecycle />
    </div>
  );
}

export default App;
