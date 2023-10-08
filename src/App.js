import Category from './Components/category.js';
import { Container } from 'react-bootstrap';
import Header from './Components/Header.js';
import ItemList from './Components/ItemList.js';
import NavBar from './Components/NavBar.js';
import { items } from './data.js';
import { useState } from 'react';

function App() {

  const [itemsData , setItemsData] =useState(items)

  // get all categorys
  const allCategory = ['ALL' , ...new Set(items.map((i)=> i.category))]
  console.log(allCategory)
  
  // filter by category

  const filterbyCategory =(cat)=>{
    if (cat === 'ALL'){
      setItemsData(items)
    }
    else{
      const newArray = items.filter((item)=> item.category === cat)
      setItemsData(newArray)
    }
  }

  // filter by search
  const filterbySearch = (word)=>{
    if (word !== ""){
      const newArray = items.filter((item)=> item.title === word )
      setItemsData(newArray)
    }

  }
  return (
    <div className='color-body font'>
      <NavBar filterbySearch ={filterbySearch}/>
      <Container>
        <Header/>
        <Category filterbyCategory ={filterbyCategory} allCategory={allCategory}/>
        <ItemList itemsData ={itemsData}/>

        
      </Container>
    </div>
  );
}

export default App;
