import { Route, Routes } from "react-router-dom"
import Home from "../Home-comps/Home/Home"
import Success from "../Success/Success"
import { useState } from "react"


function App() {

  const [emailInput, setEmailInput] = useState('');

 return (
  <Routes>
    <Route path="/" element={<Home emailInput={emailInput} setEmailInput={setEmailInput} />} />
    <Route path="/success" element={<Success emailInput={emailInput} setEmailInput={setEmailInput} />} />
  </Routes>
 )
}

export default App
