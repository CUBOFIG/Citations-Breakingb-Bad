import React, { useState, useEffect } from 'react'
import Spinner from './components/Spinner/Spinner'
import styled from '@emotion/styled'
import Phrase from './components/Phrase'
import logo from './logo.svg'

const ContainerDiv = styled.div`
  display:flex;
  align-items:center;
  padding-top:5rem;
  flex-direction:column;
`

const ButtonComponents = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 400px;
  font-family:  Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 2rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor:pointer;
    background-size: 900px;
  }
`

const App = () => {

  const [phrases, setPhrases] =useState({})
  const [show, setShow] = useState(false)

  const getApi = async () => {
    const api = await fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes")
    const phrase = await api.json()
    setShow(false)
    setPhrases(phrase[0])
  }

  const actionFunction = () =>{
    setShow(true)
    setTimeout(()=>{
      getApi()
    }, 3000)
  }

    useEffect(() => {
      getApi()
    }, [])

  return (
    <ContainerDiv className="container">
      <img className="img d-flex align-items-start" src={logo} alt="lgo"/>
     <div>
     {show ? <Spinner/> : <Phrase phrases={phrases}/> }
     </div>

      <ButtonComponents
      className="d-flex align-items-end"
        onClick={actionFunction}
      >
        Get Phrase
      </ButtonComponents>

    
    </ContainerDiv>
  );
}

export default App;
