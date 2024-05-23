import React from 'react'
import { useEffect, useState } from 'react';
import Card from './Card';
import Button from './Button';


export default function PageUseEffect() {
     const [resourceType, setResourceType] = useState<string>('posts')
     const [items, setItems] = useState([])

     useEffect(() => {
          fetchAPI();

     }, [resourceType])

     async function fetchAPI() {
          let url = `https://jsonplaceholder.typicode.com/${resourceType}`;
          try {
               const asyncResponse = await fetch(url)
               const response = await asyncResponse.json()
               setItems(response)
          } catch (e) {
               console.log("error")
               console.log(e)
          }
     }
     return (
          <div>
               <div className='buttons-container'>
                    <Button onClick={() => setResourceType('posts')}>Posts</Button> 
                    <Button onClick={() => setResourceType('posts')}>Posts</Button>
                    <Button onClick={() => setResourceType('posts')}>Posts</Button>
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
          </div>
     )
}
