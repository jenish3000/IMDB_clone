// import React, { useState,useEffect } from 'react';
// // import { ReactDOM } from 'react-dom';
// import './App.css';
// import axios from 'axios';
// import Card from './Card';
// import data from './data'
// // import { useEffect } from 'react';
// // const options = {
// //   method: 'GET',
// //   url: 'https://imdb-top-100-movies.p.rapidapi.com/',
// //   headers: {
// //     'X-RapidAPI-Key': 'e832471d61msh94b2a0b97482104p1cfbbcjsn654846d86297',
// //     'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
// //   }
// // };
// const App=()=>{
//   // const [movies,setMovies]=useState([])
//   // useEffect( ()=>{
//   //   const fetchData = async () => {
//   //     const response = await axios.request(options);
//   //     console.log(response.data)
//   //     // setMovies(response.data);
//   //   };

//   //   fetchData();
//   // })
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Replace YOUR_API_ENDPOINT with the actual API endpoint from the provider
//     const apiUrl = `af48745271650363de351eae641f792a`;

//     fetch(apiUrl)
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.error('Error fetching data:', error));

//     console.log("hi"+data);
//   },[]);

//   return (
//     <>
//       <h1 className='heading1'>TOP 10 WEB-SERIES OF NETFLIX</h1>
//       <div className='container'>
//       {/* {data.map((value)=>{
//         return(
//           <>
//           <Card title={value.title}
//         link={value.link}
//         name={value.Name}
//         date={value.date}
//         redirect={value.redirect}
//       />
//           </>
//         );
//       })} */}
 
//       </div>
//     </>
//   );
// }

// export default App;

// {/* <ul>
//   <li>The sum of 2 number {sum(10,20)}</li>
//   <li>The substraction of 2 number {sub(10,20)}</li>
//   <li>The multiplication of 2 number {mul(10,20)}</li>
//   <li>The division of 2 number {div(10,20)}</li>
// </ul> */}

// {/* <Card title="Netflix Original Series"
//   link="./wednesday.jpeg"
//   name="Wednesday"
//   date="Nov 23"
// /> */}



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import "./App.css"
const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace YOUR_API_KEY with your actual TMDb API key
    const apiKey = 'af48745271650363de351eae641f792a';
    const apiUrl = `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`;

    axios.get(apiUrl)
      .then(response => {
        setData(response.data.results);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <h1 className='heading1'>TOP 10 TRENDING MOVIES & SERIES</h1>
      <div className='container'>
        {data.map((value) => (
          <Card
            key={value.id} // Make sure to provide a unique key for each card
            title={value.title || value.name}
            link={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
            date={value.release_date || value.first_air_date}
            redirect={value.media_type === 'tv' ? '/tv' : '/movie'} // Assuming you have different routes for movies and TV shows
          />
        ))} 
      </div>
    </>
  );
}

export default App;
