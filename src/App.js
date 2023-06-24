import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import SignIn from './components/signIn/SignIn';
import { useState } from 'react';
import TestLogin from './components/signIn/TestLogin';
import TestSignUp from './components/signIn/TestSignUp';
import { Route,Routes, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import PrivateRoute from './components/signIn/PrivateRoute';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<AppLayout/>}>

        <Route index element={<SignIn/>}/>


        <Route path='/dashboard' element={ <PrivateRoute>
          <Dashboard/>
        </PrivateRoute>}/>



        

      </Route>
  )
)

function App() {
  // const [signIn, setSignIn] = useState(true)
  
  // // console.log(signIn);

  // const signInProps = {
  //   signIn,
  //   setSignIn
  // }

  return (
    // <div className="App">
      
   
    <RouterProvider router={router}/>
    
    // </div>
    );
  }
  
  {/* {!signIn && <Dashboard/>}
    {signIn && <SignIn {...signInProps} />} */}
export default App;
