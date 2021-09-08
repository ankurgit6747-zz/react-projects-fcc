import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
import axios from 'axios'
const url = 'https://course-api.com/react-tours-project'

function App() {

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id)
    console.log('clicked not interested');
    setTours(newTour)
  }

  const fetchTour = async () => {
    setLoading(true)
    try {
      const tourData = await axios.get(url)
      const data = tourData.data
      setLoading(false)
      setTours(data)
      console.log(data);
      
    } catch (error) {
      setLoading(false)
      console.log(error);
    }

  }

  useEffect(() => {
    fetchTour()
  }, [])

  if(loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if(tours.length === 0 ){
    return (
      <div className='title'>
        <h2>No tour left</h2>
        <button className='btn' onClick={fetchTour} >Refresh</button>
      </div>
    )
  }

  return <>
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  </>
}

export default App
