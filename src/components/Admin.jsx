import React from 'react'

const Admin = () => {
  return (
    <div className=''>
      <div className='p-2'>
      <label htmlFor="">Name</label>
      <input type="text" />
      <label htmlFor="">Email</label>
      <input type="email" />
      <label htmlFor="">Password</label>
      <input type="password" />
      <label htmlFor="">Confirm Password</label>
      <input type="password" />
      </div>
    </div>
  )
}

export default Admin;