import './App.css';
import Slidbar from './component/Slidbar';
import Dashboard from './component/Dashboard';
import AddUser from './component/AddUser';
import { EditUser } from './component/EditUser';
import NestedExample from './component/NestedExample';
import Account from './component/nestedComponents/Account';
import Profile from './component/nestedComponents/Profile';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  let data = {
    earningsMonthly: "40,000",
    earningsYearly: "215,000",
    task: "50",
    pendingRequest: "18",
  }
  return (

    <div id='wrapper'>
      <BrowserRouter>
        <Slidbar />
        <Routes>
          
          <Route path='/dashboard' element={<Dashboard data={data} />} />
          <Route path='/add-user' element={<AddUser />} />
          <Route path='/edit-user/:id' element={<EditUser />} />
          <Route path='nested-example' element={<NestedExample />} >
            <Route path='account' element={<Account />} />  
            <Route path='profile' element={< Profile />} /> 
          </Route>

          <Route path='*' element={<Navigate to={'/dashboard'} />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
