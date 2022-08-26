import { observer } from 'mobx-react';
import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import ReactPaginate from 'react-paginate';
import '../styles/styles.css'
import CarModelCard from '../components/CarModelCard';
import { Container } from 'react-bootstrap';
import NewCarButton from '../components/NewCarButton';

export default observer(function Main({carModelStore,carMakeStore}) {

  
  
  useEffect(()=> {
      carModelStore.loadCars()
  },[carModelStore,carModelStore.currentPage,carModelStore.searchQuery,carModelStore.sortValue]) 

  return (
    <>
    <div style={{width:"100vw",height:"100vh",position:"relative",owerflowX:"hidden"}} className='bg-light'>
        <Navbar carModelStore={carModelStore}/>
        <Container className='mt-2 d-flex justify-content-center flex-column'>
            {
                carModelStore.cars.length > 0 ? carModelStore.cars.map(car=>{
                    const make = carMakeStore.getMake(car.carMakeId)
                    return <CarModelCard key={car.id} car={car} make={make} carModelStore={carModelStore} carMakeStore={carMakeStore}/>
                })
                :
                <div style={{textAlign:"center"}}>
                  Nothing found...
                </div>
            }
            {
              carModelStore.cars ?
                carModelStore.currentPage === carModelStore.pageCount || carModelStore.cars.length === 0 ? <NewCarButton/> : null
              :
                null
            }
        </Container>
        <ReactPaginate
        breakLabel="..."
        containerClassName="react-paginate-container"
        nextClassName="next"
        previousClassName="prev"
        pageClassName="page-item bg-white"
        activeClassName="text-primary bg-white border border-primary"
        pageLinkClassName="link"
        onPageChange={(e)=>carModelStore.currentPage = e.selected + 1}
        pageRangeDisplayed={8}
        pageCount={carModelStore.pageCount}
        renderOnZeroPageCount={null}
      />
    </div>
    
    </>
  )
})