import {useState,useEffect} from 'react'
import './App.css';

function App() {
  const [countries,setCounties] = useState([])

  useEffect(()=>{
    fetch("https://restcountries.com/v2/all")
    .then(res=>res.json())
    .then(data=>{
      setCounties(data)
    })
  },[])

  return (
    <div className='container'>
     <ul className='row'>
      {countries.map((item,index)=>{
        return (  
            <li key={index}>
              <div className='card'>
                <div className='card-title'>
                  <img src={item.flag} alt={item.name}/>
                </div>
                <div className='card-body'>
                  <div className='card-description'>
                    <h2>{item.name}</h2>
                    <ol>
                      <li>人口：<span>{item.population}</span></li>
                      <li>エリア：<span>{item.region}</span></li>
                      <li>首都：<span>{item.capital}</span></li>
                    </ol>
                  </div>
                </div>
              </div>
            </li>
        )
      })}
     </ul>
    </div>
  );
}

export default App;
