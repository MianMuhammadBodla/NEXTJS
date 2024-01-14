import React from 'react'


const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
  { title: 'orange', id: 4 },
  { title: 'banana', id: 5 },
  { title: 'watermelon', id: 6 },
  
];
function Renderinglist ()  {
  return (
    <div className='flex flex-col gap-5 p-2 '>Rendering lists

      never use for loop within html 
      <p>Always use Map Funtion </p>
      <div >Manually  </div>
      <div className='flex flex-col gap-3'>
<p>{products[0].title}</p>
<p> {products[1].title}</p>
<p>  {products[2].title}</p></div>
   

    <div>Map Function</div>
   <ul>
  {products.map((product, index )=>{
    return(<li key={index}>{product.title}</li>)
  }
  )}

   </ul>

    </div>
  )
}

export default Renderinglist;