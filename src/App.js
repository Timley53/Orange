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

//components
import Expenses from './components/Pages/Expenses/Expenses';
import Home from './components/Pages/Home/Home';
import Saving from './components/Pages/Savings/Saving';
import IncomeSavings from './components/Pages/Income-savings/IncomeSavings'
import ExpHistory from './components/Pages/Expenses/HistoryLayouts/ExpHistory';
import CategoryGrids from './components/Pages/Expenses/CategoryGrids';
import AddNew from './components/Pages/Expenses/AddNew/AddNew';
import Income from './components/Pages/Income/Income';
import IncomeHome from './components/Pages/Income/IncomeHome';
import IncomeForm from './components/Pages/Income/IncomeForm';
import MainSavings from './components/Pages/Income-savings/Saving/MainSavings';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/'  element={<AppLayout/>}>

        <Route index element={<SignIn/>}/>


        <Route path='/dashboard' element={<Dashboard/>}>

    {/*  dashboard home routes */}
    <Route index element={<Home/>}/>

    {/*  expenses routes */}
    <Route path='expenses' element={<Expenses/>}> 
    <Route index element ={<ExpHistory/>}/>
    <Route path='categories' element ={<CategoryGrids/>}/>
    <Route path='addnew' element ={<AddNew/>}/>

  
    </Route>

    {/* income routes */}

    <Route path='income' element={<Income/>}>

    <Route index element ={<IncomeHome/>}/>
    <Route path='addnew' element ={<IncomeForm/>}/>

    </Route>


    <Route path='savings' element={<MainSavings/>}>

    </Route>

      </Route>//dashboard

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
