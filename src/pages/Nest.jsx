import React from 'react'
import { Outlet } from 'react-router-dom'

const Nest = () => {
  return (
      <div>Nest
          <div>
              <Outlet />
          </div>
    </div>
  )
}

export default Nest