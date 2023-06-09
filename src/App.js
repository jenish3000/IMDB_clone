import React, { useState } from 'react';
// import { ReactDOM } from 'react-dom';
import './App.css';
import axios from 'axios';
import Card from './Card';
import data from './data'
// import { useEffect } from 'react';
// const options = {
//   method: 'GET',
//   url: 'https://imdb-top-100-movies.p.rapidapi.com/',
//   headers: {
//     'X-RapidAPI-Key': 'e832471d61msh94b2a0b97482104p1cfbbcjsn654846d86297',
//     'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
//   }
// };
function App() {
  // const [movies,setMovies]=useState([])
  // useEffect( ()=>{
  //   const fetchData = async () => {
  //     const response = await axios.request(options);
  //     console.log(response.data)
  //     // setMovies(response.data);
  //   };

  //   fetchData();
  // })
  return (
    <>
      <h1 className='heading1'>TOP 10 WEB-SERIES OF NETFLIX</h1>
      <div className='container'>
      {data.map((value)=>{
        return(
          <>
          <Card title={value.title}
        link={value.link}
        name={value.Name}
        date={value.date}
        redirect={value.redirect}
      />
          </>
        );
      })}
 
      </div>
    </>
  );
}

export default App;

{/* <ul>
  <li>The sum of 2 number {sum(10,20)}</li>
  <li>The substraction of 2 number {sub(10,20)}</li>
  <li>The multiplication of 2 number {mul(10,20)}</li>
  <li>The division of 2 number {div(10,20)}</li>
</ul> */}

{/* <Card title="Netflix Original Series"
  link="./wednesday.jpeg"
  name="Wednesday"
  date="Nov 23"
/> */}