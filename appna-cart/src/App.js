import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/ProductList.js'
import React, { useState } from 'react';


function App() {
  const products =[
    {
      price:99999,
      name: "Iphone 10s Max",
      quantity:0,
    },
    {
      price:9999,
      name: "Redmi Note 10s Max",
      quantity:0,
    },
    {
      price:188900,
      name: "Iphone 15s Max",
      quantity:0,
    },
  ]
  let [productList, setProductlist] = useState(products);

        const incrementQuantity = (index) => {
            let newProductList = [...productList]
            newProductList[index].quantity++
            setProductlist(newProductList)
          };
        const decrementQuantity = (index) => {
            let newProductList = [...productList]
            newProductList[index].quantity > 0 ? newProductList[index].quantity-- : (newProductList[index].quantity = 0) ;
            setProductlist(newProductList)
          };

 return (
    <>
      <Navbar/>
      <main className='container mt-5'>
      <ProductList productList = {productList} incrementQuantity ={incrementQuantity} decrementQuantity ={decrementQuantity}/>
      </main>
       {/* <Footer/>  */}
    </>
  );
}

export default App;
