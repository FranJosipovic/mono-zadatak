import React from 'react'
import { Navbar } from 'react-bootstrap'
import SearchBar from './SearchBar'
import SortComponent from './SortComponent'
import { observer } from 'mobx-react'

export default observer(function ({carModelStore}) {

  return (
    <Navbar className='bg-primary' style={{position:"relative"}}>
        <Navbar.Brand className='text-white' style={{marginLeft:"10px"}}>
          <h1 style={{margin:"0"}}>CARS</h1> 
        </Navbar.Brand>
        <SortComponent carModelStore={carModelStore} />
        <SearchBar carModelStore={carModelStore} />
    </Navbar>
  )
})
