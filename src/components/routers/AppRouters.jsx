import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../lyaout/Home'
import RouterLyaout from './RouterLyaout'

function AppRouters() {
  return (
    <div>
    <Router>
        <Routes>
            <Route path='/' element={<RouterLyaout/>}>
                <Route index element={<Home/>} />
                {/* <Route path='/' element={<Header/>} /> */}
            </Route>
        </Routes>
    </Router>
    </div>
  )
}

export default AppRouters