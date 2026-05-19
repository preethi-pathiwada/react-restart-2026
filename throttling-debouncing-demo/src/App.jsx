import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [inputVal, setInput] = useState("")
  const [debouncedVal, setDebouncedVal] = useState("")
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  const fetchData = async () => {
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users/')
        if (!response.ok) throw new Error("Network call is unsuccessful")
        const result = await response.json()
        setData(result)
        setFilteredData(result)
        }
      catch(err){
        console.log(err.message)
      }
      
    }

  const onChangeName = e => {
    setInput(e.target.value)
  }

  useEffect(() => {
        fetchData()
      }, [])
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedVal(inputVal)
      console.log("Timer Started")
      const filterArr = data.filter(obj => obj.name.toLowerCase().includes(inputVal.toLowerCase()))
      setFilteredData(filterArr)
    }, 2000)
    return () => clearTimeout(timer)
  }, [inputVal, data])


  return(
    <>
      <div className="bg-page">
        <h1 className="heading">Demo of Throttling, Debouncing</h1>
        <input type="search" placeholder="Enter your search text here" 
        onChange = {onChangeName} value={inputVal}/>
        {filteredData.length!==0 && 
        <ul className='list-container'>
          {filteredData.map(obj => <li key={obj.id}>{obj.name}</li>)}
        </ul>}
      </div>
    </>
  )
}


export default App
