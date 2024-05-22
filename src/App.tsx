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
    <div>
      <button onClick={() => setResourceType('posts')}> Posts </button>
      <button onClick={() => setResourceType('users')}> Users </button>
      <button onClick={() => setResourceType('comments')}> Comments </button>
    </div>
    <h1>{resourceType}</h1>
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

  </>
  )
}

export default App

