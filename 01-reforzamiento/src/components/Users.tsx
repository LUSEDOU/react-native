import { useEffect } from 'react';
import { reqResApi } from '../api/reqres';

export const Users = () => {

  useEffect(() => {
    reqResApi.get('/users')
      .then( resp => {
        console.log(resp.data.data);
      })
      .catch( console.log );
  }, [])


  return (
    <>
      <h3>Users</h3>
      <table className='table'>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Email</th>
            <th>id</th>
          </tr>
        </thead>
      </table>
    </>
  )
}
