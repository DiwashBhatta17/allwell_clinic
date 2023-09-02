import React from 'react'
import UserNavbar from './UserNavbar'
import News from '../../components/forAll/News'
import UserFooter from './UserFooter'

function UserNews() {
  return (
    <div>
        <UserNavbar/>
        <News/>
        <UserFooter/>
      
    </div>
  )
}

export default UserNews
