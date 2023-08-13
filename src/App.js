import {useState} from 'react'
import './App.css';

function App() {
  const data = [
    {id:1,name:"Thailand",region:"Asia",population:100},
    {id:2,name:"Japan",region:"Asia",population:100}
  ]

  const [countries,setCounties] = useState(data)

  return (
    <div className='container'>
     <ul>
      {countries.map((item)=>{
        return <li key={item.id}>{item.name} | {item.region}</li>
      })}
     </ul>
    </div>
  );
}

export default App;
