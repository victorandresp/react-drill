import { useFetch } from '../hooks'
import './App.css'
// TODO: Create a custom hook for detect prefered theme of user an set and manipulate it by a button
function App() {
  const url = "https://meowfacts.herokuapp.com/"
  const { data, error, loading } = useFetch(url)

  const getFunction = () =>{
    if(loading){
      return (<h2>Cargando...</h2>)
    }
    if(error){
      return (<h2>UPS! existe un error: {error.message}</h2>)
    }

    return (<h1>{JSON.stringify(data)}</h1>)
  }
  return (
    <>
      {getFunction()}
    </>
  )
}

export default App
