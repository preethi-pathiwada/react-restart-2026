import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [formData, setFormData] = useState({name:"", email:"", password:"", passwordMatch:""})
  const [errors, setErrors] = useState({})

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData({...formData, [name]:value})
  }

  const submitForm = e => {
    e.preventDefault()
    console.log("Clicked")
    console.log(formData)
    let newErrors = {}
    if (!formData.email){
      newErrors.email = "*Email is required"
    }else if (!formData.email.includes("@")) newErrors.email="*Please enter a valid email"
    
    if(formData.password.length<8){
      newErrors.password = "*Password should be atleast 8 characters"
    }
    if (formData.password !== formData.passwordMatch){
      newErrors.passwordMatch = "*Password do not match"
    }
    setErrors(newErrors)
    if(Object.keys(newErrors).length==0){
      console.log("Login successful")
    }
    

  }

  return (
    <form onSubmit={submitForm} noValidate>
      <input type="text" name='name' placeholder='Enter your name' value={formData.name} onChange={handleChange}/>    
      <input type="email" name='email' placeholder='Enter your email' value={formData.email} onChange={handleChange}/>
      {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
      <input type='password' name="password" placeholder="Enter password" value={formData.password} onChange={handleChange}/>
      <p style={{color:"red"}}>{errors.password}</p>
      <input type='password' name='passwordMatch' placeholder="Confirm Password" value={formData.passwordMatch} onChange={handleChange}/>
      <p style={{color:"red"}}>{errors.passwordMatch}</p>
      <button type="submit" disabled={!formData.email || !formData.password} >Login</button>
    </form>
  )
}

export default App
