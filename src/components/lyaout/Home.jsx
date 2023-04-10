import React from 'react'
import Carusle from './Carusle'
import API from './API'
import YearSelect from './YearSelect'

function Home() {
  return (
    <div>
        <Carusle/>
        <YearSelect/>
        <API/>
    </div>
  )
}

export default Home