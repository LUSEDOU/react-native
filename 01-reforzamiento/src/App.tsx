import React from 'react'
import { Users } from './components/Users';
// import { Login } from './components/Login';

export const App = () => {
  return (
    <div className='mt-2'>
      <h1>TypeScript Introduction</h1>
      <hr/>
      {/* <Login/> */}
      <Users/>
    </div>
  )
}
export default App;
