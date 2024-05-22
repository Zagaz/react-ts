import React from 'react'
import Navbar from './components/Navbar'
// import Hero from './components/Hero'
import Card from './components/Card'

import { useEffect, useState } from 'react'

function App() {

  const [resourceType, setResourceType] = useState<string>('posts')
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourceType])


  return (<>
    <Navbar />
    <div className='buttons-container'>
      <button onClick={() => setResourceType('posts')}> Posts </button>
      <button onClick={() => setResourceType('users')}> Users </button>
      <button onClick={() => setResourceType('comments')}> Comments </button>
    </div>
    <div className='page-title'>
    <h1>{resourceType}</h1>
    </div>
    <div className='card-container'>
    {
      resourceType === 'posts' && items.map((item: any) => {
        return (
          <>
             
          <Card key={item.id} title={item.title} body={item.body} 
          />
          </>


        )
      }
      )}

      {
      resourceType === 'users' && items.map((item: any) => {
        return (
          <>
    
          <Card key={item.id} name={item.name} mail={item.email}
          />
          </>
        )
      }
      )}

      {
      resourceType === 'comments' && items.map((item: any) => {
        return (
          <>
    
          <Card key={item.id} name={item.name} mail={item.email}
          />
          </>
        )
      }
      )
      }
      </div>


  </>
  )
}

export default App

