
import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './page/Login'
import ProctecdRoute from './components/ProtectedRoute'
import AdminDashbord from './page/AdminDashbord'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/login" element={<ProctecdRoute isAuth={isAuth}>
          <AdminDashbord/>
        </ProctecdRoute>}/>
        
      </Routes>


      </BrowserRouter>
    </div>
  )
}

export default App
