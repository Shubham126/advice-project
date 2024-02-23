import { useState } from 'react'
import axios from 'axios';

import './App.css'

function App() {
  const [advice, setAdvice] = useState('')

  

  const getAdvice = () => {
    axios.get('	https://api.adviceslip.com/advice')
    .then(function (response) {
      setAdvice(response.data.slip.advice);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  return (
    <>
    <div>
      {advice}
    </div>
    <button onClick={getAdvice}>Click to get more Advise</button>
    </>
  )
}

export default App
