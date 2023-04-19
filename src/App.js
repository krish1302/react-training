import logo from './logo.svg';
import * as React from 'react';
import './App.css';
import FuncProps from './Components/Props/FuncProps';
import ClassProps from './Components/Props/ClassProps';
import ProfileClass from './Components/Example/ProfileClass';
import ClassRef from './Components/Ref/ClassRef';
import FuncRef from './Components/Ref/FuncRef';
import { useRef, useState } from 'react'
import Func2Ref from './Components/Ref/Func2Ref';
import ClassCLifecycle from './Components/Lifecycle/ClassCLifecycle';
import ClassMountingLifeCycle from './Components/Lifecycle/ClassMountingLifeCycle';
import FuncLifecycle from './Components/Lifecycle/FuncLifecycle';
import ParentComponent from './Components/ContextClassComponet/ParentComponent';
import {NameContext, WorkContext} from './Components/Context/Context';
import ParentFuncContext from './Components/ContextFuncComponent/ParentFuncContext';
import Page1 from './App-components/Page1/Page1';
import Page2 from './App-components/Page2/Page2';
import { Route, Routes, Link, useNavigate, NavLink } from 'react-router-dom';
import RoutePage1 from './Router-Components/RoutePage1';
// import RoutePage2 from './Router-Components/RoutePage2';
import SubRouter1 from './Router-Components/sub-routers/SubRouter1';
import SubRouter2 from './Router-Components/sub-routers/SubRouter2';
import ErrorPage from './Router-Components/ErrorPage';
import Login from './Router-Components/Login';
import Home from './Router-Components/Home';
const RoutePage2 = React.lazy(() => import("./Router-Components/RoutePage2"))



function App() {

  const child1 = useRef()
  const child2 = useRef()
  const [mount, setMount] = useState(false)
  const [page, setPage] = useState('page1')
  const navigate = useNavigate()

  function parentFunc(child){
    alert(child)
  }

  function navigation(route){
    navigate(route)
  }

  return (
    <div className="App">
      {/* <FuncProps name="Bala" work="Driver" func1={parentFunc}/>
      <ClassProps name="Krish" work="Teacher" func1={parentFunc}/> */}

      {/* <ProfileClass /> */}

      {/* <ClassRef ref={child1} name="Bala"/>
      <Func2Ref ref={child2} name="Raj"/>

      <button onClick={() => child1.current.childFunc()}>child1</button>
      <button onClick={() => child2.current.child2Func()}>Func2 Child</button>


      <button onClick={()=> setMount(true)}>Mount</button>
      <button onClick={()=> setMount(false)}>UnMount</button>
      {
        mount && <ClassMountingLifeCycle first="bala"/>
      } */}


      {/* <FuncLifecycle /> */}
      {/* <NameContext.Provider value='krish'>
        <WorkContext.Provider value='student'>
          <ParentComponent />
          <ParentFuncContext />
        </WorkContext.Provider>
      </NameContext.Provider> */}
{/* 
      <button onClick={()=> setPage('page1')}>page1</button>
      <button onClick={()=> setPage('page2')}>page2</button> */}

      {/* {page === 'page1' && <Page1 setPage={setPage}/>}
      {page === 'page2' && <Page2 setPage={setPage}/>} */}
      <nav>
        <NavLink to="page1">Page1</NavLink>
        <NavLink to="page2">Page2</NavLink>
        <NavLink to="login">Login</NavLink>
      </nav>
     
      <Routes>
        <Route path='/' element={<RoutePage1 navigation={navigation}/>} ></Route>
        <Route path="page1" element={<RoutePage1 />} >
            <Route index element={<SubRouter1/>}></Route>
            <Route path='sub1' element={<SubRouter1/>} />
            <Route path='sub2' element={<SubRouter2/>} />
        </Route>
        <Route path="page2" element={
          <React.Suspense fallback={<>...</>}>
            <RoutePage2 />
          </React.Suspense>
        } ></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='user/:userName' element={<Home />}></Route>
        <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>

      {/* <button onClick={()=> navigate('/page2')}>go to page 2</button> */}

    </div>
  );
}

export default App;
