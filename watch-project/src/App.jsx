import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Index from './Components/Body/Index'
import AdminHome from './Components/Admin/AdminHome/AdminHome'
import Adminlogin from './Components/Admin/Adminlogin/Adminlogin'
import Adminregister from './Components/Admin/Adminregister/Adminregister'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        
      <Route path='/' Component={Index}/>
      <Route path='/Adminhome' Component={AdminHome}/>
      <Route path='/Adminlogin' Component={Adminlogin}/>
      <Route path='/Adminregister' Component={Adminregister}/>

      </Routes>
      
      </BrowserRouter>

    </>
  )
}

export default App
