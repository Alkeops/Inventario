import React from 'react'
import {Navbar} from './components'

const UserLayout = ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default UserLayout
