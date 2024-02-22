import React from 'react'
import './App.css';
import Header from './Components/Header/Header'
import Sidebar from './Components/SideBar/Sidebar'
import Body from './Components/BodyComponent/Body'

function App() {
  return (
    <>
    <div>
      <Header/>
      </div>
      <div className='flex'>
      <Sidebar/>
      <Body/>
      </div>
      </>
  )
}

export default App